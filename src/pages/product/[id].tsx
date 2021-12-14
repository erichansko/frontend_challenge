import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getProductByGtin } from '../../services';
import { Product } from '../../types';
import { buyProduct } from '../../util';

const ProductDetail = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const gtin = router.query.id as string;

    getProductByGtin(gtin)
      .then((response) => {
        setProduct(response);
        setLoaded(true);
      })
      .catch(() => {
        setProduct(null);
        setLoaded(false);
      });
  }, [router]);

  const onBuy = () => {
    if (product) {
      buyProduct(product);
    }
  };

  return loaded ? (
    <Layout>
      {product ? (
        <div className="flex">
          <div className="w-1/3 pr-10">
            <div className="w-full bg-gray-100 max-h-96 overflow-hidden rounded-md">
              <img src={product?.imageUrl} alt="feature" />
            </div>
          </div>
          <div className="w-2/3">
            <p className="text-grey-500 text-lg">{product?.gtin}</p>
            <h1 className="text-4xl text-purple-700 font-bold mb-10">{product?.name}</h1>
            <div className="flex items-center text-lg text-gray-700 mb-3">
              <span className="mr-5">Brand Name:</span>
              <p className="font-bold">{product?.brandName}</p>
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <span className="mr-5">Category Name:</span>
              <p className="font-bold">{product?.categoryName}</p>
            </div>
            <div className="flex items-center pt-5 flex-col w-full pr-24">
              <div className="flex items-center justify-center py-2 my-5 bg-purple-500 w-96 rounded-lg bg-opacity-30">
                <p className="text-lg text-purple-900 font-bold">
                <span className="text-6xl">
                  {product?.recommendedRetailPrice}
                </span>
                  &nbsp;
                  {product?.recommendedRetailPriceCurrency}
                </p>
              </div>
              <button
                onClick={onBuy}
                className="bg-purple-900 bg-opacity-70 hover:bg-opacity-100 transition-colors duration-200
                 rounded-xl text-white w-96 font-semibold py-3 px-10"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <h1 className="text-xl">{`There is no product matched with ${router.query.id}`}</h1>
        </div>
      )}
    </Layout>
  ) : false;
};

export default ProductDetail;
