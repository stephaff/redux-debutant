import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/deleteUser';
// import { setUser } from '../../redux/setUser';
import './User.css';

const User = ({ user }) => {

  const dispatch = useDispatch();

  const del = () => {
    dispatch(deleteUser( user.id ));
  }

  const set = () => {
    // dispatch(setUser());
  }


  return (
    <div className='user'>
        <div className="avatar-container">
            <img src={ user.avatar } alt="avatar" />
        </div>
        <div className="user-informations">
            <p className="name"><span>Name :</span>{ user.name }</p>
            <p className="job"><span>Job :</span>{ user.job }</p>
        </div>
        <div className="user-manager">
            <button className="set" onClick={ set }>Set</button>
            <button className="delete" onClick={ del }>Delete</button>
        </div>
    </div>
  )
}

export default User;