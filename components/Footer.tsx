'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060a11] border-t border-white/5 mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold gradient-text">Nexova</span>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-slate-600 text-sm">{t.footer.location}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              {t.footer.links.company}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {t.footer.links.services}
              </Link>
              <Link href="/#demos" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {t.footer.links.demos}
              </Link>
              <Link href="/#process" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {t.nav.process}
              </Link>
              <Link href="/#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {t.footer.links.contact}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <a
              href="mailto:nexova.website@gmail.com"
              className="text-slate-500 hover:text-blue-400 text-sm transition-colors"
            >
              nexova.website@gmail.com
            </a>
            <p className="mt-3 text-slate-600 text-sm">Sion, Valais — Switzerland</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {year} Nexova. {t.footer.rights}
          </p>
          <p className="text-slate-700 text-xs">
            Built with precision in Switzerland.
          </p>
        </div>
      </div>
    </footer>
  );
}
