import { motion } from 'framer-motion';

void motion;

const blobs = [
  { className: 'left-[-10%] top-10 h-64 w-64 bg-cyan-500/20', delay: 0 },
  { className: 'right-[-5%] top-1/3 h-80 w-80 bg-fuchsia-500/20', delay: 0.2 },
  { className: 'bottom-0 left-1/3 h-72 w-72 bg-violet-500/20', delay: 0.4 },
];

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12 + index * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;
