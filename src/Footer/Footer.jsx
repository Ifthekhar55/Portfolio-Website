import { useEffect, useState } from 'react';
import { FiArrowUp, FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi';

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">© 2026 Ifthekhar Islam Jobair. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a href="https://github.com/Ifthekhar55" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:bg-white/20">
            <FiGithub size={16} />
          </a>
          <a href="https://www.instagram.com/ifthekhar__islam" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:bg-white/20">
            <FiInstagram size={16} />
          </a>
          <a href="https://www.facebook.com/share/17ZvRC5FQN/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:bg-white/20">
            <FiFacebook size={16} />
          </a>
        </div>
      </div>

      {visible && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/15 text-cyan-300 shadow-lg shadow-cyan-500/20 backdrop-blur"
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}

export default Footer;