import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

const App = () => {

  const [idSelected, setIdSelected] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [avatar, setAvatar] = useState('');

  return (
    <Routes>
      <Route path='/' element={ <Home name={ name } setName={ setName }
        job={ job } setJob={ setJob } avatar={ avatar } setAvatar={ setAvatar }
        idSelected={ idSelected} setIdSelected={ setIdSelected } /> } 
      />
      <Route path='/UserDetails/:id' element={ <UserDetails />} />
    </Routes>
  )
}

export default App;