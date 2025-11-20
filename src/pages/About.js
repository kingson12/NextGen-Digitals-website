import React from "react";
import Card from "../components/Card";
import "./About.css";
import CEOImg from "../assets/ceo.jpg";
import CharleyImg from "../assets/charley.jpg";
import ChiamakaImg from "../assets/chiamaka.jpg";
import KemiImg from "../assets/kemi.jpg";
import MainAboutImg from "../assets/main-about.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content fade-in">
            <h1 className="page-title">About NexGen Digital</h1>
            <p className="page-subtitle">
              We're a team of passionate developers, designers, and innovators
              dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text slide-in-left">
              <h2>Who We Are</h2>
              <p>
                NexGen Digital was founded with a simple mission: to help
                businesses thrive in the digital age. We combine technical
                expertise with creative vision to deliver solutions that make a
                real impact.
              </p>
              <p>
                Our team brings together years of experience in web development,
                mobile applications, UI/UX design, and digital strategy. We're
                not just developers—we're your partners in digital
                transformation.
              </p>
            </div>
            <div className="intro-image slide-in-right">
              <img
                src={MainAboutImg}
                alt="African tech team collaboration"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Our Mission & Values</h2>
          </div>
          <div className="values-grid">
            <Card className="value-card fade-in">
              <div className="value-icon">🎯</div>
              <h3>Mission-Driven</h3>
              <p>
                We're committed to delivering solutions that drive real business
                results and create lasting value for our clients.
              </p>
            </Card>
            <Card className="value-card fade-in">
              <div className="value-icon">💡</div>
              <h3>Innovation First</h3>
              <p>
                We stay ahead of the curve, constantly exploring new
                technologies and methodologies to deliver cutting-edge
                solutions.
              </p>
            </Card>
            <Card className="value-card fade-in">
              <div className="value-icon">🤝</div>
              <h3>Client Partnership</h3>
              <p>
                Your success is our success. We build long-term relationships
                based on trust, transparency, and collaboration.
              </p>
            </Card>
            <Card className="value-card fade-in">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>
                We never compromise on quality. Every project is crafted with
                attention to detail and a commitment to excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The talented individuals behind NexGen Digital
            </p>
          </div>
          <div className="team-grid">
            {[
              {
                name: "Adebayo Ogunleye",
                role: "CEO & Founder",
                image: CEOImg,
              },
              {
                name: "Chiamaka Nwosu",
                role: "Lead Developer",
                image: ChiamakaImg,
              },
              {
                name: "Kemi Adeyemi",
                role: "Creative Director",
                image: KemiImg,
              },
              {
                name: "Tunde Okonkwo",
                role: "Project Manager",
                image: CharleyImg,
              },
            ].map((member, index) => (
              <Card key={index} className="team-card fade-in">
                <div className="team-avatar">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#" aria-label="Twitter">
                    tw
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
