import { ProjectData, getProjectData } from "../../../../lib/projects"
import Link from 'next/link'
import Image from 'next/image'
import { montserrat } from "@/components/Fonts"

/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default async function Page( { params }: { params: { slug: string } }) {

    const data: ProjectData = await getProjectData(params.slug)

    return (
        <main className={`flex flex-col px-8 md:px-48 md:pb-24 w-full ${montserrat.className}`}>
            <div className='py-8 md:py-48'>
                <h2 className='text-6xl font-mono'>{ data.metadata.title }</h2>
                <div className='pt-3'>
                    <text className={`text-3xl font-light `}><i>{ data.metadata.date }</i></text>
                </div>
                <div className='flex mt-1'>
                    <div className='flex'>
                        <Image src='/github.svg' alt='Github logo' width='25' height='25'></Image>
                        <Link className='ml-2 text-2xl font-extralight' href={ data.metadata.github }><i><u>Github</u></i></Link>
                    </div>
                    <div className='flex'>
                        <Image className='ml-4' src='/full-screen.svg' alt='Github logo' width='25' height='25'></Image>
                        <Link className='ml-2 text-2xl font-extralight' href={ data.metadata.live }><i><u>Live Website</u></i></Link>
                    </div>
                </div>
                <p className='mt-2 font-light text-2xl'>{ data.metadata.description }</p>
                <div className='flex mt-8 w-full justify-center items-center'>
                    <iframe className='shadow-2xl rounded-3xl w-full' src={ data.metadata.live } width='1335' height='740'></iframe>
                </div>
                <div className={`markdown mt-12 ${montserrat.className} font-light`} dangerouslySetInnerHTML={{ __html: data.html }}></div>
            </div>
        </main>
    )
}