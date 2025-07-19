import React, { useState } from 'react';
import './Residence.css';

const propertiesData = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Addis Ababa",
    price: 95000,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Cozy Studio",
    location: "Bahir Dar",
    price: 30000,
    bedrooms: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 3,
    title: "Modern Villa",
    location: "Mekelle",
    price: 125000,
    bedrooms: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

const Residence = () => {
  const [priceFilter, setPriceFilter] = useState('');
  const [bedroomFilter, setBedroomFilter] = useState('');

  const filteredProperties = propertiesData.filter((property) => {
    return (
      (!priceFilter || property.price <= parseInt(priceFilter)) &&
      (!bedroomFilter || property.bedrooms === parseInt(bedroomFilter))
    );
  });

  return (
    <section id="properties" className="residencies-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-primary">Featured Properties</h2>

        <div className="filters d-flex flex-wrap justify-content-center gap-3 mb-4">
          <select
            className="form-select w-auto"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="50000">Under 50,000</option>
            <option value="80000">Under 80,000</option>
            <option value="100000">Under 100,000</option>
          </select>

          <select
            className="form-select w-auto"
            value={bedroomFilter}
            onChange={(e) => setBedroomFilter(e.target.value)}
          >
            <option value="">All Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        <div className="row g-4">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className="col-md-6 col-lg-4">
                <div className="card shadow-sm residency-card">
                  <img
                    src={property.image}
                    className="card-img-top"
                    alt={property.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text text-muted mb-2">{property.location}</p>
                    <p className="card-text mb-1">
                      <strong>Price:</strong> ETB {property.price.toLocaleString()}
                    </p>
                    <p className="card-text">
                      <strong>Bedrooms:</strong> {property.bedrooms}
                    </p>
                    <button className="btn btn-outline-primary w-100 mt-2">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-danger">No properties found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Residence;
