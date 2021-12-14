import React from 'react';
import './App.css';
import ItemCard from './Components/ItemCard';
import LoginBox from './Components/Login';
import { store, StoreState } from './Redux';

const mapStateToProps = (state: StoreState) => {
  return {loggedInUser: state.loggedInUser}
}

function App() {

  return (
    <>
      <div className="login">
        <LoginBox />
      </div>
    </>
  );
}

export default App;
