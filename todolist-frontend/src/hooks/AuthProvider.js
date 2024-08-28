import React, { createContext, useContext, useState, useEffect } from 'react';
// api
import AuthApi from '../api/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      AuthApi.fetchUserInfo(token)
        .then(response => setUser(response.data))
        .catch(() => setUser(null));
    }
  }, []);

  const login = async (email, password) => {
    const response = await AuthApi.login(email, password);

    if (response.status === 200) {
      const { jwt:token } = response.data;
      localStorage.setItem('token', token);
      const userResponse = await AuthApi.fetchUserInfo(token);
      const userData = await userResponse.json();
      setUser(userData);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
