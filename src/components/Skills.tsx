type Group = { name: string; items: string }

const groups: Group[] = [
  {
    name: 'mobile / frontend',
    items:
      'React Native (0.81) · New Architecture (Fabric, TurboModules, JSI) · Hermes · Nitro Modules · native modules · React (19) · TypeScript 5 (strict) · Redux Toolkit · RTK Query · React Navigation 7 · Reanimated · Skia · react-native-mmkv · Jest · Detox (E2E) · JavaScript/ES6+ · HTML5 · CSS/SCSS · Tailwind',
  },
  {
    name: 'devops / infra',
    items: 'Linux · Docker · Kubernetes · CI/CD (Jenkins, fastlane) · Gradle · Git/GitHub/Bitbucket',
  },
  {
    name: 'tools / practices',
    items:
      'REST API · Swagger/generated types · BFF (backend-for-frontend) · Firebase (Analytics, Crashlytics, Messaging, Remote Config) · Notifee · ESLint · Prettier · patch-package · Husky · TDD/unit testing · performance profiling (Flipper, React DevTools, Reactotron) · Confluence',
  },
]

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="mt-16 sm:mt-20">
      <div className="flex items-baseline gap-4">
        <h2 id="skills-heading" className="font-mono text-sm font-medium text-muted">
          skills
        </h2>
        <div className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <dl className="mt-6 space-y-5">
        {groups.map((g) => (
          <div key={g.name}>
            <dt className="font-mono text-xs text-accent">{g.name}</dt>
            <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
