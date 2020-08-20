import React, { useRef, useState } from 'react';
import UserList from './array/UserList';
import CreateUser from './array/CreateUser';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const {username, email} = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'aa',
      email: 'aa@gmail.com',
    },
    {
      id: 2,
      username: 'bb',
      email: 'bb@gmail.com',
    },
    {
      id: 3,
      username: 'cc',
      email: 'cc@gmail.com',
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    const user = {
      id: nextId.current,
      username,
      email,
    }
    
    // setUsers([...users, user]); // 기존항목은 복사하면서 넣으면서 새항목(user)를 추가
    setUsers(users.concat(user)); // 두번째 방법 concat

    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate} />

      <UserList users={users} />
    </>
  );
}

export default App;
