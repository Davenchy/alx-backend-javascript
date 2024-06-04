const fs = require('fs');
const http = require('http');
const parseUrl = require('url').parse;

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

const getUrlPathname = (request) => parseUrl(request.url).pathname;

const handleStudentsPath = (res) => {
  const sendln = (data) => res.write(`${data}\n`);

  sendln('This is the list of our students');
  return readRows(databaseName)
    .then(parseRows)
    .then(({ fields, studentCount }) => {
      sendln(`Number of students: ${studentCount}`);

      for (const field of Object.keys(fields)) {
        const studentNames = fields[field];
        sendln(`Number of students in ${field}: ${
          studentNames.length}. List: ${studentNames.join(', ')}`);
      }
    }).catch((err) => sendln(err.message))
    .finally(() => res.end());
};

const app = http.createServer((req, res) => {
  const pathname = getUrlPathname(req);

  if (pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (pathname === '/students') {
    handleStudentsPath(res);
  }
});

app.listen(1245);

module.exports = app;
