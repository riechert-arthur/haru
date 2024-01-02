import { montserrat } from "@/components/Fonts"

/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function Resume() {
    return (
        <>
            <main className='hidden md:block px-48 py-48 mb-8'>
                <h2 className='text-6xl font-mono'>Resumè</h2>
                <div className='flex justify-center'>
                    <iframe
                        className='mt-16 shadow-md aspect-[8.5/11]'
                        src='/resume.pdf#zoom=135'
                        width='100%'
                    >
                    </iframe>
                </div>
            </main>
            <div className='flex flex-col py-8 items-center md:hidden'>
                <h2 className='text-6xl font-mono'>Resumè</h2>
                {/* Render a link to download the PDF on smaller screens */}
                <a
                    className={`flex items-center justify-center 
                        w-3/5 p-8 mt-12 text-3xl bg-sky-500/80 hover:bg-sky-600/80
                        font-semibold tracking-wide transition-opacity rounded-3xl
                        ${montserrat.className}`}
                    download="riechert-resume.pdf"
                    href='/resume.pdf'
                >
                    <text className='w-fit'>Download</text>
                </a>
            </div>
            <div className='h-72'></div>
        </>
    )
}