import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const getImagePath = (category) => {
    const sanitizedCategory = category
      .toLowerCase()
      .replace(/ /g, '-') 
      .replace(/[^a-z0-9-]/g, ''); 

    const imagePath = `/images/${sanitizedCategory}.jpeg`;
    console.log("Image Path:", imagePath); 
    return imagePath;
  };

  return (
    <>
    <div className="card-product-container">
      {categories.length > 0 ? (
        categories.map((category) => {
          const imagePath = getImagePath(category);
          return (
            <div key={category} className="products-card">
              <Link to={`/${category.toLowerCase()}`}>
                <img
                  src={imagePath}
                  alt={category}
                  onError={(e) => { 
                    e.target.src = '/images/default.jpeg'; 
                  }}
                />
              </Link>
              <h2>{category}</h2>
              <p>Explore the latest in {category.toLowerCase()} products.</p>
            </div>
          );
        })
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
    </>
  );
}

export default Product;