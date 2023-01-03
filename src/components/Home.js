// components/Home.js
import { Heading, Divider, Card, Text, Grid } from '@aws-amplify/ui-react';
import Asset_Search from './Asset_Search';
import * as React from 'react';
export function Home() {

  return (
    <Grid>
      <Heading level={3} row={1}>
        Home Page
      </Heading>
      <Divider
        size="small"
        orientation="horizontal" 
        row={2}/>
      <Card row={3}>
        <Heading level={5}>Stock Search</Heading>
        <Asset_Search />
      </Card>
    </Grid>
  );
}