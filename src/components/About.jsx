import { about } from '../data'
import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 py-16">
      <SectionLabel>About</SectionLabel>
      <p className="text-base leading-8 text-gray-700 font-light">
        {about}
      </p>
    </section>
  )
}
