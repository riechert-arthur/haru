import { montserrat } from "./Fonts"

interface ButtonProps {
  children?: React.ReactNode
  text: string
  extraClassNames: string
  functionToCall: () => any
}

export default function Button({
  children,
  text,
  extraClassNames,
  functionToCall,
}: ButtonProps) {
  return (
    <button
      className={`bg-sky-500/80 hover:bg-sky-600/80 font-semibold tracking-wide transition-opacity ${extraClassNames} ${montserrat.className} text-white shadow-xl`}
      onClick={functionToCall}
    >
      <div className="flex justify-center">
        {text}
        {children}
      </div>
    </button>
  )
}
