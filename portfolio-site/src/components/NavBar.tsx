'use client'

import { montserrat } from './Fonts'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import Button from '../components/Button'

const resumePath: string = '/resume'
const resumeButtonText: string ="Resumè"

const mainText: string = "Arthur Riechert"

interface NavigationLinks {
    [key: string]: string;
}

const navigationLinks: NavigationLinks = {
    About: "/about",
    Projects: "/projects",
    Experience: "/experience",
    Contact: "/contact",
}

function LogoLink() {
    return (
        <Link
            className={ `flex items-center justify-center text-2xl tracking-wide
                ${ montserrat.className } hover:text-gray-400 hover:scale-105`}
            href='/'
        >
            <h1 className='text-left'>{ mainText }</h1>
        </Link>
    )
}

function HamburgerButton({ menuOpen, setMenuOpen }) {
    return (
        <button
            className='md:hidden mr-3 w-10 w-10 bg-menu-icon bg-cover'
            onClick={() => setMenuOpen(!menuOpen)}
        ></button>
    ) 
}

function HamburgerMenu({ menuOpen, setMenuOpen }) {
    return (
        <>
            {menuOpen && (
                <div className='p-7 rounded-xl md:hidden absolute top-20 bg-slate-900'>
                    <div className='flex flex-col'>
                        {Object.keys(navigationLinks).map((key, i) => (
                            <Link
                                key={ i }
                                className={`md:inline text-xl tracking-wide hover:text-gray-400
                                            ${ montserrat.className } font-light`}
                                href={ navigationLinks[key] }
                            >
                                { key }
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

function DefaultNavLinks() {
    return (
        <>
            {
                Object.keys(navigationLinks).map((key: string, i: number) => (
                    <Link
                        key={ i }
                        className={`hidden md:inline text-xl tracking-wide hover:text-gray-400
                            ${ montserrat.className } font-light`}
                        href={ navigationLinks[key] }
                    >
                        { key }
                    </Link>
                ))
            }
        </>
    )
}

function ResumeButton() {
    
    const router = useRouter()

    return (
        <Button
            text={ resumeButtonText }
            extraClassNames={`px-4 py-2 rounded-lg text-xl ${ montserrat.className }`}
            functionToCall={() => router.push(resumePath)}
        />
    )    
}

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav 
            className={`overflow-hidden flex justify-between
                w-full px-3 md:px-11 py-4 dark:bg-slate-900/60
                bg-transparent text-black dark:text-white`
            }>
            <LogoLink />
            <div className='flex justify-end md:items-center md:justify-between w-1/2 md:w-2/5 md:min-w-nav md:max-w-nav'>
                <DefaultNavLinks />                
                <HamburgerButton menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } /> 
                <HamburgerMenu menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } /> 
                <ResumeButton /> 
            </div>
        </nav>
    )
}
