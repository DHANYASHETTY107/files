
import React, { useState } from 'react';

function Task3_RemoveUser() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ajay' },
    { id: 2, name: 'Ravi' },
    { id: 3, name: 'Dhanya' },
    { id: 4, name: 'Suma' },
  ]);

  const handleRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>Task 3: Removing an Item from a List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleRemove(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task3_RemoveUser;
