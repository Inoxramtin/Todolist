import React, { useState } from 'react';
// sections
import SignUpForm from '../sections/auth/SignUpForm';
import SignInFrom from '../sections/auth/SignInForm';

const Login = () => {
  const [isLoginFrom, setIsLoginForm] = useState(true);

  return (
    <div style={styles.container}>
      {isLoginFrom 
        ? <SignInFrom onChangeState={() => setIsLoginForm((prev) => !prev)} />
        : <SignUpForm onChangeState={() => setIsLoginForm((prev) => !prev)} />}

      <div style={styles.noteContainer}>
        <div style={styles.note}>
          <p style={styles.noteText}>To do:</p>
          <p style={styles.noteText}><strong>Fuck all</strong></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  form: {
    // Additional styles for the form div
    padding: 'inherit',  // Inherit padding from the formContainer
    paddingLeft: 0,
    paddingRight: 0,
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#fff',
  },
  input: {
    width: '-webkit-fill-available',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#00000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: '700'
  },
  linkGroup: {
    gap: '16px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    alignSelf: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'underline',
    marginRight: '10px',
    cursor: 'pointer'
  },
  container: {
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#1C1B1F',
  },
  formContainer: {
    flexGrow: 1,
    opacity: 0.6,
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'inherit',
    padding: '40px',
  },
  noteContainer: {
    flexGrow: 4,
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  note: {
    backgroundColor: '#ffff00',
    padding: '20px',
    borderRadius: '8px',
    display: 'inline-block',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  noteText: {
    margin: '0',
    fontSize: '18px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid white',
    margin: '20px 0',
  },
};

export default Login;
