import { montserrat } from "./Fonts"
import { useState } from "react"
import Image from "next/image"

interface Grade {
  [key: string]: string
}

const grade: Grade = {
  A: "text-green-500",
  B: "text-teal-500",
  C: "hidden",
  D: "hidden",
  E: "hidden",
  F: "hidden",
  " ": "hidden",
}

interface Course {
  Name: string
  CompletionDate: string
  LetterGrade: string
  Description: string[]
}

const courses: Course[] = [
  {
    Name: "Introduction to Object-Oriented Programming",
    CompletionDate: "Fall 2023",
    LetterGrade: " ",
    Description: [
      `Developed proficiency in Java, mastering the following object-oriented principles:
            inheritance, polymorphism, abstract classes, interfaces, generics, and single responsibility principle.`,

      `Applied object-oriented principles to data structures and algorithms such as merge sort, linked lists, and trees.`,

      `Used asymptotics to analyze code implementations.`,
    ],
  },
  {
    Name: "Data Structures and Algorithms for Applications",
    CompletionDate: "Spring 2024",
    LetterGrade: " ",
    Description: [
      `Developed understanding of fundamental data structures and algorithms in computing such as
            BSTs, Heap, Graph Algorithms, Pattern Matching, AVLs, Hashmaps, and more.`,

      `Analyzed space and time complexity of algorithms using asymptotics.`,

      "Implemented data structures and algorithms in Java.",
    ],
  },
  {
    Name: "Computer Organization",
    CompletionDate: "Spring 2024",
    LetterGrade: " ",
    Description: [
      `Covered bits, data representations, logic circuits, and the von Neumann model.`,

      `Focused on processor components, the LC-3 datapath, and assembly language basics.`,

      `Practiced C programming, including pointers and memory, and introduced embedded systems.`,
    ],
  },
  {
    Name: "Object-Oriented Design",
    CompletionDate: "Spring 2024",
    LetterGrade: " ",
    Description: [
      "Developed semester-long projects focusing on collaborating with a large team to implement agile and scrum methodologies and Git version control",

      "Focused on UML, class diagramming, and design principles.",

      "Utilized design patterns and code review techniques in projects",
    ],
  },
]

export default function CourseList() {
  const [displayDescription, setDisplayDescription] = useState(
    new Array(courses.length).fill(false)
  )

  return (
    <div
      className={`md:pl-8 pr-10 pt-1 mt-7 border-2 border-y-transparent border-r-transparent border-l-transparent md:border-l-white font-light ${montserrat.className}`}
    >
      {courses.map((course: Course, index: number) => (
        <div key={index} className="mt-2 mb-7">
          <h3 className="mb-2 text-3xl md:text-4xl">{course.Name}</h3>
          <div className="flex md:pl-2">
            <text className="text-2xl">{course.CompletionDate}</text>
            <text
              className={`ml-4 text-2xl ${grade[course.LetterGrade] === "hidden" ? "hidden" : ""}`}
            >
              Grade:{" "}
              <span className={grade[course.LetterGrade]}>
                {course.LetterGrade}
              </span>
            </text>
          </div>
          <button
            onClick={() =>
              setDisplayDescription((prevDisplayDescription) => {
                const newDisplayDescription = [...prevDisplayDescription]
                newDisplayDescription[index] = !newDisplayDescription[index]
                return newDisplayDescription
              })
            }
            className="md:hidden flex items-center"
          >
            <text className="text-xl">
              {displayDescription[index] ? "Collapse" : "Expand"}
            </text>
            <Image
              src={`${displayDescription[index] ? "/up-arrow.svg" : "/down-arrow.svg"}`}
              alt="Down arrow"
              height="20"
              width="20"
            />
          </button>
          <ul
            key={course.Name}
            className={`md:hidden ${displayDescription[index] ? "" : "hidden"} ml-6 text-xl list-disc tracking-wider`}
          >
            {course.Description.map((item: string, i: number) => (
              <li key={i} className="mb-4">
                {item}
              </li>
            ))}
          </ul>
          <ul
            key={course.Name}
            className={`hidden md:inline ml-6 text-xl list-disc tracking-wider`}
          >
            {course.Description.map((item: string, i: number) => (
              <li key={i} className="ml-8 mb-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
