import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/deleteUser';
import './User.css';

const User = ({ user, name, setName, job, setJob, avatar, setAvatar, setIdSelected }) => {

  const dispatch = useDispatch();

  const del = () => {
    dispatch(deleteUser( user.id ));
  }

  const set = () => {
    setName(user.name);
    setJob(user.job);
    setAvatar(user.avatar);
    setIdSelected(user.id);
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