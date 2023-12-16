import { ProjectData, getProjectData } from "../../../../lib/projects"

/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default async function Page( { params }: { params: { slug: string } }) {

    const data: ProjectData = await getProjectData(params.slug)

    return (
        <>
            <h2>{ data.metadata.title }</h2>
            <text>{ data.metadata.date }</text>
            <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
        </>
    )
}