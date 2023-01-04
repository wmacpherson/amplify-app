import { useEffect } from "react";
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

export function Login() {
  const formFields = {
    signUp: {
      username: {
        placeholder: 'Enter Your Username Here',
        isRequired: true,
        label: 'Username:'
      },
      firm: {
        placeholder: 'Enter Your Firm Name',
        isRequired: false,
        label: 'Firm',
      },
      job: {
        placeholder: 'Enter your Position within the Firm',
        isRequired: false,
        lable: 'Job',
      }
    },
  }
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator formFields={formFields}></Authenticator>
    </View>
  );
}