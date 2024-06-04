import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {

    readDatabase(request.databaseName).then((fields) => {
      const msgs = [];
      const fieldNames = Object.keys(fields).sort();

      msgs.push('This is the list of our students\n');

      for (const field of fieldNames) {
        const count = fields[field].length;
        const studentNames = fields[field].join(', ');

        msgs.push(`Number of students in ${field}: ${count}. List: ${
          studentNames}`);
      }

      response.write(msgs.join('\n'));
    }).catch(() => {
      response.status(500);
      response.write('Cannot load the database');
    }).finally(() => {
      response.end();
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (['CS', 'SWE'].indexOf(major) === -1) {
      response.send('Major parameter must be CS or SWE', 500);
    } else {
      readDatabase(request.databaseName).then((fields) => {
        response.send(`List: ${fields[major].join(', ')}`);
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
    }
  }
}

export default StudentsController;
