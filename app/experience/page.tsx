import { Experience } from "app/components/experience"

export const metadata = {
  title: 'Projects',
  description: 'Read my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Experience</h1>
      <Experience />
    </section>
  )
}