import { montserrat } from './Fonts'
import Image from 'next/image'
import { ProjectMetadata, getProjectMetadata } from '../../lib/projects'
import Link from 'next/link'

export default function ProjectList() {
    
    const projectMetadata: ProjectMetadata[] = getProjectMetadata()

    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-7'>
            {
                projectMetadata.map((data: ProjectMetadata, index: number) => (
                    <div key={ index } className={`${montserrat.className}`}>
                        <div className='overflow-hidden w-full h-48 md:h-96 overflow-hidden rounded-2xl shadow-2xl'>
                            <img src={ data.thumbnail } alt={`${ data.title } thumbnail.`} className='w-full h-full object-cover' />
                        </div>
                        <h2 className={`mt-6 ${montserrat.className} text-4xl`}>{ data.title }</h2>
                        <p className='mt-2 font-light text-xl'>{ data.description }</p>
                        <div className='flex mt-6 mb-2 text-white'>
                            <div 
                                className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold
                                    tracking-wide transition-opacity rounded-lg text-xl
                                    ${montserrat.className} shadow-md`}
                            >
                                <div className='flex'>
                                    <Link className='px-4 py-2' href={`/projects/${ data.slug }`} >Read More</Link>
                                </div>
                            </div>
                            <div 
                                className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold
                                    tracking-wide transition-opacity ml-5 px-4 rounded-lg text-xl
                                    ${montserrat.className} shadow-md`}
                            >
                                <div className='flex'>
                                    <Link className='py-2' href={ data.live }>View</Link>
                                    <Image className='ml-1' src='full-screen.svg' width='24' height='24' alt='Github icon'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
