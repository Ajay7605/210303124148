
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://20.244.56.144/test/companies/AMZ',
});
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Nzc0MjgyLCJpYXQiOjE3MTg3NzM5ODIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE4ZjZkZjM2LTEzMDYtNGVlZi1iYTQ2LTk4MGY5NWM5NjVhZSIsInN1YiI6IjIxMDMwMzEyNDE0OEBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJQYXJ1bCBVbml2ZXJzaXR5IiwiY2xpZW50SUQiOiIxOGY2ZGYzNi0xMzA2LTRlZWYtYmE0Ni05ODBmOTVjOTY1YWUiLCJjbGllbnRTZWNyZXQiOiJueW93dlZ0dk5TeFZaUVVWIiwib3duZXJOYW1lIjoiQSBBSkFZIEtVTUFSIiwib3duZXJFbWFpbCI6IjIxMDMwMzEyNDE0OEBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4iLCJyb2xsTm8iOiIyMTAzMDMxMjQxNDgifQ.nrzFilBcohAQYD9zMberO6970pz7obqEFY1FQIbW9yk`;

export const fetchProducts = async (filters) => {
  const response = await apiClient.get('/products', { params: filters });
  return response.data.map(product => ({
    ...product,
    uniqueId: generateUniqueId(product),
  }));
};

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return {
    ...response.data,
    uniqueId: generateUniqueId(response.data),
  };
};

const generateUniqueId = (product) => {
  return `${product.company}-${product.id}-${product.category}`;
};
