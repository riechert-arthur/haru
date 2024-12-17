import WorkList from "../../components/WorkList"

export default function Experience() {
  return (
    <main className="dark:text-white flex flex-strat lg:justify-center px-8 md:max-lg:px-16 md:px-48 md:pb-24 min-h-screen font-mono">
      <div className="lg:max-w-large-screens py-8 md:py-48 w-full">
        <div className="flex items-end mb-6">
          <h1 className="text-6xl mr-7">Work Experience</h1>
        </div>
        <WorkList />
      </div>
    </main>
  )
}
