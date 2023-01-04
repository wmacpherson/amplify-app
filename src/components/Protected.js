import { useAuthenticator, Heading, Grid, Card } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Predicition} from '../ui-components';
import {ShowPredictions} from './Predictions'
import "../css/Protected.css"

export function Protected() {
  const [currentUser, setUser] = useState("");
  const { route } = useAuthenticator((context) => [context.route]);
  const message =
    route === 'authenticated' ? 'Showing Profile' : 'Loading...';
  console.log(message)
  Auth.currentAuthenticatedUser({
    bypassCache: false 
    })
      .then((user) => {
        setUser(user.username);
        console.log(user.username);
    })
  return(
    <Grid>
      <Heading level={2} row={1}>
        Your Profile
      </Heading>
      <Heading level={3} column={1} row={2}> Welcome {currentUser}</Heading>
      <Heading level={5} column={1} row={3}> View your Predictions Below</Heading>
      <Heading level={5} column={2} row={3}> Make a Prediction</Heading>
      <Card className='createPrediction' column={2} row={4} variation="elevated"> 
        <Predicition />
      </Card>
      <Card column={1} row={4}>
        <ShowPredictions />
      </Card>
    </Grid>
  );
}
