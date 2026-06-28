'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const services = [
  { name: 'Classic Haircut', price: 'CHF 35', duration: '30 min' },
  { name: 'Beard Trim', price: 'CHF 20', duration: '20 min' },
  { name: 'Haircut + Beard', price: 'CHF 50', duration: '45 min' },
  { name: 'Hot Towel Shave', price: 'CHF 30', duration: '25 min' },
  { name: 'Premium Grooming', price: 'CHF 70', duration: '60 min' },
  { name: 'Kids Haircut', price: 'CHF 22', duration: '20 min' },
];

const reviews = [
  { name: 'Marco B.', text: 'Best barber in Valais. Always sharp, always on time.', stars: 5 },
  { name: 'Luca F.', text: 'Clean atmosphere, great haircut. Will be back.', stars: 5 },
  { name: 'David M.', text: 'Finally a barber who knows what he is doing. Highly recommend.', stars: 5 },
];

export default function StudioCortePage() {
  const { t } = useLang();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-zinc-100">
      {/* Back */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/#demos" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur border border-white/10 text-sm text-slate-300 hover:text-white transition-colors">
          {t.demos.backToNexova}
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 20px)'}} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-4">Premium Barbershop — Valais, Switzerland</p>
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4 tracking-tight">Studio Corte</h1>
            <div className="w-24 h-0.5 bg-white mb-6" />
            <p className="text-zinc-400 text-lg max-w-xl mb-10">
              Precision cuts. Refined grooming. A barbershop experience built on craft and consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-100 transition-colors">
                Book an appointment
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 text-zinc-300 hover:bg-white/5 transition-colors font-medium">
                View services ↓
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">Services & Prices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 rounded-xl p-5 hover:border-white/15 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-white">{s.name}</h3>
                <span className="text-white font-bold">{s.price}</span>
              </div>
              <p className="text-zinc-500 text-sm">{s.duration}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="bg-zinc-900 border border-white/5 rounded-xl p-5">
                <p className="text-yellow-400 text-sm mb-3">{'★'.repeat(r.stars)}</p>
                <p className="text-zinc-300 text-sm mb-3 italic">"{r.text}"</p>
                <p className="text-zinc-500 text-xs font-medium">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready for your next cut?</h2>
        <p className="text-zinc-400 mb-8">Book online or call us at +41 27 456 78 90</p>
        <button className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-100 transition-colors text-sm">
          Book now
        </button>
      </section>

      <div className="fixed bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs backdrop-blur">
        Demo website by Nexova
      </div>
    </div>
  );
}
