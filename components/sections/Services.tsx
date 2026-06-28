'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6 hover:border-blue-500/25 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <p className="text-blue-400 text-xs font-medium">{service.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
