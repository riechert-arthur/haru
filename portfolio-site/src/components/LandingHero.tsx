'use client'

import Image from 'next/image'
import Button from '../components/Button'
import { useRouter } from 'next/navigation'

/**
 * @author Arthur Riechert
 * @version 2.0.1
 */
export default function LandingHero() {

    const router = useRouter()
    const learnMorePath: string = '/about'

    return (
        <div className='flex flex-col w-full'>
            <div className={`flex flex-col md:flex-row w-full md:justify-between
                items-center font-mono text-sm tracking-wider`
            }>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='w-full text-5xl text-center'>Software Engineer</h1>
                    <Image
                        src='/head_shot.jpeg'
                        width='300'
                        height='300'
                        alt='Picture of Arthur'
                        className='md:hidden md:ml-40 md:mr-12 w-96 h-96 bg-red-200 rounded-full shadow-2xl'
                    />
                    <div className="flex max-w-4xl">
                        <p className='mt-14 text-2xl leading-8 tracking-widest leading-relaxed'>
                            Hi, my name is Arthur. I am a computer science 
                            student and aspiring software engineer from
                            Georgia Institute of Technology.
                        </p>
                    </div>
                </div>
                <Image 
                    src='/head_shot.jpeg'
                    width='300'
                    height='300'
                    alt='Picture of Arthur'
                    className='hidden md:inline ml-40 mr-12 w-96 h-96 bg-red-200 rounded-full shadow-2xl'
                />
            </div>
            <Button
                text='Learn More'
                extraClassNames='p-6 text-3xl rounded-2xl'
                functionToCall={() => router.push(learnMorePath)}
            />
        </div>
    )
}