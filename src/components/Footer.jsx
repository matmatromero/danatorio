import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-8">
      <div className="max-w-content mx-auto px-6 py-10 text-center">
        <p className="text-xs text-gray-400 font-light">
          {profile.name} ·{' '}
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
            {profile.email}
          </a>{' '}
          ·{' '}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {profile.linkedin}
          </a>
        </p>
      </div>
    </footer>
  )
}
