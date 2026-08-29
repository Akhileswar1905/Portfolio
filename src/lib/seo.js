/**
 * SEO Utility: Manage meta tags dynamically for better SEO
 */

export const updateMetaTags = ({
  title,
  description,
  keywords,
  imageUrl,
  url,
  type = 'website',
  author = 'Akhileswar',
}) => {
  // Update title
  if (title) {
    document.title = `${title} - Akhileswar's Portfolio`;
    updateMetaTag('og:title', title);
    updateMetaTag('twitter:title', title);
  }

  // Update description
  if (description) {
    updateMetaTag('description', description);
    updateMetaTag('og:description', description);
    updateMetaTag('twitter:description', description);
  }

  // Update keywords
  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  // Update image
  if (imageUrl) {
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('twitter:image', imageUrl);
  }

  // Update URL
  if (url) {
    updateMetaTag('og:url', url);
    updateCanonical(url);
  }

  // Update type
  if (type) {
    updateMetaTag('og:type', type);
  }

  // Update author
  if (author) {
    updateMetaTag('author', author);
  }
};

/**
 * Update or create a meta tag
 */
const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    // Determine if it's a property or name attribute
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

/**
 * Update canonical URL
 */
const updateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
};

/**
 * Reset meta tags to default
 */
export const resetMetaTags = () => {
  updateMetaTags({
    title: 'Akhileswar - Full Stack Developer & AI Engineer',
    description: 'Full Stack Developer and AI Engineer with expertise in React, FastAPI, and Machine Learning. Currently working on AI systems and model lifecycle management at Infosys.',
    keywords: 'Full Stack Developer, AI Engineer, React, FastAPI, Machine Learning, Portfolio, Web Development',
    url: 'https://akhileswar.vercel.app',
    type: 'website',
  });
};

/**
 * Create schema markup for better SEO
 */
export const createSchemaMarkup = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Project Schema Markup
 */
export const projectSchema = (title, description, image, technologies) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: description,
    image: image,
    creator: {
      '@type': 'Person',
      name: 'Akhileswar',
      url: 'https://akhileswar.vercel.app',
    },
    keywords: technologies.join(', '),
  };
};

/**
 * Experience Schema Markup
 */
export const experienceSchema = (jobTitle, company, startDate, endDate, description) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: jobTitle,
    description: description,
    credentialCategory: 'Professional Work Experience',
    recognizedBy: {
      '@type': 'Organization',
      name: company,
    },
    validFrom: startDate,
    validUntil: endDate,
  };
};
