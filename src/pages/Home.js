import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';
import MainAboutImg from '../assets/main-about.jpg';
import testi1 from '../assets/testi-1.jpg';
import testi2 from '../assets/testi-2.jpg';
import testi3 from '../assets/testi-3.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Transform Your Business with
            <span className="gradient-text"> Digital Innovation</span>
          </h1>
          <p className="hero-description">
            We create cutting-edge digital solutions that drive growth,
            enhance user experiences, and transform businesses for the future.
          </p>
          <div className="hero-buttons">
            <Link to="/contact">
              <Button>Get Started</Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="secondary">View Our Work</Button>
            </Link>
          </div>
        </div>
        <div className="hero-image slide-in-right">
          <img 
            src={MainAboutImg} 
            alt="NexGen Digital team working" 
            className="hero-image-img"
          />
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>
          <div className="services-grid">
            <Card className="service-card slide-in-left">
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies.</p>
            </Card>
            <Card className="service-card fade-in">
              <div className="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile applications for iOS and Android.</p>
            </Card>
            <Card className="service-card slide-in-right">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive designs that enhance user experience.</p>
            </Card>
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="portfolio-preview section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing our best work and client success stories
            </p>
          </div>
          <div className="portfolio-grid">
            {[
              { 
                title: 'E-Commerce Platform', 
                category: 'Web Development',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
              },
              { 
                title: 'Mobile Banking App', 
                category: 'Mobile App',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
              },
              { 
                title: 'Corporate Website', 
                category: 'Web Design',
                image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
              }
            ].map((project, index) => (
              <div key={index} className="portfolio-item fade-in">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/portfolio">
              <Button>View Full Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {[
              {
                name: 'Amina Bello',
                role: 'CEO, TechStart Nigeria',
                text: 'NexGen Digital transformed our online presence. Their expertise and attention to detail is unmatched.',
                image: testi1
              },
              {
                name: 'Oluwaseun Adeyemi',
                role: 'Founder, InnovateCo',
                text: 'Working with NexGen Digital was a game-changer. They delivered beyond our expectations.',
                image: testi2
              },
              {
                name: 'Ngozi Okoro',
                role: 'Director, DigitalFirst',
                text: 'Professional, creative, and results-driven. Highly recommend their services!',
                image: testi3
              }
            ].map((testimonial, index) => (
              <Card key={index} className="testimonial-card fade-in">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


