import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

/**
 * Utility functions for rendering data for projects.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

export interface ProjectMetadata {
    slug: string
    title: string
    date: string
    description: string
    github: string
    live: string
}

export interface ProjectData {
    metadata: ProjectMetadata
    html: string
}

const projectDirectory: string = path.join(process.cwd(), 'projects')

export function getProjectMetadata(): ProjectMetadata[] {
    const fileNames: string[] = fs.readdirSync(projectDirectory)

    const projectsMetadata: ProjectMetadata[] = fileNames.map(fileName => {
        
        const slug: string = fileName.replace(/\.md$/, '')

        const fullPath: string = path.join(projectDirectory, fileName)
        const fileContents: string = fs.readFileSync(fullPath, 'utf8')

        const parsedResults = matter(fileContents)

        return {
            slug: slug,
            ...(parsedResults.data as { title: string, date: string, description: string, github: string, live: string })
        }
    })

    return projectsMetadata.sort((a, b) => {
        return a.date < b.date ? 1 : -1
    })
}

export async function getProjectData(slug: string): Promise<ProjectData> {

    const fullPath: string = path.join(projectDirectory, `${slug}.md`)
    const fileContents: string = fs.readFileSync(fullPath, 'utf8')

    const parsedResults = matter(fileContents)

    const htmlResults = await remark()
        .use(html)
        .process(parsedResults.content)

    const htmlContent = htmlResults.toString()

    return {
        metadata: {
            slug,
            ...(parsedResults.data as { title: string, date: string, description: string, github: string, live: string }),
        },
        html: htmlContent
    }
}