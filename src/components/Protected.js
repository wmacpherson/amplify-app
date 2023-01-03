// components/Protected.js
import { useAuthenticator, Flex, Text } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

Auth.currentAuthenticatedUser({
  bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
})
  .then((user) => console.log(user))



export function Protected(user) {
  const { route } = useAuthenticator((context) => [context.route]);
  const message =
    route === 'authenticated' ? 'Your Profile' : 'Loading...';
  return(
    <Flex direction='column'>
        <Text column={1}>{message}</Text>
        <Text column={2}>{user.username}</Text>
    </Flex>
  );
}