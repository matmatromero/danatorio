import { experience } from '../data'
import SectionLabel from './SectionLabel'

function Role({ role }) {
  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
        <div>
          <h3 className="font-semibold text-[#111111]">{role.org}</h3>
          {role.orgDetail && (
            <p className="text-xs text-gray-400">{role.orgDetail}</p>
          )}
          <p className="text-sm italic text-accent mt-0.5">
            {role.title}
            {role.note && (
              <span className="not-italic text-gray-400"> — {role.note}</span>
            )}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-gray-400 whitespace-nowrap">{role.period}</p>
          <p className="text-xs text-gray-400">{role.location}</p>
        </div>
      </div>
      <ul className="mt-3 space-y-1.5">
        {role.bullets.map((b, i) => (
          <li key={i} className="text-sm text-gray-600 font-light leading-relaxed flex gap-2">
            <span className="text-accent shrink-0 mt-0.5">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-content mx-auto px-6 py-16">
      <SectionLabel>Experience</SectionLabel>
      {experience.map((track) => (
        <div key={track.track} className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-300 mb-6">
            {track.track}
          </p>
          {track.roles.map((role, i) => (
            <Role key={i} role={role} />
          ))}
        </div>
      ))}
    </section>
  )
}
