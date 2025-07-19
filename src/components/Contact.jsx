import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section py-5 bg-light" id="contact">
      <div className="container" style={{padding: "50px"}} >
        <h2 className="text-center fw-bold mb-4">Get In Touch</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm border-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://maps.google.com/maps?q=Addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                allowFullScreen
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;