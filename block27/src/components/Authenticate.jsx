import { useState } from 'react';
import PropTypes from 'prop-types';

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      const result = await response.json();
      setSuccessMessage(result.message); // Store the message from the API response in the state
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Authenticate Token</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}

Authenticate.propTypes = {
    token: PropTypes.string.isRequired,
};
export default Authenticate;
