import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getEducationInfo } from 'app/education/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  const educations = getEducationInfo()
  return educations.map((education) => ({
    slug: education.slug,
  }))
}

export async function generateMetadata(props) {
  const params = await props.params;
  const education = getEducationInfo().find((p) => p.slug === params.slug)
  if (!education) return {}

  const {
    name: title,
    grade: description,
    image,
    period: publishedTime
  } = education.metadata
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/education/${education.slug}`,
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

export default async function Education(props) {
  const params = await props.params;
  const education = getEducationInfo().find((p) => p.slug === params.slug)
  if (!education) notFound()

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Education',
            name: education.metadata.name,
            dateCreated: education.metadata.period.split('-')[0],
            description: education.metadata.grade,
            url: `${baseUrl}/educations/${education.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {education.metadata.name}
      </h1>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-neutral-600 dark:text-neutral-400">
          {education.metadata.period}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Grade</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          {education.metadata.grade}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Modules</h2>
        <ul className="list-disc pl-5 space-y-1">
          {education.metadata.modules.map((contribution, i) => (
            <li key={i}>{contribution}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {education.metadata.technologies.map((tech) => (
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
        <CustomMDX source={education.content} />
      </article>
    </section>
  )
}