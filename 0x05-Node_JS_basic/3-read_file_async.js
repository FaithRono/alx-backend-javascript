const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      const numberOfStudents = students.length;
      console.log(`Number of students: ${numberOfStudents}`);

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, firstnames] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
