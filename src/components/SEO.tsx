import { Helmet } from 'react-helmet-async';
import { SEOConfig } from '@/config/seo';

interface SEOProps {
  config: SEOConfig;
  path?: string;
}

/**
 * SEO Component - Manages dynamic meta tags for each page
 * Uses react-helmet-async for proper head management in SPA
 */
export const SEO: React.FC<SEOProps> = ({ config, path }) => {
  const {
    title,
    description,
    keywords,
    ogImage,
    ogType = 'website',
    canonical,
    structuredData
  } = config;

  const siteUrl = 'https://wemoment.com.br';
  const fullUrl = path ? `${siteUrl}${path}` : canonical || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="WeMoment" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="WeMoment" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@wemoment" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="Brasil" />

      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="WeMoment" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
