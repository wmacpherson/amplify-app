// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View, Grid} from '@aws-amplify/ui-react';
import '../css/layout.css';
export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav>
        <Button row={1}column={1} onClick={() => navigate('/')}>Home</Button>
        <Button row={1}column={2} onClick={() => navigate('/protected')}>
        Your Profile
        </Button>
        {route !== 'authenticated' ? (
        <Button row={1}column={10} onClick={() => navigate('/login')}>Login</Button>
        ) : (
        <Button row={1}column={10} onClick={() => logOut()}>Logout</Button>
        )}
        <View row={1}column={9}>
        {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}
      </View>
      </nav>
      <Outlet />
    </>
  );
}