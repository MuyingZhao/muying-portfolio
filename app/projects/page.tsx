import { ProjectsInfo } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Read my projects.',
}

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-4">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <ProjectsInfo />
    </section>
  )
}