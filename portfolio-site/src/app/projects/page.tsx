import Link from 'next/link'
import Image from 'next/image'
import ProjectList from '../../components/ProjectList'

/**
 * A page to store projects, so visitors can interact with them.
 *
 * TODO:
 * - Add Tailwind formatting.
 * - Add separate pages for each project.
 *
 * @author Arthur Riechert
 * @version 1.0.1
 */

export default function Projects() {

    return (
        <div>
            <h1>Projects</h1>
            <div className='flex'>
                <text>Find more <Link href='https://github.com/riechert-arthur'><u>here</u></Link></text>
                <Image src='github.svg' width='24' height='24' alt='Github icon'></Image>
            </div>
            <ProjectList />
        </div>
    )
}