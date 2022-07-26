import React from 'react';
import Login from './components/Login';
import WaiterScreen from './components/Waiter';
import {AuthProvider} from './context/AuthContext';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/waiter" element={<WaiterScreen />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
