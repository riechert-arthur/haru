'use client'

import CourseList from '../../components/CourseList'
import SkillList from '../../components/SkillList'
import { useState } from 'react'

/**
 * TODO:
 * - Create external text file for storing course information.
 *
 * @author Arthur Riechert
 * @version 2.0.0
 */

export default function About() {

    const [displaySkills, setDisplay] = useState(false)

    return (
        <main className='flex flex-strat justify-center md:max-lg:px-16 md:justify-left px-8 md:px-48 min-h-screen font-mono pb-0 md:pb-24'>
            <div className='lg:max-w-large-screens py-12 md:py-48 w-full'>
                <div className='flex flex-wrap md:flex-row items-end mb-7'>
                    <h1 className='text-5xl md:text-6xl mr-7'>{displaySkills ? 'Skills' : 'Education'}</h1>
                    <button className='mb-1 text-3xl text-gray-400' onClick={() => setDisplay(!displaySkills)}><u>{displaySkills ? 'Education' : 'Skills'}</u>&gt;</button>
                </div>
                {displayContent(displaySkills)}
            </div>
        </main>
    )
}

function displayContent(displaySkills: boolean) {
    if (displaySkills) {
        return <SkillList />
    }
    else {
        return (
            <>
                <h2 className='mb-3'>
                    <span className='text-4xl text-yellow-400'>
                        Georgia Institute of Technology
                    </span>
                </h2>
                <h3 className='text-xl mb-12'>Computer Science</h3>
                <h2 className='text-4xl md:text-5xl'>Coursework</h2>
                <CourseList />
            </>
        )
    }
} 