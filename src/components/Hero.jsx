import React from 'react';
import './Hero.css';
import { FaSearch, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center text-light" id="home">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3 animate-fade-in">
          Find Your <span className="text-warning">Dream Home</span> Today
        </h1>
        <p className="lead mb-4 animate-fade-in delay-1">
          Explore the best properties from trusted sellers in your area.
        </p>

        <form className="search-form d-flex justify-content-center align-items-center animate-fade-in delay-2">
          <input
            type="text"
            className="form-control form-control-lg rounded-start border-0 shadow-sm"
            placeholder="Search by location or keyword"
          />
          <button type="submit" className="btn btn-warning btn-lg rounded-end shadow-sm" style={{marginLeft: "5px"}} >
            <FaSearch className="me-1" /> Search
          </button>
        </form>

        <div className="features-list mt-4 d-flex justify-content-center gap-4 animate-fade-in delay-3">
          <span><FaCheckCircle className="me-1 text-success" /> Verified Listings</span>
          <span><FaCheckCircle className="me-1 text-success" /> Easy Financing</span>
          <span><FaCheckCircle className="me-1 text-success" /> Trusted Agents</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
