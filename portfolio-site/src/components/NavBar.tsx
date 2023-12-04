import { montserrat } from './Fonts'
import Button from '../components/Button'

interface NavigationLinks {
    [key: string]: string;
}

const navigationLinks: NavigationLinks = {
    About: "/about",
    Projects: "/projects",
    Experience: "/experience",
    Contact: "/contact",
}

export default function NavBar() {
    return (
        <nav className='flex items-center justify-between px-11 py-4 bg-slate-900/60'>
            <a href='/' className={`text-2xl tracking-wide ${montserrat.className}`}>Arthur Riechert</a>
            <div className='flex items-center justify-between'>
                {
                    Object.keys(navigationLinks).map((key) => (
                        <a className='mr-7 text-xl tracking-wide' href={navigationLinks[key]}>{key}</a>
                    ))
                }
                <Button 
                    text='Resumè'
                    extraClassNames='px-4 py-2 rounded-lg text-xl'
                />
            </div>
        </nav>
    )
}