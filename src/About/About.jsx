import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiSmile } from 'react-icons/fi';

import portraitImage from '/images/My-photo.jpg';

void motion;
import SectionHeading from '../components/SectionHeading.jsx';

const stats = [
  { value: '1+', label: 'Year of experience' },
  { value: '3+', label: 'Projects shipped' },
  { value: '100%', label: 'Focus on quality' },
];

const timeline = [
  {
    title: 'Software Development Intern at Tori It',
    year: 'August 2026 — Present',
    text: [
      'Contributing to software development projects in a professional team environment.',
      'Developing and maintaining application features using modern web development technologies.',
      'Collaborating with team members to troubleshoot issues, implement improvements and deliver assigned tasks.',
    ],
  },
];

function About() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12">
      <SectionHeading
        eyebrow="About me"
        title="Designing thoughtful experiences with a developer mindset"
        description="I combine visual polish, clean architecture, and performance-first thinking to create modern web interfaces that feel effortless."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="section-card rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
        >
          <div className="flex h-full min-h-[360px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-900/70">
            <img
              src={portraitImage}
              alt="Professional portrait"
              loading="eager"
              className="h-full max-h-[480px] w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="section-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-fuchsia-500/10 p-8 backdrop-blur">
            <p className="text-lg leading-8 text-slate-300">
              I am a fullstack developer focused on building premium, responsive web applications that feel seamless across devices. My work blends React, Node.js, Express.js, PostgreSQL, and clean architecture into experiences that look elegant and perform fast.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                >
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                <FiAward size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">End-to-end delivery</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">From the UI to the API layer, I focus on building complete applications that are reliable and polished.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-500/15 text-fuchsia-300">
                <FiSmile size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Clean, scalable code</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">I build interfaces and backend logic with clarity, maintainability, and performance in mind.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-card rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="mb-6 flex items-center gap-3 text-cyan-300">
          <FiBriefcase size={22} />
          <h3 className="text-xl font-semibold text-white">Journey</h3>
        </div>

        <div className="space-y-5">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-start md:justify-between"
            >
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{item.year}</div>
                <div className="mt-1 text-lg font-medium text-white">{item.title}</div>
              </div>
              <div className="max-w-2xl space-y-2 text-sm leading-7 text-slate-400">
                {item.text.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;