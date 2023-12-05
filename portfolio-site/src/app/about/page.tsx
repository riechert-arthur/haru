import Image from 'next/image'
import CourseList from '../../components/CourseList'
import { montserrat } from '../../components/Fonts'

/**
 * TODO:
 * - Correct image on page.
 * - Design and implement skills section.
 * - Create external text file for storing course information.
 *
 * @author Arthur Riechert
 * @version 2.0.0
 */

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
                <CourseList />
            </div>
        </main>
    )
}