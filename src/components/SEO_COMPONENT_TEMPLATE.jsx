/**
 * SEO Component Template
 * 
 * Use this as a reference for creating SEO-friendly components
 * in your portfolio application.
 */

import { useEffect } from 'react';
import { updateMetaTags, resetMetaTags, projectSchema, createSchemaMarkup } from '@/lib/seo';

/**
 * Example: SEO-Optimized Project Component
 * 
 * This component demonstrates best practices for SEO:
 * - Proper heading hierarchy (h1 -> h2 -> h3)
 * - Semantic HTML elements
 * - Dynamic meta tag updates
 * - Schema markup
 * - Alt text for images
 * - Descriptive link text
 */

export function ProjectShowcase({ project }) {
  useEffect(() => {
    // Update meta tags when component mounts
    updateMetaTags({
      title: `${project.title} - Project Showcase`,
      description: project.description,
      keywords: project.techStack.join(', '),
      imageUrl: project.images?.[0] || project.image,
      url: `https://akhileswar.vercel.app/#Projects/${project.id}`,
    });

    // Add project schema markup
    const schema = projectSchema(
      project.title,
      project.description,
      project.images?.[0] || project.image,
      project.techStack
    );
    createSchemaMarkup(schema);

    // Reset on unmount
    return () => resetMetaTags();
  }, [project]);

  return (
    <article className="project-showcase">
      {/* Semantic HTML: Use <article> for self-contained content */}
      
      <section className="project-header">
        {/* Semantic HTML: Use <section> for thematic grouping */}
        <h2>{project.title}</h2>
        {/* Best practice: Proper heading hierarchy */}
        
        <p className="project-summary">{project.description}</p>
        {/* Descriptive text helps SEO */}
      </section>

      <section className="project-images">
        <h3>Project Gallery</h3>
        {project.images?.map((image, idx) => (
          <figure key={idx}>
            {/* Semantic HTML: Use <figure> + <figcaption> for images */}
            <img
              src={image}
              alt={`${project.title} screenshot ${idx + 1}`}
              // Best practice: Descriptive alt text
              loading="lazy"
              // Performance: Lazy load images
            />
            <figcaption>
              {project.title} - Interface {idx + 1}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="project-tech-stack">
        <h3>Technologies Used</h3>
        <ul>
          {/* Best practice: Use <ul> for lists of items */}
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="project-links">
        <h3>Links & Resources</h3>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {/* Best practice: Descriptive link text instead of "Click here" */}
            View {project.title} Live Demo
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View {project.title} on GitHub
          </a>
        )}
      </section>
    </article>
  );
}

/**
 * SEO Best Practices Checklist
 * 
 * Apply these to all components for maximum SEO impact:
 */

/*
✓ Semantic HTML Elements:
  - Use <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
  - Use <h1> for page title, <h2> for main sections, <h3> for subsections
  - Use <figure> + <figcaption> for images
  - Use <ul>, <ol> for lists
  - Use <table> for tabular data

✓ Accessibility (improves SEO):
  - Alt text for all images
  - Descriptive link text (not "click here")
  - Proper heading hierarchy
  - ARIA labels where needed
  - Form labels and descriptions

✓ Content Structure:
  - One <h1> per page
  - Clear content hierarchy
  - Descriptive text around keywords
  - Use strong/em tags for emphasis
  - Break content into logical sections

✓ Performance (impacts SEO):
  - Lazy load images
  - Minimize CSS/JS
  - Optimize images (WebP format)
  - Use CDN for assets
  - Cache static files

✓ Mobile & Responsive:
  - Mobile-first design
  - Touch-friendly buttons
  - Readable font sizes
  - Proper viewport settings
  - Fast load times

✓ Schema Markup:
  - Use JSON-LD (not microdata)
  - Add Person schema for yourself
  - Add Project/CreativeWork schema for projects
  - Add Organization schema if applicable
  - Test with Schema.org validator

✓ Meta Tags:
  - Title (60-70 characters)
  - Description (155-160 characters)
  - Keywords (5-8 relevant terms)
  - Open Graph tags
  - Twitter Card tags
  - Canonical URLs
*/

export default ProjectShowcase;
