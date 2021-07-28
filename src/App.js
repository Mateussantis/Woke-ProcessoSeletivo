import './App.css';
import './config/firebase';
import React from 'react';
import { Helmet } from 'react-helmet';
import MainRouter from './routes/MainRouter';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Helmet>
      <title>Processo Seletivo - Woke</title>
    </Helmet>
    <MainRouter />
  </AuthProvider>
  );
}

export default App;
