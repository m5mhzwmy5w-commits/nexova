'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

interface FormData {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  projectType: string;
  budget: string;
  message: string;
}

const emptyForm: FormData = {
  name: '',
  email: '',
  businessName: '',
  businessType: '',
  projectType: '',
  budget: '',
  message: '',
};

export default function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      if (res.ok) {
        setStatus('success');
        setForm(emptyForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputCls =
    'w-full bg-[#0f1623] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200';

  const labelCls = 'block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider';

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 lg:p-10"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-white font-semibold text-lg">{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{t.contact.labels.name} *</label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.placeholders.name}
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>{t.contact.labels.email} *</label>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.placeholders.email}
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{t.contact.labels.businessName}</label>
                  <input
                    type="text"
                    placeholder={t.contact.placeholders.businessName}
                    value={form.businessName}
                    onChange={(e) => update('businessName', e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>{t.contact.labels.businessType}</label>
                  <input
                    type="text"
                    placeholder={t.contact.placeholders.businessType}
                    value={form.businessType}
                    onChange={(e) => update('businessType', e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{t.contact.labels.projectType}</label>
                  <select
                    value={form.projectType}
                    onChange={(e) => update('projectType', e.target.value)}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="">{t.contact.selectPlaceholder}</option>
                    {t.contact.projectTypes.map((pt) => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{t.contact.labels.budget}</label>
                  <select
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="">{t.contact.selectPlaceholder}</option>
                    {t.contact.budgets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelCls}>{t.contact.labels.message} *</label>
                <textarea
                  required
                  rows={5}
                  placeholder={t.contact.placeholders.message}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-red-400 text-sm">{t.contact.error}</p>
              )}

              {/* Submit */}
              <div className="flex flex-col items-start gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? t.contact.sending : t.contact.cta}
                </button>
                <p className="text-slate-600 text-xs">{t.contact.reassurance}</p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
