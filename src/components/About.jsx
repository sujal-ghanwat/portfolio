
import { FiCode, FiBookOpen, FiTarget } from 'react-icons/fi'

function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-semibold text-violet-400">
          GET TO KNOW ME
        </p>

        <h2 className="mb-12 text-center text-4xl font-bold">
          About <span className="text-violet-400">Me</span>
        </h2>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Hello! I'm Sujal 👋
            </h3>

            <p className="mb-4 leading-8 text-slate-300">
              I'm an MCA student passionate about web development
              and creating useful, user-friendly applications.
            </p>

            <p className="leading-8 text-slate-300">
              I enjoy working with React and JavaScript, learning
              new technologies, and improving my problem-solving
              and development skills. My goal is to grow as a
              developer and contribute to real-world projects.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
              <FiCode className="mt-1 shrink-0 text-3xl text-violet-400" />
              <div>
                <h4 className="font-semibold">Web Development</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Building responsive websites with React and JavaScript.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
              <FiBookOpen className="mt-1 shrink-0 text-3xl text-violet-400" />
              <div>
                <h4 className="font-semibold">Continuous Learning</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Exploring new tools and improving my technical skills.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
              <FiTarget className="mt-1 shrink-0 text-3xl text-violet-400" />
              <div>
                <h4 className="font-semibold">Career Goal</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Growing into a skilled developer through practical projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
