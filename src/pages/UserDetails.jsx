import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function UserDetails() {

  let id = useParams().id;
  const users = useSelector(state => state.userReducer);
  let user = users.find(user => user.id === parseInt(id));
  console.log(user)

  return (
    <div>
      <p>Bienvenue {user.name}, vous êtes {user.job} </p>
    </div>
  )
}

export default UserDetails;