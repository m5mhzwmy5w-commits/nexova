'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const packages = [
  {
    level: 'Beginner',
    tag: 'Level 1',
    price: 'CHF 85 / session',
    description: 'Learn snowplow technique, basic turns, and safe stopping on gentle slopes.',
    sessions: '4–6 sessions recommended',
    color: 'border-cyan-500/30 bg-cyan-950/20',
    tagColor: 'text-cyan-400',
  },
  {
    level: 'Intermediate',
    tag: 'Level 2',
    price: 'CHF 95 / session',
    description: 'Parallel turns, controlled speed, and progression to blue and red runs.',
    sessions: '3–5 sessions recommended',
    color: 'border-blue-500/30 bg-blue-950/20',
    tagColor: 'text-blue-400',
  },
  {
    level: 'Advanced',
    tag: 'Level 3',
    price: 'CHF 110 / session',
    description: 'Carving technique, off-piste introduction, and black run mastery.',
    sessions: '2–4 sessions recommended',
    color: 'border-indigo-500/30 bg-indigo-950/20',
    tagColor: 'text-indigo-400',
  },
];

export default function AlpineMotionPage() {
  const { t } = useLang();

  return (
    <div className="bg-[#060c18] min-h-screen text-blue-50">
      {/* Back */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/#demos" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur border border-white/10 text-sm text-slate-300 hover:text-white transition-colors">
          {t.demos.backToNexova}
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-[#060c18]" />
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(56,189,248,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.08) 0%, transparent 50%)'}} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4">Ski Instructor & Mountain Guide — Valais Alps</p>
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-6 tracking-tight leading-none">Alpine<br />Motion</h1>
            <p className="text-blue-200/70 text-lg max-w-xl mb-10">
              Private ski lessons on the best slopes of Valais. From first turns to expert carving — with a certified instructor at your side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors">
                Book a lesson
              </button>
              <button className="px-8 py-4 rounded-full border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors font-medium">
                View packages ↓
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Lesson Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border ${pkg.color} p-6`}
            >
              <span className={`text-xs font-semibold uppercase tracking-wider ${pkg.tagColor}`}>{pkg.tag}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">{pkg.level}</h3>
              <p className="text-blue-200/60 text-sm leading-relaxed mb-4">{pkg.description}</p>
              <p className="text-white font-bold mb-1">{pkg.price}</p>
              <p className="text-blue-300/50 text-xs">{pkg.sessions}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-blue-950/20 border-y border-blue-900/20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to hit the slopes?</h2>
        <p className="text-blue-200/60 mb-8">Contact us directly for availability and group rates.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors">
            Contact now
          </button>
          <p className="text-blue-200/50 text-sm">+41 79 123 45 67</p>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs backdrop-blur">
        Demo website by Nexova
      </div>
    </div>
  );
}
