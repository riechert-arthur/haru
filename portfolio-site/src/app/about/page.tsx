'use client'

import Image from 'next/image'
import CourseList from '../../components/CourseList'
import SkillList from '../../components/SkillList'
import { montserrat } from '../../components/Fonts'
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
        <main className='flex flex-strat min-h-screen font-mono'>
            <div className='py-48 w-full'>
                <div className='flex items-end mb-7'>
                    <h1 className='text-6xl mr-7'>{displaySkills ? 'Skills' : 'Eduation'}</h1>
                    <button className='text-3xl text-gray-400' onClick={() => setDisplay(!displaySkills)}><u>{displaySkills ? 'Education' : 'Skills'}</u>&gt;</button>
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
                <h2 className='mb-3'><span className='text-4xl text-yellow-400'>Georgia Institute of Technology</span></h2>
                <h3 className='text-xl mb-12'>Computer Science</h3>
                <h2 className='text-5xl'>Coursework</h2>
                <CourseList />
            </>
        )
    }
} 