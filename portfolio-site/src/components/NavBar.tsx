import { Monsieur_La_Doulaise, Montserrat } from 'next/font/google'

interface NavigationLinks {
    [key: string]: string;
}

const montserrat = Montserrat({
    subsets: ['latin'],
    style: 'normal',
    weight: '500',
})

const navigationLinks: NavigationLinks = {
    About: "/about",
    Experience: "/experience",
    Projects: "/projects",
    Contact: "/contact",
}

export default function NavBar() {
    return (
        <nav className='flex items-center justify-between py-3 px-20 bg-slate-800'>
            <a href='/' className={`text-2xl ${montserrat.className}`}>Arthur Riechert</a>
            <div className='flex items-center justify-between'>
                {
                    Object.keys(navigationLinks).map((key) => (
                        <a className='mr-7' href={navigationLinks[key]}>{key}</a>
                    ))
                }
                <button className='p-3 ml-1 bg-sky-600 rounded-lg text-lg'>Resumè</button>
            </div>
        </nav>
    )
}