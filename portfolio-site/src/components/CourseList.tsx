import { montserrat } from './Fonts'

/**
 * Displays a list of courses from an external text file.
 *
 * @author Arthur Riechert
 * @version 1.0.1
 */

/* Information used to display information about classes taken in university. */
interface Grade {
    [key: string]: string
}

const grade: Grade = {
    'A': 'text-green-500',
    'B': 'text-teal-500',
    'C': 'hidden',
    'D': 'hidden',
    'E': 'hidden',
    'F': 'hidden',
    ' ': 'hidden',
}

interface Course {
    Name: string,
    CompletionDate: string,
    LetterGrade: string,
    Description: string[],
}

const courses: Course[] = [
    {
        Name: 'Introduction to Object-Oriented Programming',
        CompletionDate: 'Fall 2023',
        LetterGrade: ' ',
        Description: [
            `Developed proficiency in Java, mastering the following object-oriented principles:
            inheritance, polymorphism, abstract classes, interfaces, generics, and single responsibility principle.`,

            `Applied object-oriented principles to data structures and algorithms such as merge sort, linked lists, and trees.`,

            `Used asymptotics to analyze code implementations.`,
        ],
    },
    {
        Name: 'Data Structures and Algorithms for Applications',
        CompletionDate: 'In-Progress',
        LetterGrade: ' ',
        Description: [
            `Developed understanding of fundamental data structures and algorithms in computing such as
            Binary Search, Trees, Heap, and more.`,

            `Analyzed space and time complexity of algorithms using asymptotics.`,

            'Implemented data structures and algorithms in Java.'
        ],
    },
    {
        Name: 'Computer Organization',
        CompletionDate: 'In-Progress',
        LetterGrade: ' ',
        Description: [
            `Covered bits, integer representation, arithmetic, logic circuits, and the von Neumann model.`,

            `Focused on processor components, the LC-3 datapath, and assembly language basics.`,

            `Practiced C programming, including pointers and memory, and introduced embedded systems.`,
        ],
    },
    {
        Name: 'Object-Oriented Design',
        CompletionDate: 'In-Progress',
        LetterGrade: ' ',
        Description: [
            'Covered the Unified Process, testing, and Test-Driven Development.',
            
            'Focused on UML, class diagramming, and design principles.',

            'Utilized design patterns and code review techniques in projects',
        ]
    }
]

export default function CourseList() {
    return (
        <div className={`pl-8 pr-10 pt-1 mt-7 border-2 border-y-transparent border-r-transparent border-l-white font-light ${montserrat.className}`}>
            {
                courses.map((course: Course, index: number) => (
                    <div key={ index } className='mt-2 mb-7'>
                        <h3 className='mb-2 text-4xl'>{ course.Name }</h3>
                        <div className='flex pl-2 mb-7'>
                            <text className='text-2xl'>{ course.CompletionDate }</text>

                            {/* Grades will be hidden if below a C; otherwise, they will display the color assigned to them.*/}
                            <text 
                                className={`ml-4 text-2xl ${grade[course.LetterGrade] === 'hidden' ? 'hidden' : ''}`}>
                                Grade: <span className={ grade[course.LetterGrade] }>{ course.LetterGrade }</span>
                            </text>

                        </div>
                        <ul className='ml-6 text-xl list-disc tracking-wider'>
                            {
                                course.Description.map((item) => (
                                    <li className='mb-4'>{ item }</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}