import { graphQLClient } from "./graphqlClient";
import { GET_PRODUCT_TAGS } from "./queries";

export const fetchProductTags = async () => {
  const data = await graphQLClient.request<{
    getProductTags: {
      count: number;
      data: { id: string; name: string }[];
    };
  }>(GET_PRODUCT_TAGS);
  return data?.getProductTags?.data?.map(
    (tag: { id: string; name: string }) => ({
      id: tag.id,
      name: tag.name,
    })
  );
};
