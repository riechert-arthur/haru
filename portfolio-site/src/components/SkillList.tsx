import { montserrat } from './Fonts'
import Image from 'next/image'
/**
 * TODO:
 * - Correct formatting on each skill.
 * - Add ability to expand boxes for more details.
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
    }

    const skillDetails: SkillSelection[] = [
        {
            Name: 'Python',
            IconPath: '/python.svg',
            Details: {
                Libraries: ['Numpy', 'Pandas', 'Beautiful Soup', 'Streamlit'],
                Frameworks: ['Flask', 'Django', 'FastAPI']
            },
        },
        {
            Name: 'Typescript/Javascript',
            IconPath: '/typescript.svg',
            Details: {
                Frameworks: ['React', 'Next', 'Node']
            },
        },
        {
            Name: 'HTML/CSS',
            IconPath: 'html-5.svg',
            Details: {
                Libraries: ['TailwindCSS']
            }
        },
        {
            Name: 'Java',
            IconPath: '/java.svg',
            Details: {
                Frameworks: ['Spring']
            }
        },
        {
            Name: 'Developer Tools',
            IconPath: '/merge.svg',
            Details: {
                Software: ['Git & Github']
            }
        }
    ]

    return (
        <div className='w-full'>
            <text className={`${montserrat.className} text-xl tracking-wider font-light`}><i>Click each skill for more detail.</i></text>
            <div className='mt-7 grid grid-cols-2 gap-6 w-full'>
                {
                    skillDetails.map((skill: SkillSelection) => (
                        <div className='relative p-11 items-center justify-between bg-slate-700 text-4xl font-mono rounded-xl hover:cursor-pointer hover:scale-105'>
                            <div className='flex overflow-x-scroll'>
                                <Image width='75' height='75' alt={`${skill.Name} icon.`} src={skill.IconPath} />
                                <h2 className='ml-6 leading-loose'>{ skill.Name }</h2>
                            </div>
                            <button className='absolute right-1 bottom-1 -translate-x-1 -translate-y-1'>
                                <Image width='15' height='15' alt='Expand' src='/arrow-button.svg'/>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}