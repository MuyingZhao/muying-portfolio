import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getExperienceInfo } from 'app/experience/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  const projects = getExperienceInfo()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getExperienceInfo().find((p) => p.slug === params.slug)
  if (!project) return {}

  const {
    name: title,
    summary: description,
    image,
    period: publishedTime
  } = project.metadata
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Project({ params }: { params: { slug: string } }) {
  const project = getExperienceInfo().find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Project',
            name: project.metadata.name,
            dateCreated: project.metadata.period.split('-')[0],
            description: project.metadata.summary,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {project.metadata.name}
      </h1>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-neutral-600 dark:text-neutral-400">
          {project.metadata.period}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Summary</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          {project.metadata.summary}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">My Contributions</h2>
        <ul className="list-disc pl-5 space-y-1">
          {project.metadata.contributions.map((contribution, i) => (
            <li key={i}>{contribution}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.metadata.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}