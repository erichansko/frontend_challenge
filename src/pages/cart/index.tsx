import { useState, useEffect } from 'react';
import CartItemCard from '../../components/CardItemCard';
import Layout from '../../components/Layout';
import {
  getProducts,
  reduceCountOfProduct,
  buyProduct,
  refuseProduct
} from '../../util';
import { Product, CartProduct } from '../../types';

const CartPage = () => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const items = getProducts();
    setProducts(items);
  }, []);

  const handleReduceCountOfProduct = (gtin: string) => {
    const items = reduceCountOfProduct(gtin);
    setProducts(items);
  };

  const handleBuyMore = (data: Product) => {
    const items = buyProduct(data);
    setProducts(items);
  };

  const handleRefuse = (gtin: string) => {
    const items = refuseProduct(gtin);
    setProducts(items);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-12">My Cart</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <CartItemCard
            data={product}
            onReduce={handleReduceCountOfProduct}
            onBuyMore={handleBuyMore}
            onRefuseAll={handleRefuse}
            key={index}
          />
        ))}
      </div>
    </Layout>
  );
};

export default CartPage;
