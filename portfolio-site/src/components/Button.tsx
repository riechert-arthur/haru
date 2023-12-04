import { montserrat } from './Fonts'

/**
 * A template for buttons with shared color and font effects.
 *
 * Preset elements include the color, on hover, font style, and letter spacing.
 * Other attributes can be set using @extraClassNames in @buttonProps interace.
 *
 * @author Arthur Riechert
 * @version 1.0.0
 */

interface buttonProps {
    text: string
    extraClassNames: string
}

export default function Button({ text, extraClassNames }: buttonProps) {
    return (
        <button className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold tracking-wide ${extraClassNames} ${montserrat.className}`}>
            { text }
        </button>
    )
}