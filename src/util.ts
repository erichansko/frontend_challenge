import { Product, CartProduct } from './types';

const storageKey = 'cart';

export const getProducts = () => {
  const item = window.localStorage.getItem(storageKey);
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const setProducts = (key: string, value: Product[]) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const buyProduct = (product: Product): CartProduct[] => {
  const products = getProducts();

  if (products.length) {
    const index = products.findIndex((item: CartProduct) => item.gtin === product.gtin);
    if (index > -1) {
      products[index].count += 1;
    } else {
      products.push({
        ...product,
        count: 1,
      });
    }
    setProducts(storageKey, products);

    return products;
  } else {
    const item = {
      ...product,
      count: 1,
    };

    setProducts(storageKey, [item]);

    return [item];
  }
};

export const refuseProduct = (gtin: string): CartProduct[] => {
  const products = getProducts();

  if (products.length) {
    const filteredProducts = products.filter((product: Product) => product.gtin !== gtin);
    setProducts(storageKey, filteredProducts);

    return filteredProducts;
  }

  return [];
};

export const reduceCountOfProduct = (gtin: string): CartProduct[] => {
  const products = getProducts();

  if (products.length) {
    const index = products.findIndex((item: Product) => item.gtin === gtin);
    if (products[index].count === 1) {
      const reduced = refuseProduct(gtin);

      return reduced;
    } else {
      products[index].count -=1;
      setProducts(storageKey, products);

      return products;
    }
  }

  return [];
};
