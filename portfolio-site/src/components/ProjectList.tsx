import { montserrat } from './Fonts'
import Image from 'next/image'
import { ProjectMetadata, getProjectMetadata } from '../../lib/projects'
import Link from 'next/link'

/**
 * @author Arthur Riechert
 * @version 1.1.0
 */

export default function ProjectList() {
    
    const projectMetadata: ProjectMetadata[] = getProjectMetadata()

    return (
        <div className='mt-10 grid grid-cols-2 gap-7'>
            {
                projectMetadata.map(data => (
                    <div className={`${montserrat.className}`}>

                        <div className='w-full h-96 overflow-hidden rounded-2xl shadow-2xl'>
                            <img src={ data.thumbnail } alt={`${ data.title } thumbnail.`} className='' />
                        </div>

                        <h2 className={`mt-6 ${montserrat.className} text-4xl`}>{ data.title }</h2>
                        <p className='mt-2 font-light text-xl'>{ data.description }</p>
                        <div className='flex mt-6 mb-2'>
                            <div 
                                className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold
                                    tracking-wide transition-opacity rounded-lg text-xl
                                    ${montserrat.className}`}
                            >
                                <div className='flex'>
                                    <Link className='px-4 py-2' href={`/projects/${ data.slug }`} >Read More</Link>
                                </div>
                            </div>
                            <div 
                                className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold
                                    tracking-wide transition-opacity ml-5 px-4 rounded-lg text-xl
                                    ${montserrat.className}`}
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