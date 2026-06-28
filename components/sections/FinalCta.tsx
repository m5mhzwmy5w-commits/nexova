'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

export default function FinalCta() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t.finalCta.title}
          </h2>
          <p className="text-slate-400 text-lg mb-10">{t.finalCta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="btn-primary px-8 py-4 rounded-full text-base font-semibold text-white w-full sm:w-auto text-center"
            >
              {t.finalCta.cta}
            </Link>
            <Link
              href="/#demos"
              className="btn-secondary px-8 py-4 rounded-full text-base font-semibold w-full sm:w-auto text-center"
            >
              {t.finalCta.secondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
