'use client'

import { Dispatch, SetStateAction } from 'react'
import DarkButton from './DarkButton'
import { montserrat } from './Fonts'
import Image from 'next/image'
import Link from 'next/link'

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

const copyrightText: string = "©2023 Arthur Riechert | All Rights Reserved"

function SocialLinks() {
    return (
        <div className='flex w-2/5 min-w-footer-socials max-w-footer-socials justify-between'>
            {
                socials.map((social: SocialLink, i: number) => (
                    <Link
                        key={ i }
                        href={ social.url }
                        target='_blank'
                    >
                        <button>
                            <Image
                                src={ social.icon }
                                width='40'
                                height='40'
                                alt={ `${ social.name } logo` }
                            />
                        </button>
                    </Link>
                ))
            }
        </div>
    )
}

function InternalLinks() {
    return (
        <div className={`flex flex-wrap justify-center md:flex-row mt-1 md:mt-3 md:justify-between
            md:min-w-footer-internals md:max-w-footer-internals text-2xl font-extralight ${ montserrat.className }`
        }>
            {
                internalLinks.map((link: InternalLink, i: number) => (
                    <Link
                        className='mr-4 md:mr-0'
                        href={ link.route }
                        key={ i }
                    >
                        { link.name }
                    </Link>
                ))
            }
        </div>

    )
}

function Copyright() {
    return (
        <div className='flex w-full justify-center'>
            <text
                className={`mt-20 text-md font-light
                    ${ montserrat.className }`
            }>
                { copyrightText }                
            </text>
        </div>
    )
}

export default function Footer() {

    return (
        <footer className="flex flex-col overflow-x-hidden md:-mt-60 w-full text-white">
            <img className='w-full object-cover' src='/footer-waves.svg'></img>
            <div className='flex flex-col p-2 w-full items-center py-2 bg-sky-400'>
                <SocialLinks />                    
                <InternalLinks /> 
                <DarkButton />
                <Copyright />
            </div>
        </footer>
    )
}
