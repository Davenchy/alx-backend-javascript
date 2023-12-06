interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Fadi',
  lastName: 'Asaad',
  age: 24,
  location: 'Egypt',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 1000,
  location: 'Black Hole',
};

const studentsList: Student[] = [student1, student2];

function createStudentsTable(students: Student[]) {
  // collect all student properties
  const properties: string[] = Object.keys(students[0]);

  // define table main components: The table itself, its head and body
  const table: HTMLTableElement = document.createElement('table');

  const thead: HTMLTableSectionElement = table.createTHead();
  const tbody: HTMLTableSectionElement = table.createTBody();

  // create row at the table head
  const theadInsertRow: HTMLTableRowElement = thead.insertRow();

  // add all keys to the table head from the first student object
  properties.forEach((prop) => theadInsertRow.insertCell().innerText = prop);

  // add all students to the table body row after the other
  for (const student of students) {
    // create a new row
    const tbodyInsertRow: HTMLTableRowElement = tbody.insertRow();

    // add all values of current student to the row
    for (const prop of properties) {
      const value: string = (student as any)[prop].toString();
      tbodyInsertRow.insertCell().innerText = value;
    }
  }

  // return table main components for farther use
  return {
    table,
    thead,
    tbody,
  };
}

createStudentsTable(studentsList);
