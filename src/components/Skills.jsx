import { skills, certifications, tools, languages } from '../data'
import SectionLabel from './SectionLabel'

export default function Skills() {
  return (
    <section id="skills" className="max-w-content mx-auto px-6 py-16">
      <SectionLabel>Skills</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
        {skills.map((cluster) => (
          <div key={cluster.cluster}>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
              {cluster.cluster}
            </p>
            <ul className="space-y-1">
              {cluster.items.map((item) => (
                <li key={item} className="text-sm text-gray-600 font-light flex gap-2">
                  <span className="text-accent shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-8 space-y-4">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
            Certifications
          </span>
          <ul className="mt-2 space-y-1">
            {certifications.map((c) => (
              <li key={c} className="text-sm text-gray-600 font-light flex gap-2">
                <span className="text-accent shrink-0">—</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
            Tools
          </span>
          <p className="mt-1 text-sm text-gray-600 font-light">
            {tools.join(' · ')}
          </p>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
            Languages
          </span>
          <p className="mt-1 text-sm text-gray-600 font-light">
            {languages.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  )
}
