import React  from 'react';
import { CartProduct, Product } from '../../types';

interface ICartItemCard {
  data: CartProduct,
  onReduce: (id: string) => void,
  onBuyMore: (data: Product) => void,
  onRefuseAll: (id: string) => void,
}

const CartItemCard: React.FC<ICartItemCard> = ({ data, onReduce, onBuyMore, onRefuseAll }) => {
  const handleBuyMore = () => {
    const { count, ...rest } = data;
    onBuyMore(rest as Product);
  };
  
  return (
    <div className="p-4 flex rounded-md border">
      <div className="w-1/3 rounded-md bg-gray-100">
        <img src={data.imageUrl} alt="feature" />
      </div>
      <div className="w-2/3 flex-grow flex flex-col pl-4">
        <p className="truncate mb-3">{data.name}</p>
        <div className="flex items-start text-sm mb-9">
          <span>Count:</span>
          <span className="flex-grow pl-3">{data.count}</span>
          <button
            className="rounded-xl text-xs font-bold text-white py-0.5 px-3 bg-yellow-500 bg-opacity-75 hover:bg-opacity-100"
            onClick={() => onReduce(data.gtin)}
          >
            Decrease
          </button>
        </div>
        <div className="flex justify-between items-center h-8 pt-5">
          <button
            className="rounded-md w-24 text-white py-1 px-4 bg-purple-700 bg-opacity-75 text-sm font-bold hover:bg-opacity-100"
            onClick={handleBuyMore}
          >
            Buy More
          </button>
          <button
            className="rounded-md w-24 text-purple-500 py-1 px-4 border border-purple-500 text-sm font-bold hover:text-purple-700"
            onClick={() => onRefuseAll(data.gtin)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
};

export default CartItemCard;
