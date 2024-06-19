
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ /* initial filter state */ });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    // Make API call to fetch products
    const response = await axios.get('/api/products', { params: filters });
    setProducts(response.data);
  };

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div>
        {products.map(product => (
          <ProductCard key={product.uniqueId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
