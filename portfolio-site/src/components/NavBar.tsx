'use client'

import { montserrat } from './Fonts'
import { useRouter } from 'next/navigation'
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

    return (
        <nav className='flex items-center justify-between px-11 py-4 bg-slate-900/60'>
            <Link href='/' className={`text-2xl tracking-wide ${montserrat.className} hover:text-gray-400 hover:scale-105`}>Arthur Riechert</Link>
            <div className='flex items-center justify-between'>
                {
                    Object.keys(navigationLinks).map((key: string, index: number) => (
                        <Link key={ index } className={`mr-7 text-xl tracking-wide hover:text-gray-400 ${montserrat.className} font-light`} href={navigationLinks[key]}>{key}</Link>
                    ))
                }
                <Button
                    text='Resumè'
                    extraClassNames={`px-4 py-2 rounded-lg text-xl ${montserrat.className}`}
                    functionToCall={() => router.push(resumePath)}
                />
            </div>
        </nav>
    )
}