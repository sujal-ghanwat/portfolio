
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'FeedbackIQ AI',
    category: 'Web Application',
    description:
      'A feedback management application where users can submit feedback and view organized feedback records.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/sujal-ghanwat',
    demo: '',
  },
  {
    title: 'Fitness Tracker',
    category: 'Full Stack Application',
    description:
      'A fitness tracking application designed to manage workouts and display fitness information through a dashboard.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/sujal-ghanwat/fitness-tracker',
    demo: '',
  },
  {
    title: 'Text Translator',
    category: 'Frontend Application',
    description:
      'A translation application built with React and Tailwind CSS, designed to provide a simple user interface for translating text.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API'],
    github: 'https://github.com/sujal-ghanwat/text-translator',
    demo: '',
  },
  {
    title: 'VELOOP Captcha Earn',
    category: 'Web Application',
    description:
      'A responsive web project with captcha interactions, a reward balance, and a dark glassmorphism interface.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/sujal-ghanwat/veloop-captcha-earn',
    demo: 'https://velop-captcha-earn.vercel.app',
  },
  {
    title: 'Weather App',
    category: 'Web Application',
    description:
      'A weather application with a modern interface that uses weather data from an external API.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'API'],
    github: 'https://github.com/sujal-ghanwat',
    demo: '',
  },
  {
    title: 'Calculator',
    category: 'Frontend Application',
    description:
      'A simple calculator project created to practice user interactions and basic mathematical operations.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sujal-ghanwat',
    demo: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-medium text-violet-400">
            MY WORK
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <span className="text-violet-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            A selection of projects I've worked on while learning and
            building my development skills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-2 hover:border-violet-500"
            >
              <p className="mb-3 text-sm text-violet-400">
                {project.category}
              </p>

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-5 border-t border-slate-800 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-violet-400"
                >
                  <FiGithub /> GitHub <FiExternalLink />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-violet-400"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
