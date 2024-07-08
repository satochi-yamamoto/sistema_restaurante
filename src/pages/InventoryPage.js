import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/inventory`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.quantity} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPage;
