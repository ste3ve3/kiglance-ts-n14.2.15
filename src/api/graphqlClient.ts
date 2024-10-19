import { GraphQLClient } from "graphql-request";

// Normally, this link should be in an environment variable. But for the sake of this challenge, I will leave it here.
const endpoint =
  "http://ec2-13-51-194-147.eu-north-1.compute.amazonaws.com/api/v1/graphql";

export const graphQLClient = new GraphQLClient(endpoint);