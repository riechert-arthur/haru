import { montserrat } from './Fonts'

export default function LandingHero() {
    return (
        <div className="z-10 max-w-6xl w-full items-left justify-between font-mono text-sm tracking-wider">
            <h1 className='text-5xl'>Software Engineer</h1>
            <div className="flex">
                <p className='my-12 text-2xl leading-8 tracking-widest leading-relaxed'>
                    Hi, my name is Arthur. I am a computer science 
                    student and aspiring software engineer from
                    Georgia Institute of Technology.
                </p>
                <div className='bg-red-500'></div>
            </div>
            <button className={`px-4 py-5 bg-sky-500/80 rounded-xl ${montserrat.className} font-bold text-3xl`}>Learn More</button>
        </div>
    )
}