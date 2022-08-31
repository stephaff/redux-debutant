import React from 'react';
import Navbar from '../components/navbar/Navbar';
import UserList from '../components/userList.jsx/UserList';

const Home = ({ name, setName, job, setJob, avatar, setAvatar, idSelected, setIdSelected }) => {
  return (
    <div style={{width : '800px'}}>
      <Navbar name={ name } setName={ setName }
        job={ job } setJob={ setJob } avatar={ avatar } setAvatar={ setAvatar } idSelected={ idSelected }
      />
      <UserList  name={ name } setName={ setName }
        job={ job } setJob={ setJob } avatar={ avatar } setAvatar={ setAvatar } setIdSelected={ setIdSelected }
      />
    </div>
  )
}

export default Home;