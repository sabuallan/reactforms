import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      if (result.success) {
        setToken(result.data.token);
        setError(null);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Error signing up');
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

SignUpForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default SignUpForm;
