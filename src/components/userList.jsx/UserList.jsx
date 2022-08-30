import React from 'react'
import { useSelector } from 'react-redux';
import User from '../user/User';

const UserList = () => {

    let users = useSelector(state => state.userReducer);

  return (
    <div className='userList'>
       {users.map(user =>
        <User key={ user.id } user={user} />)} 
    </div>
  )
}

export default UserList;