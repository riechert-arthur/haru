'use client'

import { useRouter } from 'next/navigation'
import { montserrat } from './Fonts'
import Button from './Button'
import Image from 'next/image'

/**
 * TODO List:
 * - Add ability to click images.
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

export default function ProjectList({}) {

    const router = useRouter()

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

    return (
        <div className='mt-10 grid grid-cols-2 gap-7'>
            {
                projects.map(project => (
                    <div className={`${montserrat.className}`}>

                        <div className='w-full h-96 overflow-hidden rounded-2xl'>
                            <img src='placeholder.jpg' alt={`${project.Title} thumbnail.`} className='' />
                        </div>

                        <h2 className={`mt-6 ${montserrat.className} text-4xl`}>{ project.Title }</h2>
                        <p className='mt-2 font-light text-xl'>{ project.Description }</p>
                        <div className='flex mt-6 mb-2'>
                            <Button
                                text='Read More'
                                extraClassNames='px-4 py-2 rounded-lg text-xl'
                                functionToCall={() => router.push(project.ReadMoreURL)}
                            />
                            <Button
                                text='View Website'
                                extraClassNames='ml-5 px-4 py-2 rounded-lg text-xl'
                                functionToCall={() => router.push(project.ViewWebsiteURL)}
                            >
                                <Image src='full-screen.svg' width='24' height='24' alt='Github icon'></Image>
                            </Button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}