import { ExperienceInfo } from "app/components/experience"

export const metadata = {
  title: 'Experiences',
  description: 'Read my experiences.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Experience</h1>
      <ExperienceInfo />
    </section>
  )
}