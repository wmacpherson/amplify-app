import './App.css';
import { createPrediction, updatePrediction, deletePrediction, createUser} from './graphql/mutations'
import { listPredictions, getPrediction } from "./graphql/queries";
import { withAuthenticator, Button, Text, Flex, Heading, Grid} from "@aws-amplify/ui-react";
import { useCallback, useEffect, useState } from 'react';
import { API } from 'aws-amplify';

function App({ signOut }) {
  const [ predictions, setPredicitons ] = useState([])

  const fetchPredictions = useCallback(async () => {
    const result = await API.graphql({
      query: listPredictions,
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    setPredicitons(result.data.listPredictions.items)
  }, [setPredicitons])

  const handleCreatePrediciton = useCallback(async () => {
    await API.graphql({
      query: createPrediction,
      variables: {
          input: {
              "stock_ticker": "Lorem ipsum dolor sit amet",
              "stock": "Lorem ipsum dolor sit amet",
              "initial_price": 123.45,
              "initial_date": "1970-01-01T12:30:23.999Z",
              "predicition_price": 123.45,
              "predicition_date": "1970-01-01T12:30:23.999Z",
              "reasoning": "Lorem ipsum dolor sit amet",
              "positive_error": 123.45,
              "negative_error": 123.45,
              "positive_kill_error": 123.45,
              "negative_kill_error": 123.45
            }
          },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    fetchPredictions()
  }, [fetchPredictions])

  const handleDeletePrediction = useCallback(async (id) => {
    await API.graphql({
      query: deletePrediction,
      variables: {
          input: {id: id }},
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    fetchPredictions()
  }, [fetchPredictions])

  useEffect(() => {
    fetchPredictions()
  }, [fetchPredictions])

  return (
    <Flex direction={"column"} >
        <Grid templateColumns="800px 100px 100px" gap="2%" backgroundColor="#000A68">
          <Heading level={1} color='white' column={1} row={1} paddingLeft="1%">Name</Heading>
          <Heading level={3} color='white' column={1} row={2} paddingLeft="1%">Position</Heading>
          <Heading level={3} color='white' column={1} row={3} paddingLeft="1%">Job</Heading>
          <Button onClick={signOut} color='white' column={5} row={1}>Sign Out</Button>
        </Grid>
      {predictions.map(prediction => <Flex alignItems={'bottom'}>
        <Text key={prediction}>{prediction.text}</Text>
        <Button onClick={() => handleDeletePrediction(prediction.id)}>Remove</Button>
      </Flex>)}
      <Button onClick={handleCreatePrediciton}>Add Prediction</Button>
    </Flex>
  );
}

export default withAuthenticator(App);