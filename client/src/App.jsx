import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';
import UploadPdf from './components/UploadPdf';
import ViewPdfs from './components/ViewPdfs';

const App = () => {
  return (
    <Router>
      <div className="container px-4 mx-auto">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/upload" component={UploadPdf} />
          <PrivateRoute path="/view" component={ViewPdfs} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
