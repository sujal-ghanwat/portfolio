
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowUpRight, FiDownload } from 'react-icons/fi'

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-medium text-violet-400">
            Hello, welcome to my portfolio 👋
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            I'm Sujal
            <span className="block text-violet-400">
              Frontend Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-slate-300">
            I'm an MCA student passionate about building modern,
            responsive and user-friendly web applications using
            React and JavaScript.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
            >
              View Projects <FiArrowUpRight />
            </a>

            
            <a
              href="/resume/Sujal%20Ghanwat%20Resume.pdf"
              target="_blank"
             rel="noreferrer"
             className="inline-flex items-center gap-2"
             >
               Resume <FiDownload />
            </a>

          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/sujal-ghanwat"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl text-slate-300 transition hover:text-violet-400"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-slate-300 transition hover:text-violet-400"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          
        <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 p-1 shadow-2xl shadow-violet-500/20 sm:h-80 sm:w-80">
          <img
             src="/images/profile.jpg"
              alt="Sujal Ghanwat"
             className="h-full w-full rounded-full border-4 border-slate-950 object-cover"
          />
        </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
