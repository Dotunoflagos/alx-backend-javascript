const fs = require('fs');

function countStudents(path) {
  function process(err, fileContent) {
    if (err) {
      throw (new Error('Cannot load the database'));
    }
    // count students
    const studentArray = fileContent
      .toString('utf-8')
      .trim()
      .split('\n')
      .slice(1);

    // Process the file content as needed
    console.log(`Number of students: ${studentArray.length}`);
    const field = Array.from(
      new Set(studentArray.map((st) => st.split(',')[3])),
    );

    field.forEach((fl) => {
      const number = studentArray.filter((st) => st.split(',')[3] === fl).length;

      const list = studentArray.filter((st) => st.split(',')[3] === fl).map((st) => st.split(',')[0]);
      console.log(`Number of students in ${fl}: ${number}. List: ${list.join(', ')}`);
    });
  }

  try {
    // Specify the file path yyou want to read
    const filePath = path;

    // Read the file synchronously
    fs.readFile(filePath, 'utf-8', process);
  } catch (error) {
    // Handle any errors that occur during the file read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
