import { EducationInfo } from 'app/components/education'

export const metadata = {
  title: 'Education',
  description: 'Read my education.',
}

export default function Page() {
  return (
    <section>
      <EducationInfo />
    </section>
  )
}