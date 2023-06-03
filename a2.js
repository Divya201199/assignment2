const collegeData = require('./modules/collegeData');

collegeData.initialize()
  .then(() => {
    console.log('Initialization successful');
    
    // Test getAllStudents
    collegeData.getAllStudents()
      .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);
      })
      .catch((error) => {
        console.error(error);
      });

    // Test getCourses
    collegeData.getCourses()
      .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);
      })
      .catch((error) => {
        console.error(error);
      });

    // Test getTAs
    collegeData.getTAs()
      .then((TAs) => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
