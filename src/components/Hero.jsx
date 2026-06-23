import { profile } from '../data'

export default function Hero() {
  return (
    <section className="max-w-content mx-auto px-6 py-24 sm:py-32">
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-[#111111]">
        {profile.name}
      </h1>

      <p className="mt-3 text-sm font-medium tracking-widest uppercase text-accent">
        {profile.credentials}
      </p>

      <p className="mt-4 text-base sm:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
        {profile.title}
      </p>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-accent transition-colors"
        >
          {profile.email}
        </a>
        <span className="hidden sm:inline text-gray-200">|</span>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          {profile.linkedin}
        </a>
        <span className="hidden sm:inline text-gray-200">|</span>
        <span>{profile.phone}</span>
      </div>

      <div className="mt-8">
        <a
          href="/Dana Torio - Resume (1).pdf"
          download
          className="inline-block border border-accent text-accent text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-accent hover:text-white transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
