import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('portfolio-theme') ?? 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    body.classList.toggle('dark', theme === 'dark');
    body.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-200 shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}

export default ThemeToggle;
