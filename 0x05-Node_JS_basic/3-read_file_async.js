const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      resolve(data
        .split('\n')
        .map((l) => l.trim().split(','))
        .filter((s) => s.length > 0));
    }
  });
}).then((lines) => {
  const [labels, ...studentsData] = lines;
  const firstNameIndex = labels.indexOf('firstname');
  const fieldIndex = labels.indexOf('field');

  if (firstNameIndex === -1 || fieldIndex === -1) {
    throw new Error('Cannot load the database');
  }

  let studentCount = 0;
  const fields = {};

  for (const student of studentsData) {
    if (student.length >= 2) {
      studentCount += 1;
      const field = student[fieldIndex];
      const firstName = student[firstNameIndex];

      if (Array.isArray(fields[field])) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    }
  }

  console.log(`Number of students: ${studentCount}`);

  for (const field of Object.keys(fields)) {
    const studentNames = fields[field];
    console.log(`Number of students in ${field}: ${
      studentNames.length}. List: ${studentNames.join(', ')}`);
  }
});

module.exports = countStudents;
