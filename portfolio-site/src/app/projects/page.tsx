import Link from 'next/link'
import Image from 'next/image'
import ProjectList from '../../components/ProjectList'
import { montserrat } from '../../components/Fonts'

/**
 * A page to store projects, so visitors can interact with them.
 *
 * TODO:
 * - Add separate pages for each project.
 *
 * @author Arthur Riechert
 * @version 1.0.1
 */

export default function Projects() {

    return (
        <main className='min-h-screen px-48 pb-24'>
            <div className='py-48'>
                <h1 className='font-mono text-5xl'>Projects</h1>
                <div className='flex pt-7'>
                    <text className={`${ montserrat.className } font-light text-xl`}><i>Find more <Link href='https://github.com/riechert-arthur'><u>here</u></Link></i></text>
                    <Image className='ml-2' src='github.svg' width='24' height='24' alt='Github icon'></Image>
                </div>
                <ProjectList />
            </div>
        </main>
    )
}