import { useState } from 'react';
import './App.css';
import Authenticate from './components/Authenticate';
import SignUpForm from './components/signUpForm';

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} />
      <SignUpForm setToken={setToken} />
    </>
  );
}
