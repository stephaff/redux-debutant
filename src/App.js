import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

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
    </Routes>
  )
}

export default App;