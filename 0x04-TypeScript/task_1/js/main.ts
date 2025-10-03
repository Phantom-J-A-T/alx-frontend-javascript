// task_1/js/main.ts

// Define Teacher interface
interface Teacher {
  readonly firstName: string; // can only be set at initialization
  readonly lastName: string;  // can only be set at initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined
  [propName: string]: any;    // allow additional properties
}

// Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Teacher objects
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
  contract: false, // extra property allowed
};

// Example Director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Logs
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
