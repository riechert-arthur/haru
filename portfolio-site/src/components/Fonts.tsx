import { Montserrat } from 'next/font/google'

/**
 * A file to declare fonts that other components can import.
 * Used to maintain cleanliness of code and reduce redundancy.
 * 
 * All fonts should be declared here. 
 *
 * @author Arthur Riechert
 * @version 1.0.1
 */
export const montserrat = Montserrat({
    subsets: ['latin'],
    style: 'normal',
    weight: ['200', '300', '500', '600'],
})