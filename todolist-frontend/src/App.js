import React, { useState } from 'react';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashoboard.js';
import { useAuth } from './hooks/AuthProvider';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const AuthGaurd = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const NotAuthGaurd = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : children;
};

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<NotAuthGaurd><Login /></NotAuthGaurd>} />
        <Route path="/sign-up" element={<NotAuthGaurd><Login /></NotAuthGaurd>} />
        <Route path="/dashboard" element={<AuthGaurd><Dashboard /></AuthGaurd>} />
        <Route path="/" element={<AuthGaurd><Dashboard /></AuthGaurd>} />
      </Routes>
    </Router>
  );
};

export default App;