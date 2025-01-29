import React, { Component } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { ImageList, ImageListItem } from '@mui/material';
import './Gallery.css';

class Gallery extends Component {
  state = {
    isOpen: false,
    currentImageIndex: 0
  };

  images = [
    {
      src: require('./grf.jpg'),
      thumbnail: require('./grf.jpg'),
    },
    {
      src: require('./right-image.jpg'),
      thumbnail: require('./right-image.jpg'),
    },
    {
      src: require('./left-image.jpg'),
      thumbnail: require('./left-image.jpg'),
    },
    // Tutaj możesz dodać więcej zdjęć w tym samym formacie
  ];

  render() {
    return (
      <div className="gallery-section">
        <h2 className="gallery-title">Our Aperol Moments</h2>
        <div className="gallery-container">
          <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight={320}>
            {this.images.map((item, index) => (
              <ImageListItem 
                key={index}
                onClick={() => this.setState({ isOpen: true, currentImageIndex: index })}
                sx={{ cursor: 'pointer' }}
              >
                <img
                  src={item.thumbnail}
                  alt={`Aperol ${index + 1}`}
                  loading="lazy"
                  style={{ height: '320px', objectFit: 'cover' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
          
          <Lightbox
            open={this.state.isOpen}
            close={() => this.setState({ isOpen: false })}
            index={this.state.currentImageIndex}
            slides={this.images}
          />
        </div>
      </div>
    );
  }
}

export default Gallery; 