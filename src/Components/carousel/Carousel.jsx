import React, { useState } from 'react';
import './carousel.css'; // Asegúrate de tener un archivo CSS para el estilo del carrusel

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 < items.length ? prevIndex + 4 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 >= 0 ? prevIndex - 4 : items.length - 4));
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
          <div key={index} className="carousel-item">
            {/* Renderiza el contenido de cada elemento del carrusel aquí */}
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#8249; {/* Flecha hacia la izquierda */}
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#8250; {/* Flecha hacia la derecha */}
      </button>
    </div>
  );
};

export default Carousel;