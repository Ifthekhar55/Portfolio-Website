import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiGithub, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

void motion;
import SectionHeading from '../components/SectionHeading.jsx';

const contactLinks = [
  { icon: <FiMapPin size={18} />, title: 'Location', value: 'Chattogram, Bangladesh' },
  { icon: <FiPhone size={18} />, title: 'Phone', value: '+8801608365971' },
  { icon: <FiMail size={18} />, title: 'Email', value: 'ifthekharulislam18@gmail.com' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Ifthekhar55', icon: <FiGithub size={18} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/ifthekhar__islam', icon: <FiInstagram size={18} /> },
  { label: 'Facebook', href: 'https://www.facebook.com/share/17ZvRC5FQN/', icon: <FiFacebook size={18} /> },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email';
    if (!form.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      window.alert('Thanks for reaching out. I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something remarkable together"
        description="Open for new opportunities, collaborations, and ambitious ideas."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="section-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-fuchsia-500/10 p-6 shadow-2xl shadow-black/20 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
          <p className="mt-3 text-sm leading-8 text-slate-300">Whether you need a polished landing page, a modern portfolio, or a fast React experience, I’d love to hear about it.</p>

          <div className="mt-6 space-y-4">
            {contactLinks.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 dark:bg-slate-950/70">
                <div className="mt-0.5 rounded-2xl bg-white/10 p-2 text-cyan-300">{item.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100 transition hover:-translate-y-1 hover:bg-white/20">
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Name</span>
              <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none ring-0" placeholder="Your name" />
              {errors.name && <span className="mt-2 block text-xs text-rose-400">{errors.name}</span>}
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Email</span>
              <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none ring-0" placeholder="Your email" />
              {errors.email && <span className="mt-2 block text-xs text-rose-400">{errors.email}</span>}
            </label>
          </div>

          <label className="mt-4 block text-sm text-slate-300">
            <span className="mb-2 block">Message</span>
            <textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} rows="5" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none ring-0" placeholder="Tell me about your idea" />
            {errors.message && <span className="mt-2 block text-xs text-rose-400">{errors.message}</span>}
          </label>

          <motion.button whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-medium text-white">
            <FiMail size={16} />
            Send message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;