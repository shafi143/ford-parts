// import React, { useState } from 'react';
// import "./product.css"
// import { useParams } from 'react-router-dom';
// import { PopuplarParts } from '../../JsonData';

// const ProductDetailPage = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const { category } = useParams();
//   const categoryProducts = PopuplarParts.filter(image => image.category === category);
//   const images = [
//     './images/car1.jpg',
//     './images/car2.jpg',
//     './images/car3.jpg',
//     // Add more image URLs as needed
//   ];

//   const handleImageChange = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <div className='container'>
//     <div className='product_outer'>
//       <div className="image-slider">
//         <img src={images[currentImage]} alt="Product" className='main-image'/>

//         <div className="thumbnail-slider">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Thumbnail ${index}`}
//               className={currentImage === index ? 'active' : ''}
//               onClick={() => handleImageChange(index)}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="product-details">
//         <div className="content">
//       <h1 className="product-name">Ford's Car</h1>
//           <h2>Description</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac justo tincidunt, tincidunt odio ac, posuere felis.</p>
//         <div className="price">Price: ${99.99+1}</div>
//         </div>


//         <button className="add-to-cart">Add to Cart</button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProductDetailPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PopuplarParts } from '../../JsonData/index'; // Import your JSON data
import './product.css';

const ProductDetailPage = () => {
  const [currentImage, setCurrentImage] = useState('src');
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const productsInCategory = PopuplarParts.filter(product => product.category === category);
    setCategoryProducts(productsInCategory);
  }, [category]);

  const handleImageChange = (imageKey) => {
    setCurrentImage(imageKey);
  };

  return (
    <>
   
    {categoryProducts.map((value,index)=>(

    
 <div className='container' key={index}>
 <div className='product_outer'>
   {/* Display category name as title */}


   <div className='image-slider'>
     {/* Display main product image */}
     <img src={value[currentImage]} alt={value.alt} className='main-image'  />

     <div className='thumbnail-slider'>
                <img
                  src={value.src}
                  alt={value.alt}
                  className={currentImage === 'src' ? 'active' : ''}
                  onClick={() => handleImageChange('src')}
                />
                <img
                  src={value.src2}
                  alt={value.alt}
                  className={currentImage === 'src2' ? 'active' : ''}
                  onClick={() => handleImageChange('src2')}
                />
                <img
                  src={value.src3}
                  alt={value.alt}
                  className={currentImage === 'src3' ? 'active' : ''}
                  onClick={() => handleImageChange('src3')}
                />
              </div>
   </div>

   <div className='product-details'>
     <div className='content'>
       {/* Display product name and description */}
       <h1 className='product-name'>{value.name}</h1>
       <h2>Description</h2>
       <p>{value.description}</p>
       <div className='price'>Price: ${value.price}</div>
     </div>

     <button className='add-to-cart'>Add to Cart</button>
   </div>
 </div>
</div>
    ))}
   
    </>
  );
};

export default ProductDetailPage;


