import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * Simple utility functions. 
 *
 * @version 1.0.0
 * @author Arthur Riechert
 */

interface ProjectData {
    date: string
    [key: string]: any
}

interface AllProjectData {
    slug: string
    data: ProjectData
}

const projectsDirectory: string = path.join(process.cwd(), 'projects')

export function getSortedProjectsData(): AllProjectData[] {
    const fileNames: string[] = fs.readdirSync(projectsDirectory);
    const allProjectsData: AllProjectData[] = fileNames.map(fileName => {
        const slug: string = fileName.replace(/\.md$/, '');

        const fullPath: string = path.join(projectsDirectory, fileName);
        const fileContents: string = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            slug,
            data: matterResult.data as ProjectData,
        };
    });

    return allProjectsData.sort((a, b) => {
        return (new Date(b.data.date) as any) - (new Date(a.data.date) as any);
    });
}
