import portrait from '../assets/portrait.jpg'

const CV_URL =
  'https://github.com/IvanFestina/CV/raw/main/Ivan%20Andreev%20-%20React%20Native%20Developer.pdf'

const links = [
  { label: 'GitHub', href: 'https://github.com/IvanFestina' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ivan-andreev-86853a233' },
  { label: 'Email', href: 'mailto:ivanfestina@gmail.com' },
]

export function Hero() {
  return (
    <section aria-label="Introduction" className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
      <img
        src={portrait}
        alt="Portrait of Ivan Andreev"
        width="112"
        height="112"
        className="size-24 rounded-full border border-line object-cover sm:size-28"
      />
      <div>
        <p className="font-mono text-xs text-muted">5+ years · iOS &amp; Android · production B2B apps</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Ivan Andreev</h1>
        <p className="mt-2 text-lg text-muted">
          React Native Developer <span className="text-ink">·</span> React · TypeScript, expanding into DevOps
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="inline-block rounded-md border border-line px-3.5 py-2 font-mono text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-md border border-accent px-3.5 py-2 font-mono text-[13px] font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              Download CV ↓
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
