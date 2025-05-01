import { ExperienceInfo } from "app/components/experience"

export const metadata = {
  title: 'Experiences',
  description: 'Read my experiences.',
}

export default function Page() {
  return (
    <section className="max-w-5xl">
      <ExperienceInfo />
    </section>
  )
}