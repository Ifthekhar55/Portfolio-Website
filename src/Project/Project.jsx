import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

void motion;
import SectionHeading from '../components/SectionHeading.jsx';

const projects = [
  {
    title: 'Premium Portfolio Website',
    category: 'Fullstack',
    image: '/images/Portfolio.png',
    description: 'A modern portfolio experience built with React, Tailwind, Framer Motion, and Vite, focused on premium visuals and smooth interactions.',
    stack: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
    live: 'http://localhost:5174/',
    github: 'https://github.com/Ifthekhar55/Portfolio-Website',
  },
  {
    title: 'BachelorHub',
    category: 'Fullstack',
    image: '/images/Bachelorhub.png',
    description: 'BachelorHub is a full-stack web application that helps students find housing, buy and sell items, access services, and connect through an integrated community.',
    stack: ['TypeScript', 'PostgreSQL'],
    live: 'https://bachelorhub-beta.vercel.app',
    github: 'https://github.com/Ifthekhar55/bachelorhub',
  },
];

function Project() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Fullstack', 'Frontend'];
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((item) => item.category === activeFilter);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects that feel as good as they perform"
        description="Each project is designed with visual clarity, smooth motion, and a premium feel."
      />

      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === filter ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="section-card group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="overflow-hidden">
              <img src={project.image} alt={project.title} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:bg-white/20" aria-label="Live demo">
                    <FiExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:bg-white/20" aria-label="GitHub">
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Project;