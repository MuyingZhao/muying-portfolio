import fs from 'fs'
import path from 'path'

type EducationMetadata = {
  name: string
  period: string
  grade: string
  modules: string[]
  technologies: string[]
  image?: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  
   // Initialize with proper types
   const metadata: {
    name?: string;
    period?: string;
    grade?: string;
    modules: string[];
    technologies: string[];
    image?: string;
  } = {
    modules: [],
    technologies: []
  };

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    const trimmedKey = key.trim();
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');

    if (trimmedKey === 'modules' || trimmedKey === 'technologies') {
      // Handle array fields
      const items = value.split('·')
        .map(item => item.trim())
        .filter(item => item);
      metadata[trimmedKey] = items;
    } else {
      // Handle string fields
      metadata[trimmedKey as Exclude<keyof EducationMetadata, 'modules' | 'technologies'>] = value;
    }
  });

  return {
    metadata: metadata as EducationMetadata,
    content
  };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getEducationInfo() {
  return getMDXData(path.join(process.cwd(), 'app', 'education', 'info'))
}



