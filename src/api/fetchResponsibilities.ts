import { graphQLClient } from "./graphqlClient";
import { GET_RESPONSIBILITIES } from "./queries";

export const fetchResponsibilities = async () => {
  const data = await graphQLClient.request<{
    getResponsibilities: {
      count: number;
      data: { id: string; name: string }[];
    };
  }>(GET_RESPONSIBILITIES);
  return data?.getResponsibilities?.data?.map(
    (responsibility: { id: string; name: string }) => ({
      id: responsibility.id,
      name: responsibility.name,
    })
  );
};