
function Task1_NameList(){
    const students = [
        {id: 111, name: "Ajay", city: "manglore"},
        {id: 222, name: "Ravi", city: "banglore"},
        {id: 333, name: "dhanya", city: "kumta"},
        {id: 444, name: "suma", city: "pune"}
    ];

    return (
        <div>
            <h2>Task 1: Rendering a List of Names</h2>
            <ul>
                {students.map((student) =>
                    <li key={student.id}>
                        Name: {student.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Task1_NameList;
