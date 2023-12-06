import { montserrat } from './Fonts'
import Image from 'next/image'
import { useState } from 'react'
/**
 * TODO:
 * - Correct use of state to expand boxes.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function SkillList() {

    interface Details {
        Software?: string[]
        Libraries?: string[]
        Frameworks?: string[]
    }

    interface SkillSelection {
        Name: string
        IconPath: string
        Details: Details
        Expanded: boolean
    }

    const skillDetails: SkillSelection[] = [
        {
            Name: 'Python',
            IconPath: '/python.svg',
            Details: {
                Libraries: ['Numpy', 'Pandas', 'Beautiful Soup', 'Streamlit'],
                Frameworks: ['Flask', 'Django', 'FastAPI']
            },
            Expanded: false
        },
        {
            Name: 'Typescript/Javascript',
            IconPath: '/typescript.svg',
            Details: {
                Frameworks: ['React', 'Next', 'Node']
            },
            Expanded: false
        },
        {
            Name: 'HTML/CSS',
            IconPath: 'html-5.svg',
            Details: {
                Libraries: ['TailwindCSS']
            },
            Expanded: false
        },
        {
            Name: 'Java',
            IconPath: '/java.svg',
            Details: {
                Frameworks: ['Spring']
            },
            Expanded: false
        },
        {
            Name: 'Developer Tools',
            IconPath: '/merge.svg',
            Details: {
                Software: ['Git & Github']
            },
            Expanded: false
        }
    ]

    const [skills, setSkills] = useState(skillDetails)

    return (
        <div className='w-full'>
            <text className={`${montserrat.className} text-xl tracking-wider font-light`}><i>Click each skill for more detail.</i></text>
            <div className='mt-7 grid grid-cols-2 gap-6 w-full'>
                {
                    skills.map((skill: SkillSelection, index: number) => (
                        <div 
                            className='relative p-11 h-21 items-center justify-between bg-slate-700 text-4xl font-mono rounded-xl hover:cursor-pointer hover:scale-105'
                            onClick={() => {
                                skills[index].Expanded = !skills[index].Expanded
                                setSkills([...skills])
                                console.log(skill.Expanded)
                            }}
                        >
                            <div className={`flex overflow-x-scroll ${skill.Expanded ? '' : 'h-20'}`}>
                                <Image width='75' height='75' alt={`${skill.Name} icon.`} src={skill.IconPath} />
                                <h2 className='ml-6 leading-loose translate-y-1'>{ skill.Name }</h2>
                            </div>
                            <div className={`${skill.Expanded ? '' : 'hidden'}`}>
                                {skill.Details.Software?.map((software) => {return <text>{ software }</text>})}
                                {skill.Details.Libraries?.map((library) => {return <text>{ library }</text>})}
                                {skill.Details.Frameworks?.map((framework) => {return <text>{ framework }</text>})}
                            </div>
                            <button 
                                className='absolute right-1 bottom-1 -translate-x-1 -translate-y-1'
                                onClick={() => {
                                    skills[index].Expanded = !skills[index].Expanded
                                    setSkills([...skills])
                                    console.log(skill.Expanded)
                                }}
                            >
                                <Image width='15' height='15' alt='Expand' src='/arrow-button.svg'/>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}