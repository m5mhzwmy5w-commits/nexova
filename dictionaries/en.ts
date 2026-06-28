export interface Dictionary {
  lang: string;
  nav: {
    home: string;
    services: string;
    demos: string;
    process: string;
    contact: string;
    cta: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
  };
  trust: {
    title: string;
    bullets: { icon: string; text: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string; benefit: string }[];
  };
  demos: {
    title: string;
    subtitle: string;
    viewDemo: string;
    backToNexova: string;
    projects: {
      slug: string;
      businessType: string;
      name: string;
      location: string;
      description: string;
      features: string[];
      tag: string;
    }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { number: string; title: string; description: string }[];
  };
  automations: {
    title: string;
    subtitle: string;
    items: string[];
    cta: string;
  };
  seo: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    reassurance: string;
    labels: {
      name: string;
      email: string;
      businessName: string;
      businessType: string;
      projectType: string;
      budget: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      businessName: string;
      businessType: string;
      message: string;
    };
    projectTypes: string[];
    budgets: string[];
    cta: string;
    success: string;
    error: string;
    sending: string;
    selectPlaceholder: string;
  };
  footer: {
    tagline: string;
    links: { company: string; services: string; demos: string; contact: string };
    location: string;
    rights: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
    secondary: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

const en: Dictionary = {
  lang: 'en',
  nav: {
    home: 'Home',
    services: 'Services',
    demos: 'Demos',
    process: 'Process',
    contact: 'Contact',
    cta: 'Get a free idea',
  },
  hero: {
    headline: 'Premium websites for local businesses in Switzerland.',
    subheadline:
      'Nexova builds modern, fast, mobile-friendly websites with SEO basics, contact forms, booking systems, and simple automations to help local businesses look professional and capture more clients.',
    cta: 'Get a free website idea',
    ctaSecondary: 'View demo websites',
  },
  trust: {
    title: 'Everything your business needs online',
    bullets: [
      { icon: '📱', text: 'Mobile-first design' },
      { icon: '🔍', text: 'SEO basics included' },
      { icon: '📋', text: 'Contact and booking ready' },
      { icon: '⚡', text: 'Simple automations available' },
    ],
  },
  services: {
    title: 'What we build for you',
    subtitle: 'Every service is tailored to local businesses that want to look professional online.',
    items: [
      {
        icon: '📄',
        title: 'One-page website',
        description: 'A clean, focused single page that presents your business clearly and converts visitors into leads.',
        benefit: 'Perfect for getting started quickly.',
      },
      {
        icon: '🌐',
        title: 'Full website (3–5 pages)',
        description: 'A complete website with home, about, services, gallery, and contact pages — fully responsive.',
        benefit: 'Gives your business a solid online presence.',
      },
      {
        icon: '🔍',
        title: 'SEO basics',
        description: 'Every site includes proper titles, meta descriptions, heading structure, and local keywords.',
        benefit: 'Helps you get found on Google locally.',
      },
      {
        icon: '📬',
        title: 'Contact forms',
        description: 'A professional contact form that sends leads directly to your email inbox.',
        benefit: 'Never miss a potential client again.',
      },
      {
        icon: '📅',
        title: 'Booking systems',
        description: 'Let clients book appointments or sessions directly on your website.',
        benefit: 'Save time and reduce phone calls.',
      },
      {
        icon: '⚡',
        title: 'Website automations',
        description: 'Connect your form to email, Google Sheets, Calendar, or send auto-replies.',
        benefit: 'Run your business smarter with less effort.',
      },
      {
        icon: '🔧',
        title: 'Monthly maintenance',
        description: 'We keep your website updated, secure, and running smoothly every month.',
        benefit: 'Focus on your business, not your website.',
      },
    ],
  },
  demos: {
    title: 'Real website concepts we build',
    subtitle: 'See the quality we deliver. Every demo represents a real type of project we can build for your business.',
    viewDemo: 'View demo',
    backToNexova: '← Back to Nexova',
    projects: [
      {
        slug: 'casa-lume',
        businessType: 'Restaurant',
        name: 'Casa Lume',
        location: 'Sion, Valais',
        description: 'A modern Italian restaurant website with online menu, reservation CTA, opening hours, and Google Maps integration.',
        features: ['Online menu preview', 'Reservation CTA', 'Google Maps section', 'Opening hours', 'Mobile-first layout'],
        tag: 'Restaurant',
      },
      {
        slug: 'studio-corte',
        businessType: 'Barber / Hair Salon',
        name: 'Studio Corte',
        location: 'Valais, Switzerland',
        description: 'A premium barber shop website with service pricing, online booking, client reviews, and a gallery section.',
        features: ['Services & prices', 'Online booking CTA', 'Client reviews', 'Gallery section', 'Mobile-first layout'],
        tag: 'Barber',
      },
      {
        slug: 'alpine-motion',
        businessType: 'Ski Instructor',
        name: 'Alpine Motion',
        location: 'Valais Alps, Switzerland',
        description: 'A mountain guide and ski instructor website with lesson packages, skill levels, and direct contact.',
        features: ['Lesson packages', 'Skill level sections', 'Contact CTA', 'Mountain visual style', 'Mobile-first layout'],
        tag: 'Ski Instructor',
      },
      {
        slug: 'coreup-coaching',
        businessType: 'Fitness Coach',
        name: 'CoreUp Coaching',
        location: 'Switzerland',
        description: 'A personal trainer website with coaching programs, transformation benefits, lead capture, and booking.',
        features: ['Program cards', 'Coaching benefits', 'Lead capture form', 'Booking CTA', 'Mobile-first layout'],
        tag: 'Fitness',
      },
    ],
  },
  process: {
    title: 'How we work',
    subtitle: 'A simple, clear process from first contact to launch.',
    steps: [
      {
        number: '01',
        title: 'Free idea',
        description: 'We review your business and suggest a modern website direction — completely free and without obligation.',
      },
      {
        number: '02',
        title: 'Design & build',
        description: 'We create a clean, responsive, professional website tailored to your brand and clients.',
      },
      {
        number: '03',
        title: 'SEO & automations',
        description: 'We add SEO basics, contact forms, booking tools, or simple automations if needed.',
      },
      {
        number: '04',
        title: 'Launch & support',
        description: 'Your website goes live and can be maintained monthly so it stays fresh and functional.',
      },
    ],
  },
  automations: {
    title: 'Simple automations that save you time',
    subtitle: 'Connect your website to the tools you already use. No complexity, just results.',
    items: [
      'Contact form to your email inbox',
      'Contact form to Google Sheets',
      'Automatic confirmation email to your client',
      'Booking system connection',
      'Google Calendar connection',
      'Review request after appointment',
      'Lead notification to your phone or email',
    ],
    cta: 'Ask about automations',
  },
  seo: {
    title: 'SEO basics, built into every website',
    subtitle: "We don't just build websites — we build websites that can be found.",
    items: [
      { icon: '🏷️', title: 'Optimized titles & meta descriptions', description: 'Each page has a unique, keyword-rich title and description.' },
      { icon: '📐', title: 'Proper heading structure', description: 'Clear H1, H2, H3 structure for both users and search engines.' },
      { icon: '⚡', title: 'Fast mobile pages', description: 'Optimized performance on all devices for better rankings.' },
      { icon: '🖼️', title: 'Image alt text', description: 'Every image is labeled so search engines understand your content.' },
      { icon: '📍', title: 'Local business keywords', description: 'Targeting searches specific to Valais, Sion, and your industry.' },
      { icon: '🗺️', title: 'Google Maps & contact info', description: 'Your location and contact are easy to find — for clients and Google.' },
      { icon: '🔗', title: 'Local business structured data', description: 'Schema markup that helps Google understand who you are.' },
    ],
  },
  contact: {
    title: 'Tell us about your project',
    subtitle: 'No pressure. Send your business details and Nexova will suggest a clear website direction.',
    reassurance: 'No pressure. Send your business details and Nexova will suggest a clear website direction.',
    labels: {
      name: 'Your name',
      email: 'Email address',
      businessName: 'Business name',
      businessType: 'Type of business',
      projectType: 'Project type',
      budget: 'Budget',
      message: 'Your message',
    },
    placeholders: {
      name: 'Jean Dupont',
      email: 'you@email.com',
      businessName: 'My Restaurant Sion',
      businessType: 'Restaurant, barber, coach...',
      message: 'Tell us what you need...',
    },
    projectTypes: [
      'One-page website',
      'Full website',
      'Website redesign',
      'Booking system',
      'Automation setup',
      'Not sure yet',
    ],
    budgets: ['Under 500 CHF', '500–1000 CHF', '1000–2000 CHF', '2000+ CHF'],
    cta: 'Get my free website idea',
    success: 'Thank you! We received your message and will be in touch soon.',
    error: 'Something went wrong. Please try again or email us directly.',
    sending: 'Sending...',
    selectPlaceholder: 'Select an option',
  },
  footer: {
    tagline: 'Modern websites for local businesses that want to look professional and get more clients.',
    links: { company: 'Company', services: 'Services', demos: 'Demos', contact: 'Contact' },
    location: 'Sion, Valais — Switzerland',
    rights: 'All rights reserved.',
  },
  whyUs: {
    title: 'Why local businesses choose Nexova',
    subtitle: 'We understand local business. We know what matters for restaurants, coaches, instructors, and shops in Switzerland.',
    items: [
      { icon: '🇨🇭', title: 'Swiss quality', description: 'Clean, precise, reliable. Every website reflects the standards your clients expect.' },
      { icon: '📱', title: 'Mobile-first always', description: 'Most of your clients search on mobile. Your website performs perfectly on every screen.' },
      { icon: '🎯', title: 'Built to convert', description: 'Every design decision is made to turn visitors into leads and clients for your business.' },
      { icon: '⚡', title: 'Fast delivery', description: 'We move efficiently. You get a professional website without months of waiting.' },
      { icon: '💬', title: 'Clear communication', description: 'No jargon. We speak plainly and keep you informed at every step.' },
      { icon: '🔧', title: 'Easy to update', description: 'Your website stays fresh. We handle updates so you can focus on what you do best.' },
    ],
  },
  finalCta: {
    title: 'Ready to upgrade your online presence?',
    subtitle: 'Get a free website idea for your business — no pressure, no obligation.',
    cta: 'Get my free website idea',
    secondary: 'See our demos first',
  },
  meta: {
    title: 'Nexova | Premium Websites for Local Businesses in Switzerland',
    description:
      'Nexova builds modern, mobile-friendly websites for local businesses in Switzerland, with SEO basics, contact forms, booking systems, and simple automations.',
  },
};

export default en;
