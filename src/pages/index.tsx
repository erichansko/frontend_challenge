import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services';
import { Product } from '../types';

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const fetchProducts = (pageNumber: number) => {
    getProducts(pageNumber).then(((response) => {
      setCount(response.count);
      setPage(response.page);

      const addedProducts = [...products].concat(response.results);
      setProducts(addedProducts);
    }))
  };

  useEffect(() => {
    fetchProducts(page);
  }, []);

  const onViewMore = () => {
    if (page * 20 < count) {
      fetchProducts(page + 1);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-12">Product</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            data={product}
          />
        ))}
      </div>
      <div className="flex justify-center py-10">
        {products.length < count && (
          <button
            className="border border-purple-600 text-purple-600 hover:text-purple-900 rounded-md font-semibold py-2 px-5"
            onClick={onViewMore}
          >
            View More
          </button>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;