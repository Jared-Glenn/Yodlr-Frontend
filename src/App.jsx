import React from 'react'
import './App.css'
import YodlrApi from './api'

import RouteList from "./RouteList";
import UserContext from './usersContext';

function App() {

  
  const registerUser = async (firstName, lastName, email) => {
    await YodlrApi.registerUser(firstName, lastName, email);
  }

  return (
    <div className='main-div'>
      <UserContext.Provider value={{ registerUser }}>
        <RouteList />
      </UserContext.Provider>
    </div>
  )
}

export default App
