import LandingHero from "../components/LandingHero"

/**
 * @author Arthur Riechert
 * @version 1.0.0
 */
export default function Home() {
  return (
    <main className={ `flex justify-center w-full overflow-x-hidden min-h-screen px-4 md:max-lg:px-16 md:px-32 py-60
      md:max-lg:py-30 md:max-lg:mb-24 md:pt-50 md:pb-60 md:bg-polygon-scatter md:bg-cover 
      md:bg-no-repeat md:bg-[right_-42rem_top_-3rem]`
    }>
      <LandingHero></LandingHero>
    </main>
  )
}
