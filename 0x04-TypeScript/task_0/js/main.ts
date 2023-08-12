interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

function createStudent(student: Student) {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    }
}

const student1 = createStudent({ firstname: 'john', lastname: "charles", age: 12, location: "Nairobi"})
const student2 = createStudent({ firstname: 'Donald', lastname: "charles", age: 32, location: "USA"})

const studentsList: Student[] = [ student1, student2 ];

function renderTable(students: Student[]) {
    const table = document.createElement('table');
  
    students.forEach(student => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      
      cell1.textContent = student.firstname;
      cell2.textContent = student.location;
    });
  
    document.body.appendChild(table);
  }
  
  // Call the function to render the table
  renderTable(studentsList);
  