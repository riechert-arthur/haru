'use client'

import { montserrat } from '../../components/Fonts'
import { useRouter } from 'next/navigation'
import Button from '../../components/Button'
import Link from 'next/link'
import Image from 'next/image'

/**
 * A page to store projects, so visitors can interact with them.
 *
 * TODO:
 * - Add Tailwind formatting.
 * - Add separate pages for each project.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

interface Project {
    Title: string
    Description: string
    ReadMoreURL: string
    ViewWebsiteURL: string
}

export default function Projects() {

    const projects: Project[] = [
        {
            Title: 'Portfolio Site',
            Description: 'A centralized website to house my qualifications and showcase my projects to potential clients and employers.',
            ReadMoreURL: '',
            ViewWebsiteURL: '',
        },
        {
            Title: 'Abstract Data Type Library',
            Description: 'A custom-built, idiomatic Java library for creating a variety of abstract data types such as linked lists and hash maps to use with sorting algorithms.',
            ReadMoreURL: '',
            ViewWebsiteURL: '',
        },
        {
            Title: 'Portfolio Site',
            Description: 'A centralized website to house my qualifications and showcase my projects to potential clients and employers.',
            ReadMoreURL: '',
            ViewWebsiteURL: '',
        },
        {
            Title: 'Abstract Data Type Library',
            Description: 'A custom-built, idiomatic Java library for creating a variety of abstract data types such as linked lists and hash maps to use with sorting algorithms.',
            ReadMoreURL: '',
            ViewWebsiteURL: '',
        },
    ]

    const router = useRouter()

    return (
        <div>
            <h1>Projects</h1>
            <div className='flex'>
                <text>Find more <Link href='https://github.com/riechert-arthur'><u>here</u></Link></text>
                <Image src='github.svg' width='24' height='24' alt='Github icon'></Image>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    projects.map(project => (
                        <div className={`${montserrat.className}`}>

                            {/* Add Image up here. */}

                            <h2>{ project.Title }</h2>
                            <p>{ project.Description }</p>
                            <div className='flex'>
                                <Button
                                    text='Read More'
                                    extraClassNames='px-4 py-2 rounded-lg text-xl'
                                    functionToCall={() => router.push(project.ReadMoreURL)}
                                />
                                <Button
                                    text='View Website'
                                    extraClassNames='px-4 py-2 rounded-lg text-xl'
                                    functionToCall={() => router.push(project.ViewWebsiteURL)}
                                >
                                    <Image src='full-screen.svg' width='24' height='24' alt='Github icon'></Image>
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}