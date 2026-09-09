import { motion } from 'framer-motion';
import { FiLayers, FiMonitor, FiZap } from 'react-icons/fi';

void motion;
import SectionHeading from '../components/SectionHeading.jsx';

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FiMonitor size={20} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Responsive UI'],
    accent: 'from-cyan-500/20 to-slate-900/80',
  },
  {
    title: 'Backend',
    icon: <FiLayers size={20} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Performance'],
    accent: 'from-fuchsia-500/20 to-slate-900/80',
  },
  {
    title: 'Database & Tools',
    icon: <FiZap size={20} />,
    skills: ['PostgreSQL', 'Git', 'GitHub', 'Version Control', 'Deployment'],
    accent: 'from-violet-500/20 to-slate-900/80',
  },
];

function Services() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10">
      <SectionHeading
        eyebrow="Skills"
        title="A modern toolkit for polished product development"
        description="My strengths span interface design, frontend architecture, animation, and performant application building."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className={`rounded-[1.8rem] border border-white/10 bg-gradient-to-br ${group.accent} p-6 shadow-2xl shadow-black/20 backdrop-blur`}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
              {group.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Selected strengths</h3>
            <p className="mt-3 text-sm leading-8 text-slate-400">I focus on building reliable, scalable web applications with thoughtful UX, clean architecture, and strong backend integration.</p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'React & UI development', value: '100%' },
              { label: 'Node.js & API development', value: '100%' },
              { label: 'Database & backend integration', value: '100%' },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
