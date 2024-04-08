export default function createIteratorObject(report) {
  return {
    ...report,
    [Symbol.iterator]() {
      const { allEmployees } = report;
      const employees = [];
      let currentIndex = 0;

      // loop through all departments found in allEmployees object
      for (const department of Object.keys(allEmployees)) {
        // get all employees related to the current department
        const departmentEmployees = allEmployees[department];

        // loop through all employees of the current department and push them to
        // the employees array
        for (const employee of departmentEmployees) {
          employees.push(employee);
        }
      }

      return {
        next() {
          const currentEmployee = employees[currentIndex];
          currentIndex += 1;

          return {
            value: currentEmployee,
            done: !currentEmployee,
          };
        },
      };
    },
  };
}
