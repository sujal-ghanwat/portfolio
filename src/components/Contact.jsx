
import { motion } from 'framer-motion'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
} from 'react-icons/fi'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-medium text-violet-400">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact <span className="text-violet-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            I'm open to opportunities where I can learn, contribute,
            and grow as a developer. Feel free to connect with me.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 sm:p-10"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-2xl text-violet-400">
                <FiMail />
              </div>

              <h3 className="text-xl font-semibold">
                Let's Connect
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Have a job opportunity, internship, or project in mind?
                I'd love to hear from you.
              </p>

              <a
                href="sujalghanwat556@gmail.com"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-600"
              >
                <FiSend />
                Send Me an Email
              </a>

              <p className="mt-3 text-xs text-slate-500">
                Replace the example email with your real email address.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <a
                href="https://github.com/sujal-ghanwat"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-violet-500"
              >
                <FiGithub className="text-2xl text-violet-400" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-slate-400">
                    Explore my projects
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sujal-ghanwat7114"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-violet-500"
              >
                <FiLinkedin className="text-2xl text-violet-400" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-slate-400">
                    Connect professionally
                  </p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
