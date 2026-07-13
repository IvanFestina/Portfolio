import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { ThemeToggle } from './components/ThemeToggle'
import { Work } from './components/Work'

function App() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <header className="flex items-center justify-between pt-6">
        <span className="font-mono text-sm text-muted" aria-hidden="true">
          ~/ivan-andreev
        </span>
        <ThemeToggle />
      </header>
      <main className="pt-14 pb-20 sm:pt-20">
        <Hero />
        <Work />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
