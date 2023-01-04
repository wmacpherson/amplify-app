// components/Home.js
import { Flex, Heading, Divider } from '@aws-amplify/ui-react';
export function Home() {
  return (
    <Flex direction="column">
    <Heading level={3}>
      Home Page
    </Heading>
    <Divider
      size="small"
      orientation="horizontal" />
    </Flex>
  );
}