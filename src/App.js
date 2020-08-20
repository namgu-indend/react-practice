import React, {useRef} from 'react';
import UserList from './array/UserList';



function App() {

  const users = [
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
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
    <>
      <UserList users={users}></UserList>
    </>
  );
}

export default App;
