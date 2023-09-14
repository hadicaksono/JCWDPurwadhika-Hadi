function calculateStudentData(students) {
    // Initialize variables to store score and age data
    let totalScore = 0;
    let totalAge = 0;
    let highestScore = -Infinity;
    let lowestScore = Infinity;
    let highestAge = new Date(0); // Set an initial date far in the past
    let lowestAge = new Date(); // Set an initial date far in the future
  
    // Iterate through the array of students
    for (const student of students) {
      // Extract score and age from each student
      const { Score, Age } = student;
  
      // Update score-related variables
      totalScore += Score;
      if (Score > highestScore) {
        highestScore = Score;
      }
      if (Score < lowestScore) {
        lowestScore = Score;
      }
  
      // Update age-related variables
      totalAge += new Date(Age).getTime();
      if (Age > highestAge) {
        highestAge = new Date(Age);
      }
      if (Age < lowestAge) {
        lowestAge = new Date(Age);
      }
    }
  
    // Calculate average score and average age
    const averageScore = students.length > 0 ? totalScore / students.length : 0;
    const averageAge = students.length > 0 ? new Date(totalAge / students.length) : null;
  
    // Create and return the result object
    const result = {
      Score: {
        Highest: highestScore,
        Lowest: lowestScore,
        Average: averageScore,
      },
      Age: {
        Highest: highestAge,
        Lowest: lowestAge,
        Average: averageAge,
      },
    };
  
    return result;
  }
  
  // Example usage:
  const students = [
    {
      Name: "John",
      Email: "john@example.com",
      Age: "1995-01-15",
      Score: 85,
    },
    {
      Name: "Alice",
      Email: "alice@example.com",
      Age: "1997-03-20",
      Score: 92,
    },
    // Add more student objects here
  ];
  
  const studentData = calculateStudentData(students);
  console.log(studentData);
  