import { Hero } from './components/Hero'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <header className="flex items-center justify-between pt-6">
        <span className="font-mono text-sm text-muted" aria-hidden="true">
          ~/ivan-andreev
        </span>
        <ThemeToggle />
      </header>
      <main className="pt-14 pb-24 sm:pt-20">
        <Hero />
      </main>
    </div>
  )
}

export default App
