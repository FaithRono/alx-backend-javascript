const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 1245;

// Function to count students
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    const numberOfStudents = students.length;
    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    let result = `Number of students: ${numberOfStudents}\n`;
    for (const [field, firstnames] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`;
    }

    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  try {
    const studentsList = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsList}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
