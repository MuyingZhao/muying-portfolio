import { getBlogPosts } from 'app/blog/utils'
import { getProjectsInfo } from './projects/utils'
import { getEducationInfo } from './education/utils'
import { getExperienceInfo } from './experience/utils'

export const baseUrl = 'https://muyingzhao.co.uk'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let projects = getProjectsInfo().map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.metadata.period.split('-')[1] // Use end date
  }))

  let expriences = getExperienceInfo().map(experience => ({
    url: `${baseUrl}/experience/${experience.slug}`,
    lastModified: experience.metadata.period.split('-')[1] // Use end date
  }))

  let education = getEducationInfo().map(education => ({
    url: `${baseUrl}/education/${education.slug}`,
    lastModified: education.metadata.period.split('-')[1] // Use end date
  }))

  let routes = ['', '/blog', '/projects', '/experience', '/education'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))


  return [...routes, ...blogs, ...projects, ...expriences, ...education]
}
