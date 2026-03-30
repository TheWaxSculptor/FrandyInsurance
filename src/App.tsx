import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-text">MARKET|PLACE</span>
            <span className="logo-subtext">INSURANCE GROUP</span>
          </div>
          <div className="contact-info">
            <span className="desktop-only text-gray">Speak with a Licensed Insurance Agent</span>
            <a href="tel:8885769650" className="phone-nav btn btn-primary">
              (888) 576-9650
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <h1>Expert Support Finding The Right Coverage</h1>
            <p>Our licensed agents are here to help you navigate your marketplace options and find the perfect plan for you and your family.</p>
            <div className="hero-ctas">
              <a href="tel:8885769650" className="btn btn-primary btn-lg">CALL TO MANAGE YOUR MARKETPLACE</a>
            </div>
            <div className="benefits-list mt-2">
              <ul>
                <li>✓ Maternity and Newborn Care</li>
                <li>✓ Pediatric Services</li>
                <li>✓ Mental Health Services</li>
                <li>✓ Chronic Disease Management</li>
              </ul>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Happy family outdoors" />
          </div>
        </div>
      </section>

      <section className="info-strip">
        <div className="container">
          <p>The Enrollment Period Is Open - Call Now To Apply!</p>
        </div>
      </section>

      <section className="coverage section-padding">
        <div className="container">
          <div className="section-head text-center">
            <h2>Essential Health Benefits</h2>
            <p className="text-gray">All marketplace health plans cover these 10 categories of services</p>
          </div>
          <div className="grid grid-3 mt-3">
            {[
              { title: "Ambulatory Patient Services", desc: "Outpatient care you get without being admitted to a hospital." },
              { title: "Emergency Services", desc: "Access to the help you need when every second counts." },
              { title: "Hospitalization", desc: "Such as surgery and overnight stays." },
              { title: "Pregnancy, Maternity & Newborn Care", desc: "Both before and after birth." },
              { title: "Mental Health & Substance Use", desc: "Includes behavioral health treatment, counseling, and psychotherapy." },
              { title: "Prescription Drugs", desc: "Necessary medications covered by your insurance plan." }
            ].map((benefit, index) => (
              <div className="benefit-card shadow" key={index}>
                <h3>{benefit.title}</h3>
                <p className="text-gray">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer section-padding bg-dark">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">MARKET|PLACE</span>
              <p>Dedicated to helping families find affordable health coverage.</p>
            </div>
            <div className="footer-disclaimer text-gray">
              <p>© 2026 MARKETPLACE INSURANCE GROUP. All rights reserved.</p>
              <p className="mt-1">Disclaimer: This website is for informational purposes only. We are not a government agency. Our services match you with licensed insurance agents who can help you apply for marketplace plans.</p>
              <p>For more information, call us at (888) 576-9650.</p>
            </div>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-header">
              <h2>Ready to talk with an agent?</h2>
              <p>Our experts are waiting for your call to help you find the best plan for your needs.</p>
            </div>
            <div className="modal-body">
              <a href="tel:8885769650" className="modal-phone btn btn-primary lg">
                (888) 576-9650
              </a>
              <p className="text-gray mt-1">Available 24/7 - Free Consultation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
