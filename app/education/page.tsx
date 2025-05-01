import { EducationInfo } from 'app/components/education'

export const metadata = {
  title: 'Education',
  description: 'Read my education.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Education</h1>
      <EducationInfo />
    </section>
  )
}