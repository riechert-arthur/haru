import { montserrat } from './Fonts'
import Image from 'next/image'
/**
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
            IconPath: '',
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
        <div className='min-w-full'>
            <text className={`${montserrat.className} text-xl tracking-wider font-light`}><i>Click each skill for more detail.</i></text>
            <div className='mt-7 grid grid-cols-2 gap-6 w-full'>
                {
                    skillDetails.map((skill: SkillSelection) => (
                        <div className='p-11 items-center justify-between bg-slate-700 text-4xl font-mono rounded-xl'>
                            <div className='flex'>
                                <Image width='75' height='75' alt={`${skill.Name} icon.`} src={skill.IconPath} />
                                <h2 className='ml-10 text-center'>{ skill.Name }</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}