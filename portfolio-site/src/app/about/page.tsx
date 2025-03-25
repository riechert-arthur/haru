'use client'

import CourseList from '../../components/CourseList'
import SkillList from '../../components/SkillList'
import { useState } from 'react'

const aboutHeader: string = "Skills"
const aboutHeaderAlt: string = "Education"

const courseworkSubheader: string = "Georgia Institute of Technology"
const courseworkSubheader2: string = "Computer Science"
const courselistHeader: string = "Coursework"

function AboutHeader({ displaySkills, setDisplay }) {
    return (
        <div className='flex flex-wrap md:flex-row items-end mb-7'>
            <h1 className='text-5xl md:text-6xl mr-7'>
                { displaySkills ? aboutHeader : aboutHeaderAlt }
            </h1>
            <button
                className='mb-1 text-3xl text-gray-400'
                onClick={() => setDisplay(!displaySkills)}>
            <u>{ displaySkills ? 'Education' : 'Skills' }</u>&gt;
            </button>
        </div>
    )
}

function CourseworkHero() {
    return (
        <>
            <h2 className='mb-3'>
                <span className='text-4xl text-yellow-400'>{ courseworkSubheader }</span>
            </h2>
            <h3 className='text-xl mb-12'>{ courseworkSubheader2 }</h3>
            <h2 className='text-4xl md:text-5xl'>{ courselistHeader }</h2>
        </>
    )
}

function Coursework() {
    return (
        <>
            <CourseworkHero />
            <CourseList />
        </>
    )
}

export default function About() {

    const [displaySkills, setDisplay] = useState(false)

    return (
        <main className='flex flex-strat justify-center md:max-lg:px-16 md:justify-left px-8 md:px-48 min-h-screen font-mono pb-0 md:pb-24'>
            <div className='lg:max-w-large-screens py-12 md:py-48 w-full'>
                  <AboutHeader displaySkills={ displaySkills } setDisplay={ setDisplay } />
                  { displayContent(displaySkills) }
            </div>
        </main>
    )
}

function displayContent(displaySkills: boolean) {
    if (displaySkills) {
        return <SkillList />
    }
    else {
        return <Coursework />
    }
} 
