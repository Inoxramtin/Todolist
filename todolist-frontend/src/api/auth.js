// utils
import axios from '../utils/axios';

function AuthApi() {
    return {
        login: (username, password) => 
            axios.post('/api/signin', {
                username,
                password
            }),
        signUp: (firstName, lastName, email, username, password) => 
            axios.post('/api/singup', {
                first_name: firstName,
                last_name: lastName,
                number: "09333485334",
                email,
                username,
                password
            }),
        fetchUserInfo: (token) => 
            axios.get('/api/usersId')
    }
};

export default AuthApi();