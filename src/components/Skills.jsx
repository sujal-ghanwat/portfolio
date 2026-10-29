
import { motion } from 'framer-motion'
import {
  FiCode,
  FiGlobe,
  FiDatabase,
  FiTool,
} from 'react-icons/fi'

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: FiGlobe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: FiDatabase,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Programming',
    icon: FiCode,
    skills: ['JavaScript', 'Java', 'Problem Solving'],
  },
  {
    title: 'Tools & Platforms',
    icon: FiTool,
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
]

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-medium text-violet-400">
            WHAT I KNOW
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="text-violet-400">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-2 hover:border-violet-500"
              >
                <div className="mb-5 inline-flex rounded-xl bg-violet-500/10 p-3 text-2xl text-violet-400">
                  <Icon />
                </div>

                <h3 className="mb-4 text-lg font-semibold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
