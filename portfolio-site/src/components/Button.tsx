import { montserrat } from './Fonts'

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
    text: string
    extraClassNames: string
    functionToCall: () => any
}

export default function Button({ text, extraClassNames, functionToCall }: buttonProps) {
    return (
        <button
            className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold tracking-wide transition-opacity ${extraClassNames} ${montserrat.className}`}
            onClick={functionToCall}
        >
            { text }
        </button>
    )
}