const fs = require('fs');

const countStudents = (path) => {
  try {
    const fields = fs
      .readFileSync(path, 'utf8')
      .split('\n')
      .slice(1)
      .map((s) => s.trim().split(','))
      .filter((s) => s.length === 4)
      .map((s) => ({ name: s[0], field: s[3] }))
      .reduce((m, s) => {
        const fieldsMap = m;
        if (Array.isArray(fieldsMap[s.field])) {
          fieldsMap[s.field].push(s.name);
        } else {
          fieldsMap[s.field] = [s.name];
        }
        return m;
      }, {});

    for (const field of Object.keys(fields)) {
      const studentNames = fields[field];
      console.log(`Number of students in ${field}: ${
        studentNames.length}. List: ${studentNames.join(', ')}`);
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
};

module.exports = countStudents;
