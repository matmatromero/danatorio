import { education } from '../data'
import SectionLabel from './SectionLabel'

export default function Education() {
  return (
    <section id="education" className="max-w-content mx-auto px-6 py-16">
      <SectionLabel>Education</SectionLabel>
      <div className="space-y-8">
        {education.map((entry, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="font-semibold text-[#111111]">{entry.institution}</h3>
                {entry.degree && (
                  <p className="text-sm italic text-accent mt-0.5">{entry.degree}</p>
                )}
                {entry.period && (
                  <p className="text-xs text-gray-400 mt-0.5">{entry.period}</p>
                )}
              </div>
              {entry.location && (
                <p className="text-xs text-gray-400 shrink-0">{entry.location}</p>
              )}
            </div>
            {entry.details.length > 0 && (
              <ul className="mt-2 space-y-1">
                {entry.details.map((d, j) => (
                  <li key={j} className="text-sm text-gray-600 font-light leading-relaxed flex gap-2">
                    <span className="text-accent shrink-0 mt-0.5">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
