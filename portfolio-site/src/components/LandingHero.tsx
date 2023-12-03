import { montserrat } from './Fonts'
import Image from 'next/image'

export default function LandingHero() {
    return (
        <div>
            <div className="flex z-10 w-full justify-between items-center font-mono text-sm tracking-wider">
                <div>
                    <h1 className='text-5xl'>Software Engineer</h1>
                    <div className="flex max-w-4xl">
                        <p className='mt-14 text-2xl leading-8 tracking-widest leading-relaxed'>
                            Hi, my name is Arthur. I am a computer science 
                            student and aspiring software engineer from
                            Georgia Institute of Technology.
                        </p>
                    </div>
                </div>
                <Image src='/head_shot.jpeg' width='300' height='300' alt='Picture of Arthur' className='ml-40 mr-12 w-96 h-96 bg-red-200 rounded-full'/>
            </div>
            <button className={`p-6 bg-sky-500/80 hover:bg-sky-600/80 rounded-2xl ${montserrat.className} font-bold text-3xl`}>Learn More</button>
        </div>
    )
}