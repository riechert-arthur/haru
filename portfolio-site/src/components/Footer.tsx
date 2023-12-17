'use client'

import Image from 'next/image'
import Link from 'next/link'
import { montserrat } from './Fonts'

/**
 * TODO:
 * - Add dark mode toggle button
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

interface SocialLink {
    name: string
    icon: string
    url: string
}

interface InternalLink {
    name: string
    route: string
}

const socials: SocialLink[] = [
    { name: 'Twitter', icon: '/twitter.svg', url: 'https://twitter.com/ArtieRiechert' },
    { name: 'Github', icon: '/github-sign.svg', url: 'https://github.com/riechert-arthur' },
    { name: 'Linkedin', icon: '/linkedin.svg', url: 'https://www.linkedin.com/in/arthur-riechert-4b1414224/' },
]

const internalLinks: InternalLink[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Projects', route: '/projects' },
    { name: 'Experience', route: '/experience' },
    { name: 'Contact', route: '/contact' },
    { name: 'Resumè', route: '/resume'}
]

export default function Footer() {

    return (
        <footer className="-mt-60 w-full">
            <img className='w-full object-cover' src='/footer-waves.svg'></img>
            <div className='py-2 bg-sky-400'>
                <div className='flex w-full justify-center'>
                    {
                        socials.map(social => (
                            <Link href={ social.url } target='_blank'>
                                <button>
                                    <Image className='ml-6' src={ social.icon } width='40' height='40' alt={`${social.name} logo`} />
                                </button>
                            </Link>
                        ))
                    }
                </div>
                <div className={`flex mt-3 justify-center text-2xl font-extralight ${montserrat.className}`}>
                    {
                        internalLinks.map(link => (
                            <Link className='ml-6' href={ link.route }>{ link.name }</Link>
                        ))
                    }
                </div>
                <div className='flex w-full justify-center'>
                    <text className={`mt-20 text-lg font-light ${montserrat.className}`}>©2023 Arthur Riechert | All Rights Reserved</text>
                </div>
            </div>          
        </footer>
    )
}