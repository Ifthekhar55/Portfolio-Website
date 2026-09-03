import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowDown, FiCode, FiDownload, FiMail, FiMenu, FiX } from 'react-icons/fi';

void motion;
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiVite } from 'react-icons/si';

import About from '../About/About.jsx';
import Services from '../Services/Services.jsx';
import Project from '../Project/Project.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import AnimatedBackground from '../components/AnimatedBackground.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'project', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const tools = [
  { icon: <FaReact size={22} />, label: 'React.js' },
  { icon: <FaReact size={22} />, label: 'TypeScript' },
  { icon: <FaNodeJs size={22} />, label: 'Node.js' },
  { icon: <FaDatabase size={22} />, label: 'PostgreSQL' },
  { icon: <SiFramer size={22} />, label: 'Express.js' },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'project', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    const handleMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % 3);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="page-shell relative overflow-hidden bg-slate-950 text-slate-100" id="home">
      <ScrollProgress />
      <AnimatedBackground />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/70 bg-cyan-400/10 lg:block"
        animate={{ x: cursorPos.x, y: cursorPos.y }}
        transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.4 }}
      />

      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-slate-950/70 backdrop-blur-xl' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button type="button" onClick={() => scrollToSection('home')} className="text-lg font-semibold tracking-[0.25em] text-white">
            IFTHEKHAR
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${activeSection === item.id ? 'bg-white/15 text-cyan-300' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-200 backdrop-blur md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur md:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full rounded-2xl px-4 py-3 text-left text-sm transition ${activeSection === item.id ? 'bg-cyan-500/15 text-cyan-300' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300">
              <FiCode size={16} />
              <span>Available for freelance and full-time work</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Building modern fullstack web experiences with clean code and thoughtful product design.
            </h1>

            <div className="mt-6 flex min-h-12 items-center text-xl text-slate-300 sm:text-2xl">
              <span className="mr-2">I am a</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="font-semibold text-cyan-300"
              >
                {['Fullstack Developer', 'React Developer', 'Node.js Developer'][roleIndex]}
              </motion.span>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build fast, modern web applications with HTML, CSS, JavaScript, React,TypeScript,Node.js, Express.js & PostgreSQL.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/images/Ifthekhar-Islam-Resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-6 py-3 font-medium text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-500/25"
              >
                <FiDownload size={18} />
                Download Resume
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-white/20"
              >
                <FiMail size={18} />
                Let&apos;s Talk
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                >
                  {tool.icon}
                  <span>{tool.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/20 blur-3xl" />
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 140, damping: 14 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur"
            >
              <img
                src="/images/My-photo.jpg"
                alt="Portrait of Ifthekhar Islam Jobair"
                loading="lazy"
                className="h-[420px] w-full rounded-[1.6rem] object-cover object-top sm:h-[500px]"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-3 text-sm text-slate-400"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="h-14 w-14 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Initializing experience</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Home />

      <section id="about" className="section-shell bg-slate-950/90 px-4 py-24 sm:px-6 lg:px-8">
        <About />
      </section>

      <section id="skills" className="section-shell bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <Services />
      </section>

      <section id="project" className="section-shell bg-slate-950/90 px-4 py-24 sm:px-6 lg:px-8">
        <Project />
      </section>

      <section id="contact" className="section-shell bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
