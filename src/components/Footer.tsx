export function Footer() {
  return (
    <footer className="border-t border-line pt-6 pb-10">
      <p className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[13px] text-muted">
        <span>Ivan Andreev</span>
        <a href="mailto:ivanfestina@gmail.com" className="transition-colors hover:text-accent">
          ivanfestina@gmail.com
        </a>
        <a
          href="https://github.com/IvanFestina"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-accent"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-andreev-86853a233"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  )
}
