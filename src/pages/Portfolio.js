import React from 'react';
import Card from '../components/Card';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'Mobile App',
      description: 'Cross-platform fitness tracking application',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Redesigned corporate website with modern UI/UX',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Analytics dashboard for SaaS platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'Mobile App',
      description: 'On-demand food delivery mobile application',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Brand Identity',
      category: 'Design',
      description: 'Complete brand identity and design system',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'Property listing and management platform',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'Healthcare App',
      category: 'Mobile App',
      description: 'Patient management and telemedicine app',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 9,
      title: 'FinTech Dashboard',
      category: 'Web Development',
      description: 'Financial analytics and reporting dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Web Design', 'Design'];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content fade-in">
            <h1 className="page-title">Our Portfolio</h1>
            <p className="page-subtitle">
              Explore our recent work and see how we've helped businesses succeed
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="portfolio-filters section">
        <div className="container">
          <div className="filter-buttons fade-in">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-image-container">
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className="view-project-btn">View Project</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;


