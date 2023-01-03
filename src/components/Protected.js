// components/Protected.js
import { useAuthenticator, Flex, Heading, Grid, Divider, Card } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { 
  NewForm1 
} from '../ui-components';
import "../css/Protected.css"
// Auth.currentAuthenticatedUser({
//   bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
// })
//   .then((user) => console.log(user))

export function Protected() {
  const [currentUser, setUser] = useState("");
  const { route } = useAuthenticator((context) => [context.route]);
  const message =
    route === 'authenticated' ? 'Your Profile' : 'Loading...';
  console.log(message)
  Auth.currentAuthenticatedUser({
    bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
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
      <Heading level={5} column={3} row={3}> Make a Prediction</Heading>
      <Card classname='createPrediction' column={3} row={4} variation="elevated"> 
        <NewForm1 />
      </Card>
    </Grid>
  );
}
