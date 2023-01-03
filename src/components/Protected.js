// components/Protected.js
import { useAuthenticator, Flex, Heading, Grid, Divider } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
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
    <Heading level={3} row={1}>
      Home Page
    </Heading>
    <Divider
      size="small"
      orientation="horizontal" 
      row={2}/>
    <Flex direction='column'>
        <Heading level={5} column={2}> Welcome {currentUser}</Heading>
    </Flex>
    </Grid>
  );
}