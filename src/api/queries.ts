import { gql } from "graphql-request";

export const GET_RESPONSIBILITIES = gql`
  query getResponsibilities {
    getResponsibilities {
      count
      data {
        name
      }
    }
  }
`;

export const GET_PRODUCT_TAGS = gql`
  query getProductTags {
    getProductTags {
      count
      data {
        name
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      count
      data {
        name
        image
      }
    }
  }
`;
