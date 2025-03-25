import Link from 'next/link'
import Image from 'next/image'

import { montserrat } from "@/components/Fonts"
import { ProjectData, getProjectData } from "../../../../lib/projects"

async function ProjectHeroLinks( { data }: { data: ProjectData }) {
    return (
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
    )
}

async function ProjectHeroHeader( { data }: { data: ProjectData }) {
    return (
        <>
            <h2 className='text-6xl font-mono'>{ data.metadata.title }</h2>
            <div className='pt-3'>
                <text className={`text-3xl font-light `}><i>{ data.metadata.date }</i></text>
            </div>
            <ProjectHeroLinks data={ data } />
        </>
    )
}

async function ProjectHero( { data }: { data: ProjectData }) {
    return (
        <>
            <ProjectHeroHeader data={ data } />
            <p className='mt-2 font-light text-2xl'>{ data.metadata.description }</p>
            <div className='flex mt-8 w-full justify-center items-center'>
              {data.metadata.live != data.metadata.github ? 
                <iframe className='shadow-2xl rounded-3xl w-full' src={ data.metadata.live } width='1335' height='740'></iframe>
                :
                <Image className='ml-1 w-full rounded-3xl shadow-2xl' src={data.metadata.thumbnail} width='1000' height='800' alt='Github icon'></Image>
              }
            </div>
        </>
    )
}

export default async function ProjectPage( { params }: { params: { slug: string } }) {

    const data: ProjectData = await getProjectData(params.slug)

    return (
        <main className={`flex flex-col px-8 md:max-lg:px-16 md:px-48 md:pb-24 w-full ${montserrat.className}`}>
            <div className='py-8 md:py-48'>
                <ProjectHero data={ data }/>
                <div className={`markdown mt-12 ${montserrat.className} font-light`} dangerouslySetInnerHTML={{ __html: data.html }}></div>
            </div>
        </main>
    )
}
