/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrediction = /* GraphQL */ `
  query GetPrediction($id: ID!) {
    getPrediction(id: $id) {
      id
      stock_ticker
      stock
      initial_price
      initial_date
      predicition_price
      predicition_date
      reasoning
      positive_error
      negative_error
      positive_kill_error
      negative_kill_error
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPredictions = /* GraphQL */ `
  query ListPredictions(
    $filter: ModelPredictionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPredictions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stock_ticker
        stock
        initial_price
        initial_date
        predicition_price
        predicition_date
        reasoning
        positive_error
        negative_error
        positive_kill_error
        negative_kill_error
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
