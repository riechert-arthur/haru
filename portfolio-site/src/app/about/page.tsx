import Image from 'next/image'
import { montserrat } from '../../components/Fonts'

/**
 * TODO:
 * - Correct display of grades.
 * - Move some code to separate component class.
 * - Correct image on page.
 * - Design and implement skills section
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

/* Information used to display information about classes taken in university. */
enum Grade {
    A = 'text-green-500',
    B = 'text-teal-500',
    C = 'hidden',
    D = 'hidden',
    E = 'hidden',
    F = 'hidden'
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
        LetterGrade: 'A',
        Description: [
            `Developed proficiency in Java, mastering the following object-oriented principles:
            inheritance, polymorphism, abstract classes, interfaces, generics, and single responsibility principle.`,

            `Applied object-oriented principles to data structures and algorithms such as merge sort, linked lists, and trees.`,

            `Used asymptotics to analyze code implementations.`,
        ],
    },
    {
        Name: 'Introduction to Object-Oriented Programming',
        CompletionDate: 'Fall 2023',
        LetterGrade: 'B',
        Description: [
            `Developed proficiency in Java, mastering the following object-oriented principles:
            inheritance, polymorphism, abstract classes, interfaces, generics, and single responsibility principle.`,

            `Applied object-oriented principles to data structures and algorithms such as merge sort, linked lists, and trees.`,

            `Used asymptotics to analyze code implementations.`,
        ],
    },
    {
        Name: 'Introduction to Object-Oriented Programming',
        CompletionDate: 'Fall 2023',
        LetterGrade: 'C',
        Description: [
            `Developed proficiency in Java, mastering the following object-oriented principles:
            inheritance, polymorphism, abstract classes, interfaces, generics, and single responsibility principle.`,

            `Applied object-oriented principles to data structures and algorithms such as merge sort, linked lists, and trees.`,

            `Used asymptotics to analyze code implementations.`,
        ],
    }
]

export default function About() {
    return (
        <main className='flex flex-strat min-h-screen font-mono'>
            <div className='py-48 mr-40'>
                <div className='flex items-end mb-7'>
                    <h1 className='text-6xl mr-7'>Eduation</h1>
                    <button className='text-3xl text-gray-400'><u>Skills</u>&gt;</button>
                </div>
                <h2 className='mb-3'><span className='text-4xl text-yellow-400'>Georgia Institute of Technology</span></h2>
                <h3 className='text-xl mb-12'>Computer Science</h3>
                <h2 className='text-5xl'>Coursework</h2>
                <div className={`pl-8 pt-1 mt-7 border-2 border-y-transparent border-r-transparent border-l-white font-light ${montserrat.className}`}>
                    {
                        courses.map((course) => (
                            <div className='mb-14'>
                                <h3 className='mb-2 text-4xl'>{ course.Name }</h3>
                                <div className='flex pl-2 mb-7'>
                                    <text className='text-2xl'>{ course.CompletionDate }</text>

                                    {/**
                                     * TODO
                                     * - Correct display of letter grade colors.
                                     * - Fix enum key to string.
                                     * */}
                                    <text className='ml-4 text-2xl'>Grade: <span className={ Grade[course.LetterGrade] }>{ Grade[course.LetterGrade] }</span></text>

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
            </div>
            <div className='w-2/5 h-full overflow-hidden'>
                <Image 
                    src='/georgia_tech.jpeg' 
                    width='1200'
                    height='800'
                    alt='The Klaus Advanced Computing Building at Georgia Tech'
                />
            </div>
        </main>
    )
}