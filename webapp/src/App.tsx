import React from 'react';
import './App.css';
import { store, StoreState } from './Redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { LoginPage } from './Pages/Login';
import { Homepage } from './Pages/Homepage';


const mapStateToProps = (state: StoreState) => {
  return {loggedInUser: state.loggedInUser}
}


function App() {

  return (
    <div className="app-container">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="login" element={<LoginPage login={true} />}/>
          <Route path="signup" element={<LoginPage login={false} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;