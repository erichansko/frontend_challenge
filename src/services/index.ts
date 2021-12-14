import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3000/api/products',
});

export async function getProducts(page: number) {
  return service
    .get(`/?page=${page}`)
    .then((response) => response.data)
    .catch((error) => error);
}

export async function getProductByGtin(gtin: string) {
  return service
    .get(`/${gtin}`)
    .then((response) => response.data)
    .catch((error) => error);
}
