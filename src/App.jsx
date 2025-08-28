import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './Components/UserList';
import FormValidation from './Components/FormValidation';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/formvalidation" element={<FormValidation />} />
        <Route path="/userlist" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
