import React, { useRef, useState, useMemo } from 'react';
import UserList from './array/UserList';
import CreateUser from './array/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수는 세는중 ...');
  return users.filter(user => user.active).length;
}

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
      active: true,
    },
    {
      id: 2,
      username: 'bb',
      email: 'bb@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'cc',
      email: 'cc@gmail.com',
      active: false,
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

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(
        user => user.id === id 
        ? {...user, active: !user.active}
        : user
      )
    )
  }

  // 아래 함수는 [users] 가 바뀔때만 실행됨 (최적화에 대한 부분)
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate} />

      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>

      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
