export type Course = {
  name: string;
  grade: string;
  credits: number;
};

export const courses: Course[] = [
  { name: "Data Structures & Algorithms", grade: "A+", credits: 3 },
  { name: "Computer Organization", grade: "A", credits: 4 },
  { name: "Database Systems", grade: "A+", credits: 3 },
  { name: "Systems and Networks", grade: "A", credits: 4 },
  { name: "Design and Analysis of Algorithms", grade: "A+", credits: 3 },
  { name: "Object-Oriented Design", grade: "A", credits: 3 },
];
