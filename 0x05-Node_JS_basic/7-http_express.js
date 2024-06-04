const fs = require('fs');
const express = require('express');

const app = express();
const databaseName = process.argv.length >= 3 ? process.argv[2] : '';

const readRows = (databaseName) => new Promise((resolve, reject) => {
  fs.readFile(databaseName, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      resolve(data
        .trim()
        .split('\n')
        .filter((line) => line)
        .map((line) => line.split(',')));
    }
  });
});

const parseRows = (rows) => {
  const [labels, ...studentsData] = rows;
  const firstnameIndex = labels.indexOf('firstname');
  const fieldIndex = labels.indexOf('field');
  const fields = {};
  let studentCount = 0;

  for (const row of studentsData) {
    const field = row[fieldIndex];
    const firstname = row[firstnameIndex];

    studentCount += 1;

    if (Array.isArray(fields[field])) {
      fields[field].push(firstname);
    } else {
      fields[field] = [firstname];
    }
  }

  return { fields, studentCount };
};

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  readRows(databaseName)
    .then(parseRows)
    .then(({ fields, studentCount }) => {
      const msgs = [];

      msgs.push(`Number of students: ${studentCount}`);

      for (const field of Object.keys(fields)) {
        const studentNames = fields[field];
        msgs.push(`Number of students in ${field}: ${
          studentNames.length}. List: ${studentNames.join(', ')}`);
      }

      res.write(msgs.join('\n'));
    })
    .catch((err) => res.write(err.message))
    .finally(() => res.end());
});

app.listen(1245);

module.exports = app;
