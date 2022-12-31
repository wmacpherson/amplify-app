import './App.css';
import { createPrediction, updatePrediction, deletePrediction} from './graphql/mutations'
import { listPredictions, getPrediction } from "./graphql/queries";
import { withAuthenticator, Button, Text, Flex, Heading } from "@aws-amplify/ui-react";
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
          input: {
              id: "YOUR_RECORD_ID"
          }},
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    fetchPredictions()
  }, [fetchPredictions])

  // const handleDeleteNote = useCallback(async (id) => {
  //   await API.graphql({
  //     query: deleteNote,
  //     variables: { input: { id: id } },
  //     authMode: 'AMAZON_COGNITO_USER_POOLS'
  //   })
  //   fetchNotes()
  // }, [fetchNotes])

  useEffect(() => {
    fetchPredictions()
  }, [fetchPredictions])

  return (
    <Flex direction={"column"}>
      <Flex justifyContent={'space-between'}>
        <Heading level={1}>My Predicitons</Heading>
        <Button onClick={signOut}>Sign Out</Button>
      </Flex>
      {notes.map(note => <Flex alignItems={'center'}>
        <Text>{note.text}</Text>
        <Button onClick={() => handleDeletePrediction(note.id)}>Remove</Button>
      </Flex>)}
      <Button onClick={handleCreatePrediciton}>Add Prediction</Button>
    </Flex>
  );
}

export default withAuthenticator(App);