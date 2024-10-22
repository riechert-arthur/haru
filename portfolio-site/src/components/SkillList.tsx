import { montserrat } from './Fonts'
import Image from 'next/image'
import { useState } from 'react'
/**
 * @author Arthur Riechert
 * @version 1.0.1
 */

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
            Libraries: ['Numpy', 'Pandas', 'Beautiful Soup', 'Streamlit', 'Scrapy'],
            Frameworks: ['Flask', 'Django', 'FastAPI']
        },
        Expanded: false
    },
    {
        Name: 'Typescript/Javascript',
        IconPath: '/typescript.svg',
        Details: {
            Frameworks: ['React', 'Next'],
            Software: ['Node']
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
            Frameworks: ['Android Studio'],
            Software: ['Maven', 'Gradle']
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
    },
    {
        Name: 'C',
        IconPath: 'letter-c.svg',
        Details: {},
        Expanded: false
    },
    {
        Name: 'Assembly',
        IconPath: 'asm.svg',
        Details: {},
        Expanded: false
    },
    {
        Name: 'Methodologies',
        IconPath: 'agile.svg',
        Details: {
            Frameworks: ['Agile', 'SCRUM', 'Design Patterns', 'Requirements Engineering']
        },
        Expanded: false
    }
]

export default function SkillList() {

    const [skills, setSkills] = useState(skillDetails)

    return (
        <div className='w-full'>
            <text className={`${montserrat.className} text-xl tracking-wider font-light`}><i>Click each skill for more detail.</i></text>
            <div className='mt-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-h-fit text-white'>
                {
                    skills.map((skill: SkillSelection, index: number) => (
                        <div key={ index }>
                            <div 
                                className={`relative p-5 md:p-11 max-h-min items-center justify-between dark:bg-slate-700 bg-transparent border-sky-500 border-2 dark:border-0 text-black dark:text-white text-4xl font-mono rounded-xl hover:cursor-pointer hover:scale-105 dark:shadow-xl`}
                                onClick={() => {
                                    skills[index].Expanded = !skills[index].Expanded
                                    setSkills([...skills])
                                    console.log(skill.Expanded)
                                }}
                            >
                                <div className='flex overflow-x-scroll overflow-y-hidden'>
                                    <Image
                                        className='hidden md:inline'
                                        alt={`${skill.Name} icon.`}
                                        src={skill.IconPath}
                                        height='75'
                                        width='75'
                                    />
                                    <Image
                                        className='md:hidden'
                                        alt={`${skill.Name} icon.`}
                                        src={skill.IconPath}
                                        height='50'
                                        width='50'
                                    />
                                    <h2 className='ml-6 leading-loose translate-y-1'>{ skill.Name }</h2>
                                </div>
                                <div className={`mt-6 ${montserrat.className} ${skill.Expanded ? '' : 'hidden'}`}>
                                    <text className={`text-3xl ${skill.Details.Software ? '' : 'hidden'}`}>Software</text>
                                    <ul className='pl-2 ml-1 border-l'>
                                        {skill.Details.Software?.map((software: string, i: number) => {
                                            return <li key={ i } className='text-2xl font-light'>{ software }</li>
                                        })}
                                    </ul>
                                    <text className={`text-3xl ${skill.Details.Libraries ? '' : 'hidden'}`}>Libraries</text>
                                    <ul className='pl-2 ml-1 border-l'>
                                        {skill.Details.Libraries?.map((library: string, i: number) => {
                                            return <li key={ i } className='text-2xl font-light'>{ library }</li>
                                        })}
                                    </ul>
                                    <text className={`text-3xl ${skill.Details.Frameworks ? '' : 'hidden'}`}>Frameworks</text>
                                    <ul className='pl-2 ml-1 border-l'>
                                        {skill.Details.Frameworks?.map((framework: string, i: number) => {
                                            return <li key={ i } className='text-2xl font-light'>{ framework }</li>
                                        })}
                                    </ul>
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
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
