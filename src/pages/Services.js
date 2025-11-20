import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like React, Vue, and Next.js. Responsive, fast, and SEO-optimized.',
      features: ['Custom Development', 'E-commerce Solutions', 'CMS Integration', 'API Development']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. From concept to App Store deployment.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive engagement. User-centered design approach.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions. AWS, Azure, and Google Cloud expertise.',
      features: ['Cloud Migration', 'DevOps', 'Serverless Architecture', 'CI/CD Pipelines']
    },
    {
      icon: '🔒',
      title: 'Security & Maintenance',
      description: 'Keep your digital assets secure and up-to-date with our comprehensive security and maintenance services.',
      features: ['Security Audits', 'Regular Updates', 'Performance Monitoring', '24/7 Support']
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content fade-in">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Comprehensive digital solutions to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} className={`service-item fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="service-action">
                  <Button>Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business</p>
            <Button>Contact Us Today</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


