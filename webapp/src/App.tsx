import React from 'react';
import './App.css';
import { store, StoreState } from './Redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from './Pages/Login';


const mapStateToProps = (state: StoreState) => {
  return {loggedInUser: state.loggedInUser}
}


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" component={<HomePage />}/> */}
          <Route path="login" element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;