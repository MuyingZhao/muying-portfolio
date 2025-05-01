import { ProjectsInfo } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Read my projects.',
}

export default function Page() {
  return (
    <section>
      <ProjectsInfo />
    </section>
  )
}