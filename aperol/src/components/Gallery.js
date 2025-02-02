import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    `${process.env.PUBLIC_URL}/gallery-images/1.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/2.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/3.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/4.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/5.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/6.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/7.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/8.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/9.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/10.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/11.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/12.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/13.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/14.jpg`,
    `${process.env.PUBLIC_URL}/gallery-images/15.jpg`,
 
  ];

  return (
    <div className="gallery">
      <h1 className="gallery-title">Real Aperol moments</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Aperol moment ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery; 