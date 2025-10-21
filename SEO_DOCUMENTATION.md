# Documentação SEO - WeMoment

Esta documentação descreve a implementação completa de SEO e Analytics para o projeto WeMoment.

## 📋 Sumário

1. [Configurações Implementadas](#configurações-implementadas)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [SEO por Página](#seo-por-página)
4. [Vercel Analytics](#vercel-analytics)
5. [Google Search Console](#google-search-console)
6. [Manutenção e Atualizações](#manutenção-e-atualizações)

---

## ✅ Configurações Implementadas

### 1. **Meta Tags Dinâmicas**
- Implementado `react-helmet-async` para gerenciamento dinâmico de meta tags
- Cada rota possui meta tags únicas e otimizadas
- Suporte completo para Open Graph (Facebook) e Twitter Cards

### 2. **Structured Data (Schema.org)**
- JSON-LD implementado em todas as páginas
- Schema da organização global
- Schemas específicos por página (WebApplication, FAQPage, Product, etc)

### 3. **Vercel Analytics**
- Analytics integrado nativamente
- Rastreamento automático de pageviews
- Métricas de performance Web Vitals

### 4. **Sitemap.xml**
- Sitemap completo com todas as rotas
- Prioridades configuradas por página
- Frequência de atualização definida

### 5. **robots.txt**
- Configurado para permitir todos os crawlers
- Localizado em `/public/robots.txt`

---

## 📁 Estrutura de Arquivos

```
lp-wemoment/
├── src/
│   ├── config/
│   │   └── seo.ts                    # Configuração centralizada de SEO
│   ├── components/
│   │   ├── SEO.tsx                   # Componente wrapper de SEO
│   │   ├── OrganizationSchema.tsx   # Schema da organização
│   │   ├── Hero.tsx                  # ✅ SEO implementado
│   │   ├── Problem.tsx               # ✅ SEO implementado
│   │   ├── Solution.tsx              # ✅ SEO implementado
│   │   ├── Features.tsx              # ✅ SEO implementado
│   │   ├── Pricing.tsx               # ✅ SEO implementado
│   │   ├── FAQ.tsx                   # ✅ SEO implementado
│   │   └── About.tsx                 # ✅ SEO implementado
│   ├── main.tsx                      # HelmetProvider + Analytics
│   └── App.tsx                       # OrganizationSchema global
├── public/
│   ├── sitemap.xml                   # ✅ Criado
│   └── robots.txt                    # ✅ Existente
└── index.html                        # ✅ Meta tags otimizadas
```

---

## 🔍 SEO por Página

### **Home (`/` e `/home`)**
- **Title:** WeMoment - Centralize a Vida a Dois | Aplicativo para Casais
- **Description:** Descubra o WeMoment, o aplicativo completo para casais organizarem compromissos...
- **Keywords:** aplicativo para casais, organizar vida a dois, agenda compartilhada casais, etc
- **Schema:** WebApplication com ratings e ofertas
- **Priority:** 1.0 (máxima)

### **Problem (`/problem`)**
- **Title:** Problemas de Organização no Relacionamento? | WeMoment
- **Description:** Compromissos esquecidos, falta de planejamento...
- **Schema:** FAQPage
- **Priority:** 0.8

### **Solution (`/solution`)**
- **Title:** Solução Completa para Casais | WeMoment
- **Description:** Centralize compromissos, compartilhe momentos...
- **Schema:** SoftwareApplication
- **Priority:** 0.8

### **Features (`/features`)**
- **Title:** Recursos e Funcionalidades | WeMoment
- **Description:** Explore todos os recursos do WeMoment...
- **Schema:** ItemList com todos os recursos
- **Priority:** 0.9

### **Pricing (`/pricing`)**
- **Title:** Planos e Preços | WeMoment
- **Description:** Conheça os planos do WeMoment: Gratuito, Premium e Família...
- **Schema:** Product com ofertas detalhadas
- **Priority:** 0.9

### **FAQ (`/faq`)**
- **Title:** Perguntas Frequentes | WeMoment
- **Description:** Tire suas dúvidas sobre o WeMoment...
- **Schema:** FAQPage com perguntas estruturadas
- **Priority:** 0.7

### **About (`/about`)**
- **Title:** Sobre o WeMoment | Nossa História e Missão
- **Description:** Conheça a história do WeMoment e nossa missão...
- **Schema:** Organization
- **Priority:** 0.6

---

## 📊 Vercel Analytics

### Configuração Automática

O Vercel Analytics foi integrado e está totalmente configurado:

```tsx
// src/main.tsx
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    <Analytics />  // ✅ Analytics ativo
  </HelmetProvider>
);
```

### Dados Rastreados

1. **Pageviews:** Todas as visualizações de página
2. **Web Vitals:**
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)
   - FCP (First Contentful Paint)
   - TTFB (Time to First Byte)
3. **Eventos customizados:** Podem ser adicionados conforme necessário

### Acessar Métricas

1. Acesse o [Dashboard da Vercel](https://vercel.com/dashboard)
2. Selecione o projeto `lp-wemoment`
3. Vá para a aba **Analytics**
4. Veja métricas em tempo real de:
   - Visitantes únicos
   - Pageviews
   - Top páginas
   - Dispositivos
   - Países
   - Web Vitals

---

## 🔧 Google Search Console

### Passos para Configurar

#### 1. Submeter o Sitemap

```
URL do Sitemap: https://wemoment.com.br/sitemap.xml
```

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione a propriedade `wemoment.com.br`
3. Vá em **Sitemaps** no menu lateral
4. Adicione `sitemap.xml`
5. Clique em **Enviar**

#### 2. Solicitar Indexação

Para cada página importante:
1. Vá em **Inspeção de URL**
2. Cole a URL (ex: `https://wemoment.com.br/features`)
3. Clique em **Solicitar indexação**

#### 3. Verificar Rich Results

1. Use a ferramenta [Rich Results Test](https://search.google.com/test/rich-results)
2. Teste cada URL do site
3. Verifique se os schemas JSON-LD estão sendo reconhecidos

---

## 🛠 Manutenção e Atualizações

### Adicionar Nova Página

1. **Adicionar configuração SEO** em `src/config/seo.ts`:

```typescript
export const pageSEO: Record<string, SEOConfig> = {
  // ... páginas existentes

  'nova-pagina': {
    title: 'Título da Nova Página | WeMoment',
    description: 'Descrição otimizada...',
    keywords: ['keyword1', 'keyword2'],
    ogImage: DEFAULT_OG_IMAGE,
    canonical: `${SITE_URL}/nova-pagina`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      // ... schema específico
    }
  }
};
```

2. **Adicionar SEO ao componente**:

```tsx
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/config/seo";

export const NovaPagina = () => {
  return (
    <>
      <SEO config={getSEOConfig('nova-pagina')} path="/nova-pagina" />
      <section>
        {/* Conteúdo da página */}
      </section>
    </>
  );
};
```

3. **Atualizar sitemap.xml**:

```xml
<url>
  <loc>https://wemoment.com.br/nova-pagina</loc>
  <lastmod>2025-10-21</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Atualizar Conteúdo SEO

Para atualizar meta tags de uma página existente:
1. Edite `src/config/seo.ts`
2. Altere os campos necessários (title, description, keywords)
3. Atualize o `lastmod` no `sitemap.xml`
4. Faça commit e deploy

### Monitoramento Contínuo

#### Ferramentas Recomendadas:

1. **Google Search Console**
   - Monitore erros de indexação
   - Verifique desempenho de busca
   - Acompanhe Core Web Vitals

2. **Vercel Analytics**
   - Acompanhe tráfego em tempo real
   - Analise Web Vitals
   - Identifique páginas mais visitadas

3. **Google Analytics** (Opcional)
   - Para análise mais profunda
   - Funil de conversão
   - Comportamento do usuário

4. **PageSpeed Insights**
   - Teste performance regularmente
   - URL: https://pagespeed.web.dev/
   - Mantenha scores acima de 90

---

## 📝 Checklist de Manutenção Mensal

- [ ] Verificar posição no Google Search Console
- [ ] Analisar métricas no Vercel Analytics
- [ ] Testar todos os schemas em [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Atualizar datas no sitemap.xml se houver mudanças
- [ ] Verificar links quebrados
- [ ] Revisar keywords e ajustar se necessário
- [ ] Testar performance em PageSpeed Insights
- [ ] Verificar compatibilidade mobile

---

## 🎯 Objetivos de SEO

### Curto Prazo (1-3 meses)
- [x] Indexação de todas as páginas no Google
- [ ] Aparecer nas primeiras 3 páginas para "aplicativo para casais"
- [ ] 100+ visitantes orgânicos/mês

### Médio Prazo (3-6 meses)
- [ ] Primeira página para "aplicativo casal organização"
- [ ] 500+ visitantes orgânicos/mês
- [ ] Featured snippets em algumas queries

### Longo Prazo (6-12 meses)
- [ ] Top 3 para "aplicativo para casais brasil"
- [ ] 2000+ visitantes orgânicos/mês
- [ ] Authority score acima de 30

---

## 📞 Suporte

Para dúvidas sobre SEO:
- Consulte a [documentação do react-helmet-async](https://github.com/staylor/react-helmet-async)
- Consulte a [documentação do Vercel Analytics](https://vercel.com/docs/analytics)
- Verifique o [Google Search Central](https://developers.google.com/search)

---

**Última Atualização:** 21 de Outubro de 2025
**Versão:** 1.0.0
