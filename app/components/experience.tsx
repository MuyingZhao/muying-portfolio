import Link from 'next/link'
import { getExperienceInfo } from 'app/experience/utils'

export function ExperienceInfo() {
  const allExperience = getExperienceInfo()

  return (
    <div className="space-y-6">
      {allExperience.map((experience) => (
        <Link
          key={experience.slug}
          className="block group hover:bg-neutral-50 dark:hover:bg-neutral-800 p-4 rounded-lg transition-colors"
          href={`/experience/${experience.slug}`}
        >
          <div className="flex flex-col space-y-2">
            {/* Experience Name and Period */}
            <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {experience.metadata.name}
              </h3>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {experience.metadata.period}
              </span>
            </div>

            {/* Summary */}
            <p className="text-neutral-700 dark:text-neutral-300">
              {experience.metadata.summary}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.metadata.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="text-xs bg-orange-300 dark:bg-neutral-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}