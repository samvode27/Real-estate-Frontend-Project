import React from 'react';
import './Value.css';
import { FaHome, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const values = [
  {
    icon: <FaHome className="text-primary fs-2" />,
    title: 'Wide Property Range',
    desc: 'Explore a variety of properties from luxury villas to affordable apartments across Ethiopia.',
  },
  {
    icon: <FaHandshake className="text-success fs-2" />,
    title: 'Trusted Partners',
    desc: 'We work only with verified sellers and real estate agents for your peace of mind.',
  },
  {
    icon: <FaShieldAlt className="text-warning fs-2" />,
    title: 'Secure Transactions',
    desc: 'Your transactions are protected and handled transparently with legal assurance.',
  },
];

const Value = () => {
  return (
    <section className="value-section py-5 bg-light" id="values">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
        <p className="text-center text-muted mb-5">Discover the value we bring to your real estate journey</p>
        <div className="row g-4">
          {values.map((val, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 value-card text-center p-4 shadow-sm border-0">
                <div className="icon-wrapper mb-3">{val.icon}</div>
                <h5 className="fw-semibold">{val.title}</h5>
                <p className="text-muted">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
