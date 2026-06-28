'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const menu = [
  { name: 'Antipasti', items: ['Bruschetta al Pomodoro', 'Carpaccio di Manzo', 'Burrata con Prosciutto'] },
  { name: 'Primi', items: ['Tagliatelle al Ragù', 'Risotto ai Funghi Porcini', 'Spaghetti alle Vongole'] },
  { name: 'Secondi', items: ['Branzino al Forno', 'Costata di Vitello', 'Pollo alla Cacciatora'] },
];

const hours = [
  { day: 'Mon–Thu', time: '11:30 – 14:30 / 18:00 – 22:00' },
  { day: 'Fri–Sat', time: '11:30 – 14:30 / 18:00 – 23:00' },
  { day: 'Sunday', time: '12:00 – 15:00' },
];

export default function CasaLumePage() {
  const { t } = useLang();
  const demo = t.demos.projects[0];

  return (
    <div className="bg-[#0c0804] min-h-screen text-amber-50">
      {/* Back to Nexova */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#demos"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur border border-white/10 text-sm text-slate-300 hover:text-white transition-colors"
        >
          {t.demos.backToNexova}
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-orange-950 to-[#0c0804]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0804] via-transparent to-transparent" />
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '30px 30px'}} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">Ristorante Italiano — Sion, Valais</p>
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-6" style={{fontStyle: 'italic'}}>Casa Lume</h1>
            <p className="text-amber-100/70 text-lg max-w-xl mb-10">
              Authentic Italian cuisine crafted with passion, served in the heart of Sion. Reserve your table for an unforgettable evening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-colors">
                Reserve a table
              </button>
              <button className="px-8 py-4 rounded-full border border-amber-500/40 text-amber-200 hover:bg-amber-500/10 transition-colors font-medium">
                View menu ↓
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-amber-100 mb-12 text-center">Il Menù</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menu.map((section) => (
              <div key={section.name} className="bg-amber-950/30 border border-amber-800/20 rounded-2xl p-6">
                <h3 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-4">{section.name}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="text-amber-100/80 text-sm border-b border-amber-800/20 pb-3 last:border-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-amber-950/20 border-y border-amber-800/15">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-amber-100 mb-8">Orari di Apertura</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hours.map((h) => (
              <div key={h.day} className="bg-amber-900/20 rounded-xl p-4">
                <p className="text-amber-400 font-semibold text-sm mb-1">{h.day}</p>
                <p className="text-amber-100/70 text-xs">{h.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-amber-100 mb-4">Where to find us</h2>
        <p className="text-amber-100/60 mb-2">Rue de Lausanne 14, 1950 Sion, Valais</p>
        <p className="text-amber-100/60 mb-8">+41 27 123 45 67</p>
        <div className="aspect-video rounded-2xl bg-amber-900/20 border border-amber-800/20 flex items-center justify-center">
          <p className="text-amber-400/60 text-sm">Google Maps — Sion, Valais</p>
        </div>
      </section>

      {/* Demo badge */}
      <div className="fixed bottom-4 right-4 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs backdrop-blur">
        Demo website by Nexova
      </div>
    </div>
  );
}
