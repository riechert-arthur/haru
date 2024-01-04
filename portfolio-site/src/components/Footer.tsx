'use client'

import Image from 'next/image'
import Link from 'next/link'
import { montserrat } from './Fonts'

/**
 * TODO:
 * - Add dark mode toggle button
 *
 * @author Arthur Riechert
 * @version 1.0.1
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
        <footer className="flex flex-col overflow-x-hidden md:-mt-60 w-full">
            <img className='w-full object-cover' src='/footer-waves.svg'></img>
            <div className='flex flex-col p-2 w-full items-center py-2 bg-sky-400'>
                <div className='flex w-2/5 max-w-sm-footer-socials md:min-w-footer-socials md:max-w-footer-socials justify-between'>
                    {
                        socials.map((social: SocialLink, index: number) => (
                            <Link
                                key={ index }
                                href={ social.url }
                                target='_blank'
                            >
                                <button>
                                    <Image
                                        src={ social.icon }
                                        width='40'
                                        height='40'
                                        alt={`${social.name} logo`}
                                    />
                                </button>
                            </Link>
                        ))
                    }
                </div>
                <div className={`flex flex-wrap justify-center md:flex-row mt-1 md:mt-3 md:justify-between
                    md:min-w-footer-internals md:max-w-footer-internals text-2xl font-extralight ${montserrat.className}`
                }>
                    {
                        internalLinks.map((link: InternalLink, index: number) => (
                            <Link
                                className='mr-4 md:mr-0'
                                href={ link.route }
                                key={ index }
                            >
                                { link.name }
                            </Link>
                        ))
                    }
                </div>
                <div className='flex w-full justify-center'>
                    <text
                        className={`mt-20 text-md font-light
                            ${montserrat.className}`
                    }>
                        ©2023 Arthur Riechert | All Rights Reserved
                    </text>
                </div>
            </div>          
        </footer>
    )
}