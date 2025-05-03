import Link from 'next/link'
import { getEducationInfo } from 'app/education/utils'

export function EducationInfo() {
  const allEducation = getEducationInfo()

  return (
    <div className="space-y-6">
      {allEducation.map((education) => (
        <Link
          key={education.slug}
          className="block group hover:bg-neutral-50 dark:hover:bg-neutral-800 p-4 rounded-lg transition-colors"
          href={`/education/${education.slug}`}
        >
          <div className="flex flex-col space-y-2">
            {/* Education Name and Period */}
            <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {education.metadata.name}
              </h3>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {education.metadata.period}
              </span>
            </div>

            {/* Grade */}
            <p className="text-neutral-700 dark:text-neutral-300">
              {education.metadata.grade}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {education.metadata.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="text-xs bg-green-600 dark:bg-neutral-700 px-2 py-1 rounded"
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