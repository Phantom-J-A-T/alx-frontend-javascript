// task_1/js/main.ts

// Define Teacher interface
interface Teacher {
    readonly firstName: string; // can only be set at initialization
    readonly lastName: string;  // can only be set at initialization
    fullTimeEmployee: boolean;  // always defined
    yearsOfExperience?: number; // optional
    location: string;           // always defined
    [propName: string]: any;    // allow any additional properties
  }
  
  // Example usage
  const teacher1: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    location: "Lagos",
  };
  
  const teacher2: Teacher = {
    firstName: "Mark",
    lastName: "Taylor",
    fullTimeEmployee: true,
    location: "Abuja",
    yearsOfExperience: 5,
  };
  
  const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false, // extra attribute not explicitly defined
  };
  
  console.log(teacher1);
  console.log(teacher2);
  console.log(teacher3);
  