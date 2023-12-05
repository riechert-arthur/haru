import { montserrat } from './Fonts'
/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export default function SkillList() {
    return (
        <div className='min-w-full'>
            <text className={`${montserrat.className} text-xl tracking-wider font-light`}><i>Click each skill for more detail.</i></text>
            <div className='flex'>
                <div className='bg-slate-700'>
                    <h2>Python</h2>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}