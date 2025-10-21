/**
 * SEO Configuration for WeMoment Landing Page
 * Centralized metadata for all pages
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: object;
}

const SITE_URL = 'https://wemoment.com.br';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const defaultSEO: SEOConfig = {
  title: 'WeMoment - Centralize a Vida a Dois',
  description: 'O santuário digital para casais que desejam organizar e celebrar sua vida a dois. Gerencie compromissos, compartilhe momentos e fortaleça seu relacionamento.',
  keywords: [
    'aplicativo para casais',
    'organizar relacionamento',
    'agenda compartilhada',
    'vida a dois',
    'aplicativo de casal',
    'relacionamento saudável',
    'compromissos de casal',
    'gestão de relacionamento',
    'app para namoro',
    'app para casamento'
  ],
  ogImage: DEFAULT_OG_IMAGE,
  ogType: 'website',
  canonical: SITE_URL
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: 'WeMoment - Centralize a Vida a Dois | Aplicativo para Casais',
    description: 'Descubra o WeMoment, o aplicativo completo para casais organizarem compromissos, compartilharem momentos especiais e fortalecerem o relacionamento. Comece grátis!',
    keywords: [
      'aplicativo para casais',
      'organizar vida a dois',
      'agenda compartilhada casais',
      'app relacionamento',
      'gerenciar compromissos casal',
      'aplicativo namoro',
      'wemoment'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    canonical: `${SITE_URL}/home`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'WeMoment',
      'applicationCategory': 'LifestyleApplication',
      'operatingSystem': 'iOS, Android, Web',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'BRL'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'ratingCount': '1250'
      },
      'description': 'O santuário digital para casais que desejam organizar e celebrar sua vida a dois.'
    }
  },

  problem: {
    title: 'Problemas de Organização no Relacionamento? | WeMoment',
    description: 'Compromissos esquecidos, falta de planejamento e comunicação fragmentada afetam seu relacionamento? Descubra como o WeMoment pode ajudar.',
    keywords: [
      'problemas de relacionamento',
      'organização casal',
      'compromissos esquecidos',
      'comunicação no relacionamento',
      'planejamento familiar',
      'desorganização casal'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonical: `${SITE_URL}/problem`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como organizar melhor a vida a dois?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use uma plataforma centralizada como o WeMoment para gerenciar compromissos, compartilhar calendários e manter a comunicação clara entre o casal.'
          }
        }
      ]
    }
  },

  solution: {
    title: 'Solução Completa para Casais | WeMoment',
    description: 'Centralize compromissos, compartilhe momentos e fortaleça seu relacionamento com WeMoment. A solução definitiva para organização e conexão de casais.',
    keywords: [
      'solução para casais',
      'organização relacionamento',
      'centralizar compromissos',
      'app gestão casal',
      'ferramenta casais',
      'plataforma relacionamento'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonical: `${SITE_URL}/solution`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'WeMoment',
      'applicationCategory': 'LifestyleApplication',
      'description': 'Plataforma completa para casais organizarem e fortalecerem seu relacionamento',
      'featureList': [
        'Agenda compartilhada',
        'Lembretes automáticos',
        'Galeria de momentos',
        'Planejamento financeiro',
        'Metas do casal'
      ]
    }
  },

  features: {
    title: 'Recursos e Funcionalidades | WeMoment',
    description: 'Explore todos os recursos do WeMoment: agenda compartilhada, galeria de momentos, planejamento financeiro, lembretes automáticos e muito mais.',
    keywords: [
      'funcionalidades wemoment',
      'recursos app casal',
      'agenda compartilhada',
      'galeria momentos',
      'planejamento financeiro casal',
      'lembretes relacionamento',
      'metas de casal'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonical: `${SITE_URL}/features`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Agenda Compartilhada',
          'description': 'Sincronize compromissos e eventos importantes do casal'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Galeria de Momentos',
          'description': 'Armazene e reviva memórias especiais juntos'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Planejamento Financeiro',
          'description': 'Gerencie despesas e metas financeiras do casal'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'Lembretes Automáticos',
          'description': 'Nunca esqueça datas importantes e compromissos'
        }
      ]
    }
  },

  pricing: {
    title: 'Planos e Preços | WeMoment',
    description: 'Conheça os planos do WeMoment: Gratuito, Premium e Família. Escolha o plano ideal para organizar e fortalecer seu relacionamento.',
    keywords: [
      'preços wemoment',
      'planos wemoment',
      'quanto custa wemoment',
      'plano grátis casal',
      'plano premium relacionamento',
      'assinatura app casal'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonical: `${SITE_URL}/pricing`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'WeMoment',
      'description': 'Aplicativo para organização e fortalecimento de relacionamentos',
      'brand': {
        '@type': 'Brand',
        'name': 'WeMoment'
      },
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Plano Gratuito',
          'price': '0',
          'priceCurrency': 'BRL',
          'description': 'Recursos básicos para começar'
        },
        {
          '@type': 'Offer',
          'name': 'Plano Premium',
          'price': '29.90',
          'priceCurrency': 'BRL',
          'description': 'Recursos completos para casais',
          'priceValidUntil': '2025-12-31'
        }
      ]
    }
  },

  faq: {
    title: 'Perguntas Frequentes | WeMoment',
    description: 'Tire suas dúvidas sobre o WeMoment. Encontre respostas sobre funcionalidades, planos, segurança e como começar a usar.',
    keywords: [
      'dúvidas wemoment',
      'perguntas frequentes',
      'faq app casal',
      'como usar wemoment',
      'suporte wemoment',
      'ajuda relacionamento'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonical: `${SITE_URL}/faq`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'O WeMoment é grátis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim, oferecemos um plano gratuito com recursos básicos. Para funcionalidades avançadas, temos planos premium acessíveis.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Como funciona a sincronização entre casais?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Basta convidar seu parceiro(a) através do app. Após aceitar, todos os compromissos e momentos serão sincronizados automaticamente.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Meus dados estão seguros?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim, utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança para proteger seus dados pessoais.'
          }
        }
      ]
    }
  },

  about: {
    title: 'Sobre o WeMoment | Nossa História e Missão',
    description: 'Conheça a história do WeMoment e nossa missão de ajudar casais a organizarem e fortalecerem seus relacionamentos através da tecnologia.',
    keywords: [
      'sobre wemoment',
      'história wemoment',
      'missão wemoment',
      'equipe wemoment',
      'quem criou wemoment',
      'valores wemoment'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    canonical: `${SITE_URL}/about`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'WeMoment',
      'url': SITE_URL,
      'logo': `${SITE_URL}/logo.png`,
      'description': 'Plataforma dedicada a ajudar casais a organizarem e fortalecerem seus relacionamentos',
      'foundingDate': '2024',
      'sameAs': [
        'https://facebook.com/wemoment',
        'https://instagram.com/wemoment',
        'https://twitter.com/wemoment'
      ]
    }
  }
};

/**
 * Get SEO configuration for a specific page
 */
export const getSEOConfig = (page: string): SEOConfig => {
  return pageSEO[page] || defaultSEO;
};

/**
 * Site-wide structured data for Organization
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'WeMoment',
  'url': SITE_URL,
  'logo': `${SITE_URL}/logo.png`,
  'description': 'O santuário digital para casais que desejam organizar e celebrar sua vida a dois',
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Support',
    'email': 'contato@wemoment.com.br'
  },
  'sameAs': [
    'https://facebook.com/wemoment',
    'https://instagram.com/wemoment',
    'https://twitter.com/wemoment',
    'https://linkedin.com/company/wemoment'
  ]
};
