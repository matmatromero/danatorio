import { community } from '../data'
import SectionLabel from './SectionLabel'

export default function Community() {
  return (
    <section id="community" className="max-w-content mx-auto px-6 py-16">
      <SectionLabel>Community</SectionLabel>
      <div className="space-y-6">
        {community.map((entry, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <p className="font-semibold text-[#111111]">
                {entry.org}
              </p>
              <p className="text-sm italic text-accent mt-0.5">{entry.role}</p>
              {entry.description && (
                <p className="mt-1.5 text-sm text-gray-600 font-light leading-relaxed">
                  {entry.description}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-400 shrink-0">{entry.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
