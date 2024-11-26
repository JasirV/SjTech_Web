import React from 'react';

const services = [
  { name: 'Steel', image: 'https://endura-steel.com/wp-content/uploads/2023/06/steel-facts.jpg' },
//   { name: 'Mild Steel', image: '/images/mild-steel.jpg' },
  { name: 'Aluminium', image: 'https://i0.wp.com/www.rapidmetals.co.uk/wp-content/uploads/2021/09/shutterstock_1425520967.jpg?resize=750%2C563&ssl=1' },
//   { name: 'Mashrabiya', image: '/images/mashrabiya.jpg' },
  { name: 'Glass Work', image: 'https://spacesmakeover.com/wp-content/uploads/2021/10/Office-Doors.jpg' },
  { name: 'Civil Sectors', image: 'https://anjaneyauniversity.ac.in/blog/wp-content/uploads/2024/09/image-2-1210x700.webp' },
];

const ServiceFocus = () => {
  return (
    <div className="service-focus">
      <div className="container">
        <div className="card-grid">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="card-content">
                <h3 className="card-title">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFocus;
