
import React, { useState } from 'react';

function Task4_AddUser() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ajay' },
    { id: 2, name: 'Ravi' },
    { id: 3, name: 'Dhanya' },
    { id: 4, name: 'Suma' }
  ]);
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim() === '') return;
    const newUser = { id: Date.now(), name };
    setUsers([...users, newUser]);
    setName('');
  };

  return (
    <div>
      <h2>Task 4: Adding a New User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task4_AddUser;
