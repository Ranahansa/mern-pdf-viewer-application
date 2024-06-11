import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';
import UploadPdf from './components/UploadPdf';

const App = () => {
  return (
    <Router>
      <div className="container px-4 mx-auto">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadPdf />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
