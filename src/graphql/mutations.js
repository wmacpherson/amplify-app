/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrediction = /* GraphQL */ `
  mutation CreatePrediction(
    $input: CreatePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    createPrediction(input: $input, condition: $condition) {
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
export const updatePrediction = /* GraphQL */ `
  mutation UpdatePrediction(
    $input: UpdatePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    updatePrediction(input: $input, condition: $condition) {
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
export const deletePrediction = /* GraphQL */ `
  mutation DeletePrediction(
    $input: DeletePredictionInput!
    $condition: ModelPredictionConditionInput
  ) {
    deletePrediction(input: $input, condition: $condition) {
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
