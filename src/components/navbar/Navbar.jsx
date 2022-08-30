import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/addUser';
import './Navbar.css'

const Navbar = () => {

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [avatar, setAvatar] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeJob = (e) => {
    setJob(e.target.value);
  }

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    
    reader.addEventListener('load', () =>{
      setAvatar(reader.result);
    });

    if(file){
      reader.readAsDataURL(file);
    }
  }

  const add = () => {
    const user = {
      name : name,
      job : job,
      avatar : avatar,
      id : Date.now()
    }
    dispatch(addUser(user));
    setName('');
    setJob('');
    setAvatar(null);
  }

  return (
    <div className='navbar'>
        <input type="text" placeholder='Name' onChange={ handleChangeName }  value={ name } />
        <input type="text" placeholder='Job' onChange={ handleChangeJob } value={ job } />
        <input type="file" onChange={ handleChangeFile } />
        <button onClick={ add }>Ajouter</button>
    </div>
  )
}

export default Navbar;