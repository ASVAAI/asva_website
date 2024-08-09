import React from 'react';
import blog1 from '../Images/blog1.jpeg'; // Update the import path as necessary

function SinglePage({post}) {

    // const blogData = [
    //     {
    //         author: 'Vats Shah',
    //         date: 'July 3, 2024',
    //         title: `How ASVA AI'S CV Parsing helps hiring decisions`,
    //         description: 'Empowering Data-Driven Recruitment: The ASVA AI CV Parsing Advantage.',
    //         imgurl: blog1,
    //         href: "https://www.linkedin.com/pulse/empowering-data-driven-recruitment-asva-ai-cv-parsing-advantage-zxq0c/?trackingId=jvoCm0LFRauxXxA4rRFFjg%3D%3D",
    //         content: {
    //             heading: "Empowering Data-Driven Recruitment: The ASVA AI CV Parsing Advantage",
    //             paragraphs: [
    //                 "In today's competitive talent landscape, gut feelings and intuition are no longer enough. At ASVA AI, we believe in the power of data to drive smarter, more effective hiring decisions. Our advanced CV parsing solution is at the heart of this data-driven revolution. Here's how we're transforming recruitment from an art into a science:",
    //             ],
    //             lists: [
    //                 {
    //                     title: "Standardized Data for Meaningful Comparisons:",
    //                     context: "Our CV parser extracts and standardizes information from thousands of resumes, creating a unified dataset. This allows for true apples-to-apples comparisons between candidates, eliminating the bias that can come from inconsistent formats and subjective interpretations."
    //                 },
    //                 {
    //                     title: "Quantifiable Skill Assessments:",
    //                     context: "Beyond just identifying skills, our parser can quantify proficiency levels based on the context in which skills are mentioned. This provides a more nuanced understanding of a candidate's capabilities, allowing for data-backed decisions on technical fit."
    //                 },
    //                 {
    //                     title: "Experience Metrics:",
    //                     context: "Our AI doesn't just count years of experience; it analyzes the quality and relevance of that experience. By breaking down job histories into quantifiable metrics, we provide a more accurate picture of a candidate's true expertise."
    //                 },
    //                 {
    //                     title: "Predictive Analytics:",
    //                     context: "By analyzing historical hiring data alongside parsed CV information, our system can predict candidate success likelihood for specific roles. This forward-looking insight helps reduce turnover and improve long-term hiring outcomes."
    //                 },
    //                 {
    //                     title: "Skills Gap Analysis:",
    //                     context: "Automatically compare the skills present in your candidate pool against the requirements of your open positions. This data-driven approach helps identify talent pipeline gaps and informs targeted recruitment strategies."
    //                 },
    //                 {
    //                     title: "Diversity and Inclusion Metrics:",
    //                     context: "While ensuring compliance with data protection regulations, our parser can provide anonymized diversity data, helping organizations track and improve their D&I initiatives with concrete metrics."
    //                 },
    //                 {
    //                     title: "Market Insights:",
    //                     context: "Aggregate data from parsed CVs provides valuable insights into market trends, such as emerging skills or shifts in candidate expectations. This intelligence can inform both hiring strategies and broader business decisions."
    //                 },
    //                 {
    //                     title: "Performance Correlation:",
    //                     context: "By integrating with performance management systems, our solution can correlate CV data with on-the-job performance, continuously refining the predictors of success for your organization."
    //                 },
    //                 {
    //                     title: "Time-to-Hire Optimization:",
    //                     context: "Data on the movement of candidates through your hiring funnel, combined with parsed CV information, allows for the identification of bottlenecks and the optimization of your recruitment process."
    //                 },
    //                 {
    //                     title: "Cost-per-Hire Analysis:",
    //                     context: "By providing detailed data on candidate sources and hiring outcomes, our parser supports in-depth cost-per-hire analysis, allowing for more efficient allocation of recruitment budgets."
    //                 },
    //                 {
    //                     title: "Skill Taxonomy Development:",
    //                     context: "Our AI continuously learns and updates its understanding of skills and job roles, helping you stay ahead of rapidly evolving job markets and emerging technologies."
    //                 },
    //                 {
    //                     title: "Talent Pool Analytics:",
    //                     context: "Gain a bird's-eye view of your talent pool's composition. Understand the distribution of skills, experience levels, and other key attributes across your candidate database."
    //                 }
    //             ],
    //             subHeadings: [
    //                 {
    //                     title: "Real-world Impact:",
    //                     paragraphs: [
    //                         "One of our clients, a fast-growing tech company, used our CV parsing solution to analyze their successful hires over the past five years. The data revealed that candidates with a specific combination of technical skills and project management experience were 40% more likely to excel in their senior developer roles. This insight allowed them to refine their job descriptions and screening criteria, resulting in:"
    //                     ],
    //                     lists: [
    //                         "25% reduction in time-to-hire for senior positions",
    //                         "30% improvement in first-year performance ratings of new hires",
    //                         "20% decrease in early-stage turnover"
    //                     ]
    //                 },
    //                 {
    //                     title: "",
    //                     paragraphs: [
    //                         "At ASVA AI, we believe that the future of recruitment lies in harnessing the power of data. Our CV parsing solution isn't just about efficiency; it's about providing you with the insights you need to make confident, informed hiring decisions.",
    //                         "By transforming the unstructured data in CVs into structured, analyzable information, we're enabling a new era of data-driven recruitment. It's not about replacing human judgment, but about empowering recruiters and hiring managers with the insights they need to make better decisions.",
    //                         "Ready to supercharge your hiring process with data-driven insights? Let's connect and explore how ASVA AI's CV parsing solution can transform your approach to talent acquisition."
    //                     ]
    //                 }
    //             ]
    //         }
    //     },
    // ];

    // console.log(post)

    return (
        <section> 
            <div className='w-full max-w-7xl mx-auto px-4 py-8 bg-teal-40'>
                <div className='flex flex-col items-start justify-center '>

                    <div className='bg-lime-30 w-full flex flex-row justify-center items-center '>
                        <div>
                            <img  className="" width="500" height="" src={post.imgurl} alt="image"/>
                            <div className='text-violet-600 font-semibold text-base space-y-2 py-2 '>
                                <p className='border border-gray-400 rounded-full w-fit px-4'>{post.author}</p>
                                <p className='border border-gray-400 rounded-full w-fit px-4'>{post.date}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap flex-col py-4 bg-red-20'>
                        {post.content && <h1 className='sm:text-6xl text-5xl  text-violet-600 font-bold'>{post.content.heading}</h1>}
                        
                    </div>

                    <div className='bg-blue-40'>
                        {post.content && post.content.paragraphs && post.content.paragraphs.map((para, index) => (
                            <p className='py-4 sm:text-2xl text-xl ' key={index}>{para}</p>
                        ))}
                    </div>

                    <div className='bg-yellow-00 text-lg '>
                        {post.content && post.content.lists && (
                            <ul className='px-8'>
                                {post.content.lists.map((listItem, index) => (
                                    <li className='list-disc  py-2 text-violet-600' key={index}>
                                        <span className='font-semibold text-violet-500'>{listItem.title}</span> <span className='text-black'>{listItem.context}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {post.content && post.content.subHeadings && post.content.subHeadings.map((subHeading, index) => (
                        <div key={index} className='py-3 bg-fuchsia-40'>
                            <h2 className='sm:text-4xl text-2xl  text-violet-500 font-bold'>{subHeading.title}</h2>
                            {subHeading.paragraphs && subHeading.paragraphs.map((para, index) => (
                                <p className='sm:text-2xl text-xl py-2' key={index}>{para}</p>
                            ))}
                            {subHeading.lists && (
                                <ul className='px-8 '>
                                    {subHeading.lists.map((listItem, index) => (
                                        <li className='list-disc py-1 sm:text-lg ' key={index}>{listItem}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className='w-full h-0.5 bg-violet-600 '></div>
            </div>
        </section>
    );
}

export default SinglePage;
