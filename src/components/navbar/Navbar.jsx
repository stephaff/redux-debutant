import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/addUser';
import { setUser } from '../../redux/setUser';
import './Navbar.css'

const Navbar = ({ name, setName, job, setJob, avatar, setAvatar, idSelected }) => {

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

  const set = () => {
    let obj = {
      id : idSelected,
      user : {
        name : name,
        job : job,
        avatar : avatar,
        id : idSelected
      }
    }
    dispatch(setUser(obj));
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
        <button onClick={ set }>Modifier</button>
    </div>
  )
}

export default Navbar;