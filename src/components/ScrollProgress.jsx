import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(percent);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 transition-[width] duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
