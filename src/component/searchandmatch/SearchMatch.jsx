import React from 'react'
import img1 from "../Images/MatchAI-S-1.png"
import img2 from "../Images/MatchAI-S-2.png"
import { IconBubbleText } from '@tabler/icons-react';
import { IconFiles } from '@tabler/icons-react';
import { IconAi } from '@tabler/icons-react';

function SearchMatch() {
  return (
    <section className='font-titillium_web'>
        <div>

            <div className='flex flex-wrap flex-col bg-violet-700 justify-center items-start'>
                    <div className=' bg-green-30 w-full px-12 py-4'>
                        <h1 className='sm:text-8xl text-5xl  text-white'>Enhanced Search & Match</h1>
                    </div>
                    <div className='px-12 py-2'>
                        <p className='text-white sm:text-2xl text-lg'>Match the right person to the right role in a fraction of the time.</p>
                    </div>
                    <div className='py-8 px-12 '>
                        <button  type="button" className='text-violet-700 bg-white  border-2 rounded-full px-8 py-2 border-white sm:text-4xl hover:bg-violet-700 hover:text-white shadow-2xl hover:shadow-none  hover:translate-x-4 duration-300 '>TRY IT</button>
                    </div>
            </div>

            <div className='flex sm:flex-row justify-center items-center flex-col bg-green-40  '>
                <div className='bg-red-30 p-4 flex flex-row w-full'>
                   <img src={img1} alt="image"/>
                </div>
                <div className='bg-red-20 px-4 py-2 flex flex-col w-full '>
                    <div className='mb-8'><h1 className='sm:text-5xl py-4 text-3xl font-bold text-violet-700'>See <span className='text-black'>"Hidden"</span> Talent</h1></div>
                    <div className='space-y-4 sm:text-xl px-8'>
                        <ul className='list-disc space-y-4'>
                            <li>Identify top matched candidates using a Deep Learning enabled Knowledge Graph that continually learns</li>
                            <li>AI powered MapRecruit's parsers converts unstructured intent into structured content for apples-to-apples comparision and matching</li>
                            <li>Derived attributes like used skills and its duration & weights enable 85% accuracy in matching compared to other competitors</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex sm:flex-row justify-center items-center flex-col  '>
                <div className='bg-red-20 px-4 py-2 flex flex-col w-full '>
                    <div className='mb-8'><h1 className='sm:text-4xl py-4 text-3xl font-bold text-violet-700'>Focus on <span className='text-black'>"top ranked talent "</span>in seconds...</h1></div>
                    <div className='space-y-4 sm:text-xl px-8 '>
                        <ul className='list-disc space-y-4'>
                            <li>AI based matching engine cognitively understands the intent of the job requirement and maps the best matching candidates based on similarity of titles, skills, experience, etc.</li>
                            <li>Match Rank Index (MRI) shows stack ranked candidates based on Job Title, Skills, Education, Experience, Industry and Location</li>
                            <li>Configure MRI to suit your organizational needs</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-red-30 p-4 flex flex-row w-full'>
                   <img src={img2} alt="image"/>
                </div>
            </div>


            <div className='flex flex-row bg-violet-700'>
                <div>
                    <div className='flex flex-row justify-center items-center bg-gray-40 py-10'>
                        <div className='p-10'><h1 className='text-black sm:text-6xl font-semibold text-4xl'>Enhanced <span className='text-white'>Search & Match </span>to Empower Recruitment</h1></div>
                    </div>
                    <div className='bg-teal-00 flex sm:flex-row gap-y-8 flex-col justify-center items-center sm:gap-x-8 px-8 py-8 '>

                        <div className='bg-white border-2 border-violet-500 rounded-lg flex flex-col justify-center items-center py-8 shadow-xl hover:-translate-y-4 duration-200'>
                            <IconBubbleText className=' w-12 h-12 text-violet-700' stroke={1}  />
                            <h2 className='font-semibold py-2 text-xl text-center'>Benefit from Unparalleled Accuracy</h2>
                            <p className='px-2 py-1 text-center'>Even the most subtle variations between your job descriptions and candidates resumes/CVs wont reduce the quality of your matches. Our next-gen technology understands the purpose and context of your teams searches to deliver a new level of candidate matching and ranking accuracy-far greater than typical database search and match algorithms.</p>
                        </div>

                        <div className='bg-white border-2 border-violet-500 rounded-lg flex flex-col justify-center items-center py-8 shadow-xl hover:-translate-y-4 duration-200'>
                            <IconFiles className=' w-12 h-12 text-violet-700' stroke={1}  />
                            <h2 className='font-semibold py-2 text-xl tect-center'>Get Intelligent Recommendations</h2>
                            <p className='px-2 py-1 text-center'>Our recruiters and candidates will benefit from the Engines unique ability to make intelligent recommendations. For example, it will recommend additional jobs to candidates based on their resume/CV and provide a job-to-jobs comparison. For recruiters, it can make valuable recommendations based on a job-to-resumes comparison, and a resume-to-resumes comparison.</p>
                        </div>

                        <div className='bg-white border-2 border-violet-500 rounded-lg flex flex-col justify-center items-center py-8 shadow-xl hover:-translate-y-4 duration-200'>
                            <IconAi className=' w-12 h-12 text-violet-700' stroke={1}  />
                            <h2 className='font-semibold py-2 text-xl text-center'>Accelerate Time to Hire</h2>
                            <p className='px-2 py-1 text-center'>Ideal candidate matching and ranking are fast and effortless with our AI-powered platform, data enrichment, and semantics. Shortlisting ideal candidates becomes nearly instantaneous, allowing you to save time in recruitment, connect with top talent before your competitors, and accelerate your hiring speed.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default SearchMatch