import { montserrat } from './Fonts'

/**
 * Displays a list of previous jobs from an external text file.
 *
 * @author Arthur Riechert
 * @version 1.0.1
 */

/* Information used to display information about previous jobs. */

interface Job {
    Employer: string,
    Date: string,
    Role: string,
    Description: string[],
}

const jobs: Job[] = [
    {
        Employer: 'Reworkd AI',
        Date: 'May 2023 - August 2023',
        Role: 'Content Writer',
        Description: [
            `Performed research and wrote technical articles on the latest trends in generative artificial intelligence.`,

            `Maintained a weekly schedule for planning, drafting, and publishing content.`,

            `Facilitated clear and effective communication between myself and Founders.`,
        ],
    },
    {
        Employer: 'Reworkd AI',
        Date: 'March 2023 - August 2023',
        Role: 'Community Manager',
        Description: [
            `Oversaw a Discord community of 25,000+ members for an SaaS AI product,
            maintaining a positive and inclusive environment for diverse participants.`,

            `Solicited and compiled user feedback, facilitated the resolution of numerous
            technical issues, and addressed a broad spectrum of product-related inquiries, facilitating communication between customers and founders.`,

            'Enforced server guidelines and rules to ensure respectful interactions and reduce incidents of harassment or spam.'
        ],
    },
]

export default function WorkList() {
    return (
        <div className={`pl-8 pr-10 pt-1 mt-7 border-2 border-y-transparent border-r-transparent border-l-white font-light ${montserrat.className}`}>
            {
                jobs.map((job: Job, index: number) => (
                    <div key={ index } className='mt-2 mb-7'>
                        <h3 className='mb-2 text-4xl'>{ job.Employer }</h3>
                        <div className='flex flex-col mb-7'>
                            <text className='text-2xl'><i>{ job.Role }</i></text>
                            <text className='text-2xl'>{ job.Date }</text>
                        </div>
                        <ul className='ml-6 text-xl list-disc tracking-wider'>
                            {
                                job.Description.map((job: string, i: number) => (
                                    <li key={ i } className='mb-4'>{ job }</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}