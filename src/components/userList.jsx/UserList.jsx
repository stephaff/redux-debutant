import React from 'react'
import { useSelector } from 'react-redux';
import User from '../user/User';

const UserList = ({ name, setName, job, setJob, avatar, setAvatar, setIdSelected }) => {

    let users = useSelector(state => state.userReducer);

  return (
    <div className='userList'>
       {users.map(user =>
        <User key={ user.id } user={user} 
          name={ name } setName={ setName }
        job={ job } setJob={ setJob } avatar={ avatar } setAvatar={ setAvatar } setIdSelected={ setIdSelected }
        />)} 
    </div>
  )
}

export default UserList;