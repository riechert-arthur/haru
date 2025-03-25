'use client'

import Image from 'next/image'
import Button from '../components/Button'
import { useRouter } from 'next/navigation'

const headerText: string = "Software Engineer"
const heroImageAlt: string = "Picture of Arthur"
const heroImageSrc: string = "/head_shot.jpeg"
const heroParagraphText: string = ` Hi, my name is Arthur. I am a computer science 
                                    student and aspiring software engineer from
                                    Georgia Institute of Technology.`

const ctaButtonText: string = "Learn More"
const ctaButtonRoute: string = '/about'

function CTAButton() {
    const router = useRouter()

    return (
        <Button
            text={ ctaButtonText }
            extraClassNames='md:self-start lg:mt-0 p-6 w-2/3 md:w-fit text-3xl rounded-2xl'
            functionToCall={() => router.push(ctaButtonRoute)}
        />
    )
}

function HeroImageDesktop() {
  return (
      <Image 
          src={ heroImageSrc }
          width='300'
          height='300'
          alt={ heroImageAlt }
          className='hidden md:block md:max-lg:ml-8 md:ml-40 md:max-lg:mr-0 md:mr-12 md:max-lg:w-72 md:max-lg:h-72 md:w-96 md:h-96 bg-red-200 rounded-full shadow-2xl'
      />
  )
}

function HeroImageMobile() {
    return (
        <Image
            src={ heroImageSrc }
            width='200'
            height='200'
            alt={ heroImageAlt }
            className='mt-8 md:hidden md:ml-40 md:mr-12 w-64 h-64 bg-red-200 rounded-full shadow-2xl'
        />
    )
}

export default function LandingHero() {

    
    return (
        <div className='lg:max-w-large-screens flex flex-col items-center w-full dark:text-white text-black'>
            <div className={`flex flex-col mb-8 lg:mb-0 md:flex-row w-full md:justify-between
                items-center font-mono text-sm tracking-wider`
            }>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='w-full text-5xl md:text-5xl text-center md:text-left'>{ headerText }</h1>
                    <HeroImageMobile />                    
                    <div className="flex max-w-4xl">
                        <p className='lg:mt-7 mt-14 text-2xl text-center md:text-left leading-8 tracking-widest leading-relaxed'>{ heroParagraphText }</p>
                    </div>
                </div>
                <HeroImageDesktop />
            </div>
            <CTAButton />
        </div>
    )
}
