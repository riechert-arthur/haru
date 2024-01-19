import { montserrat } from './Fonts'
import Image from 'next/image'

/**
 * A template for buttons with shared color and font effects.
 *
 * Preset elements include the color, on hover, font style, and letter spacing.
 * Other attributes can be set using @extraClassNames in @buttonProps interace.
 *
 * @author Arthur Riechert
 * @version 1.1.0
 */

interface buttonProps {
    children?: React.ReactNode
    text: string
    extraClassNames: string
    functionToCall: () => any
}

export default function Button({ children, text, extraClassNames, functionToCall }: buttonProps) {
    return (
        <button
            className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold tracking-wide transition-opacity ${extraClassNames} ${montserrat.className} text-white shadow-xl`}
            onClick={functionToCall}
        >
            <div className='flex justify-center'>
                { text }
                { children }
            </div>
        </button>
    )
}
