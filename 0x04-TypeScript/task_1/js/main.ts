// task_1/js/main.ts

// Define Teacher interface
interface Teacher {
  readonly firstName: string; // only set at initialization
  readonly lastName: string;  // only set at initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined
  [propName: string]: any;    // allow additional properties
}

// Define Directors interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Define function type interface for printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using destructured params
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  "return `${firstName}. ${lastName}`";
}


// Interface for StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for StudentClass methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
//class StudentClass {}
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Michael", "Jordan");

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
  contract: false,
};

// Example Director object
const director1: Director = {
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
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // -> J. Doe
console.log(student.displayName()); // Michael
console.log(student.workOnHomework()); // Currently working
