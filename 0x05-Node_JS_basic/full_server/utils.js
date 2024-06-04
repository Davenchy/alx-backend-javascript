const fs = require('fs');

const readRows = (databaseName) => new Promise((resolve, reject) => {
  fs.readFile(databaseName, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
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

  for (const row of studentsData) {
    const field = row[fieldIndex];
    const firstname = row[firstnameIndex];

    if (Array.isArray(fields[field])) {
      fields[field].push(firstname);
    } else {
      fields[field] = [firstname];
    }
  }

  return fields;
};

const readDatabase = (filePath) => readRows(filePath).then(parseRows);

export default readDatabase;
