import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Abebe Tadesse',
    message: 'This platform made buying my first home in Addis a breeze. Professional and trustworthy.',
  },
  {
    name: 'Sofia Bekele',
    message: 'I was able to list my property and get offers quickly. Great customer service!',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5" id='testimonials'>
      <div className="container" style={{padding: "100px"}} >
        <h2 className="text-center fw-bold mb-4">What Our Clients Say</h2>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div className="col-md-6" key={index}>
              <div className="testimonial-card p-4 border rounded shadow-sm h-100">
                <FaQuoteLeft className="text-primary fs-3 mb-3" />
                <p className="text-muted">"{t.message}"</p>
                <h6 className="fw-semibold mt-3">- {t.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;