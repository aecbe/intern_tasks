import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  // Add more image URLs here
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="image-item" onClick={() => openModal(image)}>
          <img src={image} alt={`Gallery item ${index}`} />
        </div>
      ))}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" />
            <button className="modal-close" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <div className="app">
    <h1>Image Gallery</h1>
    <ImageGallery />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
