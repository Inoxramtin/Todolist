import React, { createContext, useContext, useState, useEffect } from 'react';
// api
import AuthApi from '../api/auth';
// utils
import axios from '../utils/axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const userResponse = await AuthApi.fetchUserInfo(token);
      const userData = await userResponse.json();
      setUser(userData);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
