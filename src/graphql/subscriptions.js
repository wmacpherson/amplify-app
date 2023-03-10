/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      score
      firm
      position
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      score
      firm
      position
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      score
      firm
      position
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrediction = /* GraphQL */ `
  subscription OnCreatePrediction(
    $filter: ModelSubscriptionPredictionFilterInput
    $owner: String
  ) {
    onCreatePrediction(filter: $filter, owner: $owner) {
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
export const onUpdatePrediction = /* GraphQL */ `
  subscription OnUpdatePrediction(
    $filter: ModelSubscriptionPredictionFilterInput
    $owner: String
  ) {
    onUpdatePrediction(filter: $filter, owner: $owner) {
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
export const onDeletePrediction = /* GraphQL */ `
  subscription OnDeletePrediction(
    $filter: ModelSubscriptionPredictionFilterInput
    $owner: String
  ) {
    onDeletePrediction(filter: $filter, owner: $owner) {
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
