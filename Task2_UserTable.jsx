import React from 'react';

function Task2_UserTable() {
  const students = [
    { id: 1, name: 'Ajay', city: "manglore" },
    { id: 2, name: 'Ravi', city: "banglore" },
    { id: 3, name: 'Dhanya', city: "kumta" },
    { id: 4, name: 'Suma', city: "pune" } 
  ];

  return (
    <div>
      <h2>Task 2: Displaying an Array of Objects</h2>
      <table border="2" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task2_UserTable;
