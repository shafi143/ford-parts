import React, { useState } from 'react';
import "./product.css"

const ProductDetailPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    './images/car1.jpg',
    './images/car2.jpg',
    './images/car3.jpg',
    // Add more image URLs as needed
  ];

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className='container'>
    <div className='product_outer'>
      <div className="image-slider">
        <img src={images[currentImage]} alt="Product" className='main-image'/>

        <div className="thumbnail-slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={currentImage === index ? 'active' : ''}
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      </div>

      <div className="product-details">
        <div className="content">
      <h1 className="product-name">Ford's Car</h1>
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac justo tincidunt, tincidunt odio ac, posuere felis.</p>
        <div className="price">Price: ${99.99+1}</div>
        </div>


        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage;
