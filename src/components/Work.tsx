type Fact = { key: string; value: string }
type Link = { label: string; href: string }

type Project = {
  eyebrow: string
  title: string
  description: string
  facts: Fact[]
  live: boolean
  links: Link[]
  sourceNote: string
}

const projects: Project[] = [
  {
    eyebrow: 'Sber Business Soft · 2023 – present',
    title: 'My CRM («Мой CRM»)',
    description:
      'Enterprise CRM for iOS and Android built on a configurable entity engine — almost no static screens. Top-3 contributor for ~3 years: major React Native / React / TypeScript upgrades across a ~130-screen codebase, design-system migration (~116 components), real-time chat with voice messages, Skia charts, and the filtering subsystem.',
    facts: [
      { key: 'platform', value: 'iOS · Android' },
      { key: 'users', value: '~5.2K MAU' },
      { key: 'installs', value: '20K+ App Store' },
      { key: 'countries', value: '4' },
    ],
    live: true,
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/ru/app/%D0%BC%D0%BE%D0%B9-crm/id6444314054',
      },
    ],
    sourceNote: 'production app · closed source',
  },
  {
    eyebrow: 'WestPower · 2022 – 2023',
    title: 'Order Picker for Pravilnaya Korzinka + LeMurrr',
    description:
      'Order-picking app for a B2B grocery retail chain, built from scratch and deployed across 200+ stores: order intake, barcode scanning, delivery handoff, in-app payment. Also shipped the chain’s customer app and LeMurrr, a pet-supplies store app — running the full release cycle solo with OTA updates (EAS).',
    facts: [
      { key: 'platform', value: 'iOS · Android' },
      { key: 'rollout', value: '200+ stores' },
      { key: 'releases', value: 'solo · OTA' },
    ],
    live: true,
    links: [
      {
        label: 'Google Play — Picker app',
        href: 'https://play.google.com/store/apps/details?id=com.festina.rightbasket',
      },
      {
        label: 'Google Play — LeMurrr',
        href: 'https://play.google.com/store/apps/details?id=ru.lemurrr.app',
      },
    ],
    sourceNote: 'production apps · closed source',
  },
  {
    eyebrow: 'Personal DevOps lab',
    title: 'ops-forge',
    description:
      'A Dockerized full-stack environment: NestJS backend, React / Vite / Tailwind frontend, a Dockerfile per service, an nginx reverse proxy, a Makefile, and Playwright E2E tests.',
    facts: [
      { key: 'stack', value: 'Docker · NestJS · React' },
      { key: 'e2e', value: 'Playwright' },
    ],
    live: false,
    links: [{ label: 'GitHub', href: 'https://github.com/IvanFestina/ops-forge' }],
    sourceNote: 'open source',
  },
]

export function Work() {
  return (
    <section aria-labelledby="work-heading" className="mt-16 sm:mt-20">
      <div className="flex items-baseline gap-4">
        <h2 id="work-heading" className="font-mono text-sm font-medium text-muted">
          work
        </h2>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <ul className="mt-6 space-y-5">
        {projects.map((p) => (
          <li key={p.title}>
            <article className="rounded-xl border border-line bg-surface p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-mono text-xs text-muted">{p.eyebrow}</p>
                <p className="font-mono text-xs text-muted">{p.sourceNote}</p>
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
              <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[13px]">
                {p.facts.map((f) => (
                  <div key={f.key} className="flex gap-1.5">
                    <dt className="text-muted">{f.key}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
                {p.live && (
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-ok" aria-hidden="true" />
                    <dd className="text-ok">in production</dd>
                  </div>
                )}
              </dl>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {p.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block rounded-md border border-line px-3.5 py-2 font-mono text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
