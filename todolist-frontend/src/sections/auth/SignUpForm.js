import React, { useState } from 'react';
// api
import AuthApi from '../../api/auth';

const styles = {
    form: {
        padding: 'inherit',
        paddingLeft: 0,
        paddingRight: 0,
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
    inputGroup: {
      marginBottom: '20px',
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
    divider: {
        border: 'none',
        borderTop: '1px solid white',
        margin: '20px 0',
    },
};

const SignUpForm = ({ onChangeState }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password) {
            await AuthApi.signUp(name, lastname, email, username, password)
                .then((respone) => onChangeState())
                .catch((error) => console.error(error));
        }
      };

    return (
        <div style={styles.formContainer}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.inputGroup}>
                    <input style={styles.input} placeholder='Name' type="text" id="name" name="name" onChange={(event) => setName(event.currentTarget.value)} />
                </div>
                <div style={styles.inputGroup}>
                    <input style={styles.input} placeholder='Last Name' type="text" id="lastname" name="lastname" onChange={(event) => setLastname(event.currentTarget.value)} />
                </div>
                <div style={styles.inputGroup}>
                    <input style={styles.input} placeholder='Email' type="email" id="email" name="email" onChange={(event) => setEmail(event.currentTarget.value)} />
                </div>
                <div style={styles.inputGroup}>
                    <input style={styles.input} placeholder='Username' type="text" id="username" name="username" onChange={(event) => setUsername(event.currentTarget.value)} />
                </div>
                <div style={styles.inputGroup}>
                    <input style={styles.input} placeholder='Password' type="password" id="password" name="password" onChange={(event) => setPassword(event.currentTarget.value)} />
                </div>
                
                <button style={styles.button} type="submit">Sign up</button>
            </form>

            <hr style={styles.divider} />

            <div style={styles.linkGroup}>
                <a style={styles.link} onClick={onChangeState}>Back to Sign up</a>
            </div>
        </div>
    );
}

export default SignUpForm;