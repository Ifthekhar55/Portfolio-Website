import { motion } from 'framer-motion';

void motion;

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignmentClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignmentClass} gap-3 max-w-2xl`}
    >
      <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="text-sm leading-7 text-slate-700 sm:text-base dark:text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}

export default SectionHeading;
