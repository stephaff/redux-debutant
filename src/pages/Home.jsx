import React from 'react';
import Navbar from '../components/navbar/Navbar';
import UserList from '../components/userList.jsx/UserList';

const Home = () => {
  return (
    <div style={{width : '800px'}}>
      <Navbar />
      <UserList />
    </div>
  )
}

export default Home;