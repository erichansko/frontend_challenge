import React from 'react';
import { useRouter } from 'next/router';
import { Product } from '../../types';
import { buyProduct } from '../../util';

interface IProductCard {
  data: Product,
}

const ProductCard: React.FC<IProductCard> = ({ data }) => {
  const router = useRouter();

  const onGoToDetail = async () => {
    await router.push(`/product/${data.gtin}`);
  };

  const onBuy = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    buyProduct(data);
  };

  return (
    <div
      className="p-4 rounded-md border cursor-pointer"
      onClick={onGoToDetail}
    >
      <div className="rounded-md bg-gray-100 bg-opacity-30 overflow-hidden">
        <img src={data.imageUrl} alt="product" />
      </div>
      <div>
        <h3 className="truncate py-3 font-semibold">{data.name}</h3>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs mr-2">Brand</span>
          <span className="text-xs font-semibold truncate">{data.brandName}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs mr-2">Category</span>
          <span className="text-xs font-semibold truncate">{data.categoryName}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-purple-900 font-bold">
            <span className="text-2xl">
              {data.recommendedRetailPrice}
            </span>
            &nbsp;
            {data.recommendedRetailPriceCurrency}
          </p>
          <button
            onClick={onBuy}
            className="bg-purple-900 bg-opacity-70 hover:bg-opacity-100 transition-colors duration-200
             rounded-md text-white font-semibold py-2 px-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;
