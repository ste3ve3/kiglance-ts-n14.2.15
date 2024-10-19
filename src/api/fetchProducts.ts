import { graphQLClient } from "./graphqlClient";
import { GET_PRODUCTS } from "./queries";

export const fetchProducts = async () => {
  const data = await graphQLClient.request<{
    getProducts: {
      count: number;
      data: { id: string; name: string; image: string }[];
    };
  }>(GET_PRODUCTS);
  return data?.getProducts?.data?.map(
    (product: { id: string; name: string; image: string }) => ({
      id: product.id,
      name: product.name,
      image: product.image,
    })
  );
};
