
import { FiHeart, FiArrowUp } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#home" className="text-xl font-bold">
          Sujal<span className="text-violet-400"></span>
        </a>

        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Sujal Ghanwat. All rights reserved.
        </p>

        <p className="flex items-center gap-2 text-sm text-slate-400">
          Made with <FiHeart className="text-violet-400" /> using React
        </p>
      </div>
    </footer>
  )
}

export default Footer
