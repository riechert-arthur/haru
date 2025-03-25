import { montserrat } from "@/components/Fonts"

const titleText: string = "Resumè"

export default function Resume() {
    return (
        <>
            <main className='hidden w-full lg:max-w-landing-hero md:flex lg:flex lg:flex-col md:justify-center lg:justify-center md:max-lg:px-16 px-48 py-48 mb-8'>
                <h2 className='text-6xl font-mono'>{ titleText }</h2>
                <div className='flex justify-center'>
                    <iframe
                        className='mt-16 md:w-full lg:w-4/5 h-fit shadow-2xl aspect-[8.5/11]'
                        src='/resume.pdf#zoom=135'
                    >
                    </iframe>
                </div>
            </main>
        </>
    )
}
