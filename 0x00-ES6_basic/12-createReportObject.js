/*export default*/ function createReportObject(employeesList) {
  return {
    allEmployees: {
        ...employeesList
    },
    getNumberOfDepartments(emp){
        return Object.keys(emp).length;
    }
  };
}

const employees = {
    engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ]
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));