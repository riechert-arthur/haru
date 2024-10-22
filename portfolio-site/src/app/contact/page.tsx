import { montserrat } from "@/components/Fonts"
import Link from "next/link"

export default function Contact() {

    return (
        <main className='w-full flex flex-col lg:items-center justify-center md:max-lg:px-16 px-8 md:px-48 md:pb-24 lg:min-h-screen'>
            <div className='lg:max-w-large-screens py-8 md:py-48'>
                <h1 className='lg:text-center text-5xl md:text-6xl mr-7 font-mono'>Contact Me</h1>
                <div className={`flex flex-col items-center w-full mt-8 mb-40 md:mb-0 md:mt-16 text-xl md:text-4xl ${montserrat.className} font-light`}>
                    <Link className='p-8 md:p-16 border-b-2 hover:text-gray-400 hover:border-gray-400' href='mailto:riechertarthur@gmail.com'><i>riechertarthur@gmail.com</i></Link>
                    <Link className='p-8 md:p-16 border-b-2 hover:text-gray-400 hover:border-gray-400' href='https://www.linkedin.com/in/arthur-riechert-4b1414224/'><i>LinkedIn</i></Link>
                    <Link className='p-8 md:p-16 border-b-2 hover:text-gray-400 hover:border-gray-400' href='https://github.com/riechert-arthur'><i>GitHub</i></Link>
                </div>
            </div>
        </main>
    )
}
