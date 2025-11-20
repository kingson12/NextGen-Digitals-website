import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content fade-in">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info slide-in-left">
              <Card className="info-card">
                <h2>Contact Information</h2>
                <p className="info-description">
                  Fill out the form or reach out to us directly. We're here to
                  help!
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h4>Address</h4>
                      <p>
                        123 GRA Street
                        <br /> Off toyin road Ikeja, Lagos
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <h4>Email</h4>
                      <p>hello@nextgendigitals.com</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <h4>Phone</h4>
                      <p>+234 9079568962</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">🕒</div>
                    <div>
                      <h4>Business Hours</h4>
                      <p>
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    Facebook
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    Twitter
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    LinkedIn
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    Instagram
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container slide-in-right">
              <Card className="form-card">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {formStatus === "success" && (
                    <div className="form-success">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  <Button type="submit">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
