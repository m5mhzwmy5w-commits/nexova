'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const programs = [
  {
    name: 'Starter Pack',
    sessions: '8 sessions',
    price: 'CHF 480',
    features: ['Fitness assessment', 'Personalized plan', 'Nutrition basics', 'Weekly check-in'],
    highlight: false,
  },
  {
    name: 'Transformation',
    sessions: '16 sessions',
    price: 'CHF 880',
    features: ['Full body program', 'Meal planning', 'Progress tracking', 'Priority support', 'Monthly review'],
    highlight: true,
  },
  {
    name: 'Elite Coaching',
    sessions: '24 sessions',
    price: 'CHF 1200',
    features: ['Advanced programming', 'Daily accountability', 'Body composition analysis', 'Lifestyle coaching', '24/7 messaging'],
    highlight: false,
  },
];

const benefits = [
  { icon: '🎯', text: 'Results-focused training' },
  { icon: '📊', text: 'Progress tracking every session' },
  { icon: '🥗', text: 'Nutrition guidance included' },
  { icon: '💪', text: 'Personalized to your goals' },
  { icon: '📱', text: 'Support between sessions' },
  { icon: '⚡', text: 'Efficient, structured workouts' },
];

export default function CoreUpPage() {
  const { t } = useLang();

  return (
    <div className="bg-[#060f0a] min-h-screen text-emerald-50">
      {/* Back */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/#demos" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur border border-white/10 text-sm text-slate-300 hover:text-white transition-colors">
          {t.demos.backToNexova}
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-[#060f0a]" />
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 20% 60%, rgba(16,185,129,0.08) 0%, transparent 50%)'}} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f0a] via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">Personal Trainer & Fitness Coach — Switzerland</p>
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-6 tracking-tight leading-none">CoreUp<br /><span className="text-emerald-400">Coaching</span></h1>
            <p className="text-emerald-100/60 text-lg max-w-xl mb-10">
              Real results through smart training. Personal coaching programs built around your lifestyle, goals, and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors">
                Start your journey
              </button>
              <button className="px-8 py-4 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition-colors font-medium">
                View programs ↓
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-emerald-950/20 border-y border-emerald-900/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((b) => (
              <div key={b.text} className="text-center">
                <span className="text-2xl block mb-2">{b.icon}</span>
                <p className="text-emerald-200/60 text-xs leading-tight">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Coaching Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border ${p.highlight ? 'border-emerald-500/40 bg-emerald-950/40 ring-1 ring-emerald-500/20' : 'border-emerald-900/30 bg-emerald-950/10'}`}
            >
              {p.highlight && (
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">Most Popular</span>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
              <p className="text-emerald-400 text-sm mb-4">{p.sessions}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-emerald-900/30 pt-4 flex items-center justify-between">
                <span className="text-white font-bold text-lg">{p.price}</span>
                <button className={`px-4 py-2 rounded-full text-sm font-semibold ${p.highlight ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10'} transition-colors`}>
                  Get started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16 bg-emerald-950/20 border-y border-emerald-900/20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-4">Not sure which program fits?</h2>
          <p className="text-emerald-200/60 mb-8">Send a message and we will suggest the right plan for your goals.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-emerald-950/40 border border-emerald-800/30 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-800 focus:outline-none focus:border-emerald-500/50"
            />
            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors text-sm">
              Contact me
            </button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs backdrop-blur">
        Demo website by Nexova
      </div>
    </div>
  );
}
