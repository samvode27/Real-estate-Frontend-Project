import React from 'react';
import './Companies.css';
import companyLogos from './companyLogos';

const Companies = () => {
  return (
    <section className="companies-section py-5" id='companies'>
      <div className="container text-center" style={{padding: "50px"}} >
        <h2 className="section-title mb-3">Our Trusted Partners</h2>
        <p className="section-subtitle mb-5">
          Collaborating with innovative leaders across the globe.
        </p>

        <div className="marquee">
          <div className="marquee-content">
            {/* Repeat logos twice for seamless infinite scroll */}
            {[...companyLogos, ...companyLogos].map((logo, idx) => (
              <div key={idx} className="company-card p-3 shadow-sm rounded-4 mx-3">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="img-fluid company-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
