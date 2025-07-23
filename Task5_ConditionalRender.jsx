import React, { useState } from 'react';

function Task5_ConditionalRender() {
  const [users, setUsers] = useState([]); 
  return (
    <div>
      <h2>Task 5: Conditional Rendering</h2>

      
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li> 
          ))}
        </ul>
      )}

      
      <button
        onClick={() =>
          setUsers([...users, { id: Date.now(), name: 'New User' }])
        }
      >
        Add User Name
      </button>
    </div>
  );
}

export default Task5_ConditionalRender;
