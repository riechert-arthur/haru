'use client'

import { montserrat } from './Fonts'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Button from '../components/Button'

/**
 * @author Arthur Riechert
 * @version 1.0.1
 */

const resumePath: string = '/resume'

    interface NavigationLinks {
        [key: string]: string;
    }
    
    const navigationLinks: NavigationLinks = {
        About: "/about",
        Projects: "/projects",
        Experience: "/experience",
        Contact: "/contact",
    }

export default function NavBar() {

    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav 
            className={`overflow-hidden flex justify-between
                w-full px-3 md:px-11 py-4 dark:bg-slate-900/60
                bg-transparent text-black dark:text-white`
            }>
            <Link
                className={ `flex items-center justify-center text-2xl tracking-wide
                    ${montserrat.className} hover:text-gray-400 hover:scale-105`}
                href='/'
            >
                <h1 className='text-left'>Arthur Riechert</h1>
            </Link>
            <div className='flex justify-end md:items-center md:justify-between w-1/2 md:w-2/5 md:min-w-nav md:max-w-nav'>
                {
                    Object.keys(navigationLinks).map((key: string, index: number) => (
                        <Link
                            key={ index }
                            className={`hidden md:inline text-xl tracking-wide hover:text-gray-400
                                ${montserrat.className} font-light`}
                            href={navigationLinks[key]}
                        >
                            { key }
                        </Link>
                    ))
                }
                <button
                    className='md:hidden mr-3 w-10 w-10 bg-menu-icon bg-cover'
                    onClick={() => setMenuOpen(!menuOpen)}
                ></button>
                {menuOpen && (
                    <div className='p-7 rounded-xl md:hidden absolute top-20 bg-slate-900'>
                        <div className='flex flex-col'>
                            {Object.keys(navigationLinks).map((key, index) => (
                                <Link
                                key={index}
                                className={`md:inline text-xl tracking-wide hover:text-gray-400
                                            ${montserrat.className} font-light`}
                                href={navigationLinks[key]}
                                >
                                {key}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                <Button
                    text='Resumè'
                    extraClassNames={`px-4 py-2 rounded-lg text-xl ${montserrat.className}`}
                    functionToCall={() => router.push(resumePath)}
                />
            </div>
        </nav>
    )
}
