export default function Page( { params }: { params: { slug: string } }) {
    return (
        <h2>My Project: { params.slug }</h2>
    )
}