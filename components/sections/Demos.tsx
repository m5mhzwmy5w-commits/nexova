'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const demoColors = [
  { bg: 'from-amber-950/60 to-orange-950/40', accent: 'text-amber-400', border: 'border-amber-500/15', dot: 'bg-amber-400' },
  { bg: 'from-slate-900/80 to-zinc-900/60', accent: 'text-slate-300', border: 'border-slate-500/15', dot: 'bg-slate-400' },
  { bg: 'from-blue-950/60 to-cyan-950/40', accent: 'text-cyan-400', border: 'border-cyan-500/15', dot: 'bg-cyan-400' },
  { bg: 'from-emerald-950/60 to-teal-950/40', accent: 'text-emerald-400', border: 'border-emerald-500/15', dot: 'bg-emerald-400' },
];

export default function Demos() {
  const { t } = useLang();

  return (
    <section id="demos" className="py-24 lg:py-32 relative">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.demos.title}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t.demos.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.demos.projects.map((project, i) => {
            const color = demoColors[i];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl border ${color.border} bg-gradient-to-br ${color.bg} p-8 overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}
              >
                {/* Tag */}
                <div className={`inline-flex items-center gap-2 text-xs font-semibold ${color.accent} mb-6`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                  {project.tag}
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{project.location}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-8">
                  {project.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className={`w-1 h-1 rounded-full ${color.dot} opacity-70`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/demos/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-2.5 rounded-full transition-all duration-200"
                >
                  {t.demos.viewDemo}
                  <span>→</span>
                </Link>

                {/* Decorative circle */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/2 border border-white/5" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
