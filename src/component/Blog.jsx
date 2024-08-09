import { useState } from 'react';
import blog1 from './Images/blog1.jpeg'
import blog2 from './Images/blog2.jpeg'
import blog3 from './Images/blog3.jpeg'
import blog4 from './Images/blog4.jpeg'
import blog5 from './Images/blog5.jpeg'
import blog6 from './Images/blog6.jpeg'
import blog7 from './Images/blog7.jpeg'
import blog8 from './Images/blog8.jpeg'
import blog9 from './Images/blog9.jpeg'

import newblog1 from './Images/blogPost1.png'
import newblog2 from './Images/blogPost2.png'
import newblog3 from './Images/blogPost3.png'
import newblog4 from './Images/blogPost4.png'
import newblog5 from './Images/blogPost5.png'


import { Link, useNavigate } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const Navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email) {
      setError('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwDnzuHI8bB-gZfGLGPomEufHzjzw9pY8OFc3lUB_gEdx-KLekSaCF_NdMBdBY5NKzl/exec', {
        method: 'POST',
       
        body: JSON.stringify({
          First_Name: firstName,
          Last_Name: lastName,
          email: email,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      if (data.result === 'success') {
          setFirstName('');
          setLastName('');
          setEmail('');
          setError(null);
          alert('Successfully Subscribed to NewsLetter');
        // Optionally, display a success message to the user
      } else {
        setError('Failed to add data to Google Sheets');
      }
    } catch (error) {
      setError('An error occurred');
      console.error('Error:', error);
    }
  };
  
  


  const blogPosts = [

    
    {
      author: 'Vats Shah',
      date: 'August 3, 2024',
      title: `ASVA AI launches revolutionary CV Parsing Solution.`,
      description: 'Introducing our cutting-edge CV Parsing technology.',
      imgurl: newblog1,
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7225158371732074496/",
      content:{
        heading: "ASVA AI launches revolutionary CV Parsing Solution.",
        paragraphs: [
          "We're thrilled to introduce our cutting-edge CV Parsing technology, designed to transform your recruitment process. After months of rigorous development and testing, we're proud to bring this innovative solution to market.",
          "In today's competitive talent landscape, our CV Parsing solution isn't just a tool- it's your strategic advantage. We've crafted it to simplify complex tasks, allowing HR professionals to focus on what truly matters: connecting with and securing top talent.",

          "Introducing ASVA AI's CV Parsing Solution:",
        ],
        lists: [
          {
            title: "High-precision data extraction",
            context: ""
          },
          {
            title: "Cost-efficient recruitment optimization",
            context:""
          },
          {
            title: "Customizable parsing fields",
            context:""
          },
          {
            title: "Top-tier data security measures",
            context:""
          },
          {
            title: "Flexible deployment options (on-premise or cloud)",
            context:""
          },
          {
            title: "Advanced OCR capabilities for multi-format processing",
            context:""
          },
        ],
        subHeadings: [
          {
            title: "",
            paragraphs: [
              "Ready to revolutionize your hiring process?",
              " Visit https://asvaai.com/ to learn more and request a demo.",
              "Join us in shaping the future of recruitment. How do you see AI transforming the hiring landscape?"
            ]
          }
        ]
      }
      
    },
    {
      author: 'Vats Shah',
      date: 'July 26, 2024',
      title: `From Resume Overload to Talent Goldmine with ASVA AI.`,
      description: 'Transform Recruitment Chaos into Clarity.',
      imgurl: newblog2,
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7221772711742607361/",
      content:{
        heading: "From Resume Overload to Talent Goldmine with ASVA AI.",
        paragraphs: [
          "Transform Recruitment Chaos into Clarity.",
          "Drowning in resumes? ASVA AI's CV Parsing Solution is your lifeline:"
        ],
        lists: [
          {
            title: "Simplify:",
            context: "Convert complex CVs to clear data, instantly"
          },
          {
            title:"Pinpoint Accuracy:",
            context:"Never miss a qualified candidate again",
          },
          {
            title:"Supercharge HR:",
            context:"Shift from screening to strategic growth",
          },
          {
            title:"Infinitely Scalable:",
            context:"Perfect for startups to enterprises",
          }
        ],
        subHeadings: [
          {
            title: "",
            paragraphs: [
              "Stop sifting, start hiring. Let ASVA AI illuminate your path to top talent.",
              "Ready to see it in action? Book a demo today!"
            ]
          }
        ]
      }
      
    },
    {
      author: 'Vats Shah',
      date: 'July 28, 2024',
      title: `Future-Proof Your Workforce with ASVA AI's CV Parsing Solution.`,
      description: 'ASVA AI CV Parsing Solution equips you to meet tomorrows challenges today.',
      imgurl: newblog3,
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7221396250246430721/",
      content:{
        heading: "Future-Proof Your Workforce with ASVA AI's CV Parsing Solution.",
        paragraphs: [
          "As the workplace evolves, so should your recruitment strategy. ASVA AI's CV Parsing Solution equips you to meet tomorrow's challenges today."
        ],
        lists: [
          {
            title: "Master Remote Work Hiring:",
            context: "Efficiently identify candidates with remote-ready skills and experiences."
          },
          {
            title:"Embrace the Gig Economy:",
            context:"Streamline screening for freelancers and contract workers with tailored parsing algorithms."
          },
          {
            title:"Boost Skill Development:",
            context:"Pinpoint skill gaps in your organization and create targeted training initiatives."
          },
          {
            title:"Ironclad Data Security:",
            context:"Rest easy with our GDPR-compliant solution, prioritizing candidate data privacy and protection."
          },
          {
            title:"AI-Powered Insights:",
            context:"Leverage machine learning to predict hiring trends and stay ahead of the curve."
          },
          {
            title:"Mobile-Optimized:",
            context:"Parse resumes from any device, catering to the increasingly mobile job-seeking landscape."
          },
        ],
        subHeadings: [
          {
            title: "",
            paragraphs: [
              "Stay ahead in the talent race with ASVA AI's innovative CV Parsing Solution. Prepare your workforce for the future, starting today!"
            ]
          }
        ]
      }
      
    },
    {
      author: 'Vats Shah',
      date: 'July 30, 2024',
      title: `Unlock Elite Talent with ASVA AI's CV Parsing`,
      description: 'Inside Look: How ASVA AI Transforms Hiring',
      imgurl: newblog4,
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7221772101408423937/",
      content:{
        "heading": "Unlock Elite Talent with ASVA AI's CV Parsing",
        "paragraphs": [
          "Inside Look: How ASVA AI Transforms Hiring",
          "Curious how top companies find needle-in-a-haystack candidates?", "ASVA AI's CV Parsing Solution is changing the game:",
        ],
        "lists": [
          {
            "title": "Smart Scanning: ",
            "context": "AI extracts crucial data with precision "
          },
          {
            "title":"Custom Criteria: ",
            "context":"Align parsing to your exact job needs"
          },
          {
            "title":"Data-Driven Decisions: ",
            "context":"Gain hiring insights to refine strategies"
          },
          {
            "title":"Human-Centric: ",
            "context":"Free recruiters to focus on relationships, not paperwork"
          },
        ],
        "subHeadings": [
          {
            "title": "",
            "paragraphs": [
              "Ready to revolutionize your recruitment? Let's connect and give you a demo!"
            ]
          }
        ]
      }
      
    },
    {
      author: 'Vats Shah',
      date: 'July 31, 2024',
      title: `Unlock Hidden Talent with ASVA AI's CV Parsing Solution.`,
      description: 'ASVA AIs cutting-edge CV Parsing Solution is here to revolutionize your hiring process.',
      imgurl: newblog5,
      href: "",
      content:{
        heading: "Unlock Hidden Talent with ASVA AI's CV Parsing Solution",
        paragraphs: [
          "Are you struggling to find the best candidates in a sea of resumes? ASVA AI's cutting-edge CV Parsing Solution is here to revolutionize your hiring process!"
        ],
        lists: [
          {
            title: "Uncover Hidden Gems: ",
            context: "Our AI-powered technology reveals skills and qualifications that traditional screening often misses. "
          },
          {
            "title": "Eliminate Bias: ",
            "context": "Foster fair evaluations and boost diversity in your workforce with our objective parsing system."
          },
          {
            "title": "Supercharge Efficiency: ",
            "context": "Slash resume screening time by up to 75%, allowing you to focus on engaging top talent."
          },
          {
            "title": "Data-Driven Decisions: ",
            "context": "Gain actionable insights to refine your hiring strategies and craft compelling job descriptions. "
          },
          {
            "title": "Seamless Integration: ",
            "context": "Our solution integrates smoothly with your existing ATS, ensuring a hassle-free implementation. "
          },
        ],
        subHeadings: [
          {
            title: "",
            paragraphs: [
              "Don't just fill positions - discover exceptional talent that will drive your organization forward. Experience the ASVA AI difference today!",
              "Ready to transform your hiring process? Contact us for a demo."
            ]
          }
        ]
      }
      
    },
    

  ];

  const mainPosts = [
    {
        author: 'Vats Shah',
        date: 'July 3, 2024',
        title: `How ASVA AI'S CV Parsing helps hiring decisions`,
        description: 'Empowering Data-Driven Recruitment: The ASVA AI CV Parsing Advantage.',
        imgurl: blog1,
        href: "https://www.linkedin.com/pulse/empowering-data-driven-recruitment-asva-ai-cv-parsing-advantage-zxq0c/?trackingId=jvoCm0LFRauxXxA4rRFFjg%3D%3D",
        content: {
          heading: "Empowering Data-Driven Recruitment: The ASVA AI CV Parsing Advantage",
          paragraphs: [
              "In today's competitive talent landscape, gut feelings and intuition are no longer enough. At ASVA AI, we believe in the power of data to drive smarter, more effective hiring decisions. Our advanced CV parsing solution is at the heart of this data-driven revolution. Here's how we're transforming recruitment from an art into a science:",
          ],
          lists: [
              {
                  title: "Standardized Data for Meaningful Comparisons:",
                  context: "Our CV parser extracts and standardizes information from thousands of resumes, creating a unified dataset. This allows for true apples-to-apples comparisons between candidates, eliminating the bias that can come from inconsistent formats and subjective interpretations."
              },
              {
                  title: "Quantifiable Skill Assessments:",
                  context: "Beyond just identifying skills, our parser can quantify proficiency levels based on the context in which skills are mentioned. This provides a more nuanced understanding of a candidate's capabilities, allowing for data-backed decisions on technical fit."
              },
              {
                  title: "Experience Metrics:",
                  context: "Our AI doesn't just count years of experience; it analyzes the quality and relevance of that experience. By breaking down job histories into quantifiable metrics, we provide a more accurate picture of a candidate's true expertise."
              },
              {
                  title: "Predictive Analytics:",
                  context: "By analyzing historical hiring data alongside parsed CV information, our system can predict candidate success likelihood for specific roles. This forward-looking insight helps reduce turnover and improve long-term hiring outcomes."
              },
              {
                  title: "Skills Gap Analysis:",
                  context: "Automatically compare the skills present in your candidate pool against the requirements of your open positions. This data-driven approach helps identify talent pipeline gaps and informs targeted recruitment strategies."
              },
              {
                  title: "Diversity and Inclusion Metrics:",
                  context: "While ensuring compliance with data protection regulations, our parser can provide anonymized diversity data, helping organizations track and improve their D&I initiatives with concrete metrics."
              },
              {
                  title: "Market Insights:",
                  context: "Aggregate data from parsed CVs provides valuable insights into market trends, such as emerging skills or shifts in candidate expectations. This intelligence can inform both hiring strategies and broader business decisions."
              },
              {
                  title: "Performance Correlation:",
                  context: "By integrating with performance management systems, our solution can correlate CV data with on-the-job performance, continuously refining the predictors of success for your organization."
              },
              {
                  title: "Time-to-Hire Optimization:",
                  context: "Data on the movement of candidates through your hiring funnel, combined with parsed CV information, allows for the identification of bottlenecks and the optimization of your recruitment process."
              },
              {
                  title: "Cost-per-Hire Analysis:",
                  context: "By providing detailed data on candidate sources and hiring outcomes, our parser supports in-depth cost-per-hire analysis, allowing for more efficient allocation of recruitment budgets."
              },
              {
                  title: "Skill Taxonomy Development:",
                  context: "Our AI continuously learns and updates its understanding of skills and job roles, helping you stay ahead of rapidly evolving job markets and emerging technologies."
              },
              {
                  title: "Talent Pool Analytics:",
                  context: "Gain a bird's-eye view of your talent pool's composition. Understand the distribution of skills, experience levels, and other key attributes across your candidate database."
              }
          ],
          subHeadings: [
              {
                  title: "Real-world Impact:",
                  paragraphs: [
                      "One of our clients, a fast-growing tech company, used our CV parsing solution to analyze their successful hires over the past five years. The data revealed that candidates with a specific combination of technical skills and project management experience were 40% more likely to excel in their senior developer roles. This insight allowed them to refine their job descriptions and screening criteria, resulting in:"
                  ],
                  lists: [
                      "25% reduction in time-to-hire for senior positions",
                      "30% improvement in first-year performance ratings of new hires",
                      "20% decrease in early-stage turnover"
                  ]
              },
              {
                  title: "",
                  paragraphs: [
                      "At ASVA AI, we believe that the future of recruitment lies in harnessing the power of data. Our CV parsing solution isn't just about efficiency; it's about providing you with the insights you need to make confident, informed hiring decisions.",
                      "By transforming the unstructured data in CVs into structured, analyzable information, we're enabling a new era of data-driven recruitment. It's not about replacing human judgment, but about empowering recruiters and hiring managers with the insights they need to make better decisions.",
                      "Ready to supercharge your hiring process with data-driven insights? Let's connect and explore how ASVA AI's CV parsing solution can transform your approach to talent acquisition."
                  ]
              }
          ]
        }
      },
      {
        author: 'Vats Shah',
        date: 'July 3, 2024',
        title: 'Enhancing Candidate CV Parsing with ASVA AI',
        description: 'Elevating the Candidate Experience: The Hidden Power of Efficient CV Parsing.',
        imgurl: blog2,
        href: "https://www.linkedin.com/pulse/enhancing-candidate-experience-efficient-cv-parsing-asva-ai-pbfdc/?trackingId=Bvz05b6ZTtqcHWgKccIQVQ%3D%3D",
        content: {
          "heading": "Enhancing Candidate Experience with Efficient CV Parsing",
          "paragraphs": [
              "In today's candidate-driven job market, the experience you provide to applicants can make or break your recruitment success. At ASVA AI, we believe that efficient CV parsing isn't just about making recruiters' lives easier - it's about creating a superior candidate experience that sets your company apart. Here's how our advanced CV parsing solution is revolutionizing the candidate journey:"
          ],
          "lists": [
              {
                  "title": "Lightning-Fast Application Process:",
                  "context": "Gone are the days of tedious form-filling. With our CV parser, candidates can apply with a single click, uploading their resume and having all relevant information automatically extracted and populated. This speed and simplicity significantly increase application completion rates."
              },
              {
                  "title": "Accurate Data Capture:",
                  "context": "Nothing frustrates candidates more than having to correct misinterpreted information. Our AI-powered parser ensures high accuracy in data extraction, meaning candidates' information is represented correctly from the start."
              },
              {
                  "title": "Consistent Communication:",
                  "context": "With parsed data readily available, personalized and timely communication becomes effortless. Candidates receive relevant updates quickly, keeping them engaged throughout the process."
              },
              {
                  "title": "Faster Response Times:",
                  "context": "Our efficient parsing allows for quicker initial screening. This means candidates hear back sooner, whether it's an invitation to interview or a courteous rejection. In a world where candidates often complain about the 'application black hole,' this responsiveness is a game-changer."
              },
              {
                  "title": "Improved Matching:",
                  "context": "By accurately parsing and categorizing skills and experience, we ensure candidates are matched to the most suitable roles. This increases the likelihood of successful placements and positive candidate experiences."
              },
              {
                  "title": "Mobile-Friendly Applications:",
                  "context": "Our parser works seamlessly with mobile uploads, allowing candidates to apply easily from any device. In an increasingly mobile-first world, this accessibility is crucial."
              },
              {
                  "title": "Multilingual Support:",
                  "context": "We support CV parsing in multiple languages, ensuring a smooth experience for international candidates and showcasing your company's global outlook."
              },
              {
                  "title": "Reduced Bias:",
                  "context": "By focusing on skills and experience rather than subjective factors, our parser helps promote fair and unbiased initial screening, contributing to a more inclusive recruitment process."
              },
              {
                  "title": "Data Privacy Compliance:",
                  "context": "We adhere to strict data protection standards, giving candidates peace of mind about the security of their personal information."
              },
              {
                  "title": "Feedback Loop:",
                  "context": "Our system can provide instant feedback on how well a candidate matches a role's requirements, allowing applicants to make informed decisions about their applications."
              }
          ],
          "subHeadings": [
              {
                  "title": "The Impact of These Improvements:",
                  "paragraphs": [],
                  "lists": [
                      "Increased application completion rates by up to 35%",
                      "Improved candidate satisfaction scores",
                      "Higher quality of applicants due to better matching",
                      "Increased success in securing top talent in competitive fields"
                  ]
              },
              {
                  "title": "Candidate Testimonial:",
                  "paragraphs": [
                      "I've applied to dozens of jobs in the past month, and this was by far the smoothest process. I uploaded my CV, and boom – everything was filled out correctly. I got a personalized email within hours confirming my application. It's refreshing to feel like my time is valued from the very start of the process."
                  ],
                  "lists": []
              },
              {
                  "title": "",
                  "paragraphs": [
                      "At ASVA AI, we believe that a great candidate experience is not just nice to have – it's a competitive advantage. In a world where top talent has choices, providing a smooth, respectful, and efficient application process can be the difference between securing a great hire and losing out to the competition.",
                      "Our CV parsing solution isn't just a back-office efficiency tool. It's a powerful weapon in your employer branding arsenal, showing candidates from the very first interaction that your company values their time and is committed to a modern, streamlined recruitment process.",
                      "Ready to transform your candidate experience and gain an edge in the talent market? Let's connect and explore how ASVA AI's CV parsing solution can elevate your recruitment process to new heights."
                  ]
              }
          ]
      }
      
      },
      {
        author: 'Vats Shah',
        date: 'July 3, 2024',
        title: 'The cost effectiveness of ASVA AI’s CV Parsing',
        description: 'The Cost_Effectiveness of Implementing CV Parsing.',
        imgurl: blog3,
        href: "https://www.linkedin.com/pulse/cost-effectiveness-implementing-cv-parsing-your-recruitment-process-wrhkf/?trackingId=QivwHKNLRUOCuYL5%2FpbBEA%3D%3D ",
        content: {
          "heading": "Maximizing ROI: The Cost-Effectiveness of Implementing CV Parsing",
          "paragraphs": [
              "In today's competitive business landscape, every investment needs to demonstrate clear returns. At ASVA AI, we're not just offering a CV parsing solution – we're providing a pathway to significant cost savings and improved efficiency in your recruitment process. Here's why implementing our CV parsing technology is a smart financial decision:"
          ],
          "lists": [
              {
                  "title": "Dramatic Time Savings:",
                  "context": "Time is money, especially in recruitment. Our CV parsing solution can process thousands of resumes in minutes, a task that would take human recruiters days or even weeks. This translates directly into labor cost savings and faster time-to-hire."
              },
              {
                  "title": "Reduced Cost-per-Hire:",
                  "context": "By automating the initial screening process, you significantly reduce the man-hours required for each hire. Our clients have reported reductions in cost-per-hire of up to 30% after implementing our CV parsing solution."
              },
              {
                  "title": "Improved Quality of Hire:",
                  "context": "Better candidates mean better business outcomes. Our advanced parsing and matching capabilities ensure you're identifying the most qualified candidates quickly, leading to improved quality of hire and reduced turnover costs."
              },
              {
                  "title": "Scalability Without Additional Costs:",
                  "context": "Unlike human resources, our CV parsing solution scales effortlessly. Whether you're processing 100 or 100,000 resumes, the cost remains predictable and manageable."
              },
              {
                  "title": "Reallocation of Human Resources:",
                  "context": "By automating the time-consuming task of resume screening, your HR team can focus on high-value activities like candidate engagement and strategic planning, maximizing the value of your human capital."
              },
              {
                  "title": "Reduced Hiring Cycle:",
                  "context": "A faster hiring process means less productivity lost to unfilled positions. Our solution significantly reduces time-to-hire, directly impacting your bottom line."
              },
              {
                  "title": "Integration Cost Savings:",
                  "context": "Our seamless integration with existing ATS systems means you don't need to invest in a completely new infrastructure. You get cutting-edge technology without the cost of a total system overhaul."
              },
              {
                  "title": "Data-Driven Decision Making:",
                  "context": "The standardized, high-quality data our parser provides enables more informed hiring decisions. This leads to better hires and reduced costs associated with bad hires."
              },
              {
                  "title": "Compliance Cost Reduction:",
                  "context": "Our parser helps ensure consistent, bias-free initial screening, potentially reducing costs associated with compliance issues and discrimination claims."
              },
              {
                  "title": "Competitive Advantage:",
                  "context": "In a world where the best candidates are off the market in days, the ability to quickly identify and engage top talent can be the difference between securing a game-changing hire and missing out. This competitive advantage has immeasurable value."
              }
          ],
          "subHeadings": [
              {
                  "title": "Let's Look at a Concrete Example:",
                  "paragraphs": [
                      "Company X processes 10,000 resumes per year. Before implementing CV parsing, each resume took an average of 15 minutes to review, totaling 2,500 hours of work. At an average HR salary of $25/hour, that's $62,500 spent on initial resume screening alone.",
                      "After implementing ASVA AI's CV parsing solution, the initial screening time was reduced to an average of 2 minutes per resume, totaling just 333 hours. That's a saving of 2,167 hours or $54,175 per year – and that's just on the initial screening process.",
                      "When you factor in the improvements in time-to-hire, quality of hire, and the ability to handle volume fluctuations without additional staff, the ROI becomes even more compelling.",
                      "At ASVA AI, we're committed to providing solutions that not only improve your recruitment process but also deliver clear, measurable returns on your investment. Our CV parsing technology isn't just a cost – it's a strategic investment in your company's future.",
                      "Ready to see how CV parsing can transform your recruitment economics? Let's connect and run the numbers for your specific situation. The savings might surprise you."
                  ],
                  "lists": []
              }
          ]
      }
      
      },
    {
      author: 'Vats Shah',
      date: 'July 2, 2024',
      title: 'ATS Integrating to CV Parsing  ',
      description: 'Your Applicant Tracking System(ATS) is the backbone of your operations.',
      imgurl: blog4,
      href: "https://www.linkedin.com/pulse/integrating-cv-parsing-your-existing-ats-applicant-tracking-system-3wnof/?trackingId=5oqrStgHTQmNkIgrheWiUw%3D%3D ",
      content : {
        "heading": "Seamless Integration: Supercharging Your ATS with Advanced CV Parsing",
        "paragraphs": [
            "In the world of talent acquisition, your Applicant Tracking System (ATS) is the backbone of your operations. But what if you could make it even more powerful? At ASVA AI, we're not just offering CV parsing – we're providing a solution that integrates seamlessly with your existing ATS, supercharging your recruitment process. Here's how:"
        ],
        "lists": [
            {
                "title": "Plug-and-Play Integration:",
                "context": "Our CV parsing solution is designed to work with all major ATS platforms. No need for a complete system overhaul or disruptive changes. We plug right into your existing workflow, enhancing its capabilities without any downtime."
            },
            {
                "title": "Enhanced Data Quality:",
                "context": "Say goodbye to inconsistent or missing candidate data. Our parser extracts information with high accuracy, ensuring your ATS is populated with standardized, high-quality data. This means better search results, more accurate reporting, and improved decision-making."
            },
            {
                "title": "Automated Data Entry:",
                "context": "Free your recruiters from the tedious task of manual data entry. Our parser automatically populates your ATS with parsed CV data, reducing errors and saving countless hours of work."
            },
            {
                "title": "Customizable Fields:",
                "context": "We understand that every organization has unique needs. Our solution allows you to customize which fields are extracted and how they're mapped to your ATS, ensuring you get exactly the information you need."
            },
            {
                "title": "Multi-Format Support:",
                "context": "Whether candidates submit Word documents, PDFs, or even unconventional formats, our parser can handle it all. This flexibility ensures you never miss out on a great candidate due to format incompatibility."
            },
            {
                "title": "Multilingual Capabilities:",
                "context": "In our global economy, talent knows no borders. Our CV parser supports multiple languages, allowing you to easily manage international recruitment campaigns within your existing ATS."
            },
            {
                "title": "Compliance and Data Security:",
                "context": "We take data protection seriously. Our integration adheres to the highest standards of data security and compliance, including GDPR, ensuring that your candidate information is always protected."
            },
            {
                "title": "Scalability:",
                "context": "Whether you're processing hundreds or hundreds of thousands of CVs, our solution scales effortlessly. As your recruitment needs grow, our parser grows with you, all within the familiar environment of your ATS."
            },
            {
                "title": "Real-Time Parsing:",
                "context": "No more waiting for batch processes. Our parser works in real-time, meaning new applications are processed and available in your ATS instantly."
            },
            {
                "title": "Continuous Improvement:",
                "context": "Our machine learning algorithms continually learn and improve, meaning your ATS becomes more intelligent over time, adapting to your specific recruitment needs."
            }
        ],
        "subHeadings": [
            {
                "title": "",
                "paragraphs": [
                    "The result? A supercharged ATS that works smarter, not harder. Our clients report significant improvements in efficiency, with some seeing up to a 70% reduction in time spent on initial candidate screening.",
                    "At ASVA AI, we believe in enhancing, not replacing, your existing systems. Our CV parsing solution is designed to integrate seamlessly with your ATS, providing you with all the benefits of advanced AI technology without the hassle of a major system change.",
                    "Ready to take your ATS to the next level? Let's connect and explore how ASVA AI can supercharge your recruitment process with our intelligent CV parsing solution."
                ],
                "lists": []
            }
        ]
    }
    
    },
    {
      author: 'Vats Shah',
      date: 'July 1, 2024',
      title: 'The role of machine learning in CV Parsing',
      description: 'Improving diversity and inclusion through unbiased CV Parsing.',
      imgurl: blog5,
      href: "https://www.linkedin.com/pulse/revolutionizing-recruitment-how-machine-learning-transforming-l1xdf/?trackingId=yVzzA8J0SCOnVXbXx%2FvFMw%3D%3D ",
      content: {
        "heading": "Revolutionizing Recruitment: How Machine Learning is Transforming CV Parsing",
        "paragraphs": [
            "In the fast-paced world of talent acquisition, staying ahead means embracing cutting-edge technology. At ASVA AI, we're at the forefront of this revolution, harnessing the power of machine learning to redefine CV parsing. Here's why it matters:",
            "Gone are the days of simple keyword matching and rule-based systems. Modern CV parsing powered by machine learning is a game-changer. Here's how:"
        ],
        "lists": [
            {
                "title": "Contextual Understanding:",
                "context": "Our AI doesn't just scan for keywords; it comprehends the context. It can differentiate between a candidate who \"used Python\" and one who is a \"Python expert.\""
            },
            {
                "title": "Pattern Recognition:",
                "context": "Machine learning algorithms identify patterns in successful hires, helping to spot promising candidates who might be overlooked by traditional methods."
            },
            {
                "title": "Continuous Improvement:",
                "context": "The more CVs our system processes, the smarter it becomes. It learns from each interaction, constantly refining its ability to extract and interpret information."
            },
            {
                "title": "Handling Unstructured Data:",
                "context": "CVs come in all formats. Our ML-powered parser can make sense of various layouts, styles, and even non-traditional application materials."
            },
            {
                "title": "Reducing Bias:",
                "context": "By focusing on skills and experience rather than subjective factors, machine learning helps promote more diverse and inclusive hiring practices."
            },
            {
                "title": "Predictive Analytics:",
                "context": "Beyond just parsing, our system can predict candidate success based on historical data, helping you make more informed decisions."
            }
        ],
        "subHeadings": [
            {
                "title": "",
                "paragraphs": [
                    "The impact? Faster, more accurate candidate screening, reduced time-to-hire, and ultimately, better quality hires. It's not just about processing applications; it's about finding the right fit for your organization.",
                    "At ASVA AI, we're committed to pushing the boundaries of what's possible in recruitment technology. Our machine learning-driven CV parsing is just the beginning. We're constantly innovating to bring you solutions that make your hiring process smarter, faster, and more effective.",
                    "Ready to experience the future of CV parsing? Let's connect and explore how ASVA AI can transform your recruitment strategy."
                ],
                "lists": []
            }
        ]
    }
    
    },
    {
      author: 'Vats Shah',
      date: 'July 1, 2024',
      title: 'Improving diversity through CV Parsing',
      description: 'Improving diversity and inclusion through unbiased CV Parsing.',
      imgurl: blog6,
      href: "https://www.linkedin.com/pulse/improving-diversity-inclusion-through-unbiased-cv-parsing-asva-ai-pgv9f/?trackingId=JsOL3C8LQGqm66FigkDRlQ%3D%3D ",
      content:{
        "heading": "Improving Diversity and Inclusion Through Unbiased CV Parsing",
        "paragraphs": [
            "In today's global business environment, diversity and inclusion (D&I) are not just buzzwords—they're critical components of a successful and innovative workplace. However, achieving true diversity in hiring can be challenging, often hindered by unconscious biases in the initial stages of recruitment. This is where unbiased CV parsing comes into play, offering a powerful tool to promote fairness and inclusivity in the hiring process.",
            "Let's explore how advanced CV parsing solutions, like those developed by forward-thinking companies such as ASVA AI, are helping to improve D&I efforts:"
        ],
        "lists": [
            {
                "title": "Focusing on Skills, Not Demographics:",
                "context": "Unbiased CV parsing extracts and prioritizes information related to skills, experience, and qualifications, rather than demographic details that could lead to unconscious bias."
            },
            {
                "title": "Standardized Data Extraction:",
                "context": "By processing all resumes in the same way, CV parsing ensures a consistent approach to candidate evaluation, regardless of factors like formatting or writing style that might unconsciously influence human reviewers."
            },
            {
                "title": "Multilingual Capabilities:",
                "context": "Advanced CV parsing can handle resumes in multiple languages, opening up opportunities for a more diverse, global talent pool."
            },
            {
                "title": "Reduction of Name Bias:",
                "context": "Studies have shown that names can trigger unconscious biases. CV parsing can be configured to anonymize or exclude names in the initial screening process."
            },
            {
                "title": "Consistent Evaluation Criteria:",
                "context": "By using the same criteria to evaluate all resumes, CV parsing helps ensure that every candidate is given equal consideration based on their qualifications."
            },
            {
                "title": "Handling Non-Traditional Career Paths:",
                "context": "AI-powered parsing can recognize and appropriately categorize non-linear career progressions or unconventional experiences that human reviewers might overlook or misinterpret."
            },
            {
                "title": "Inclusive Language Analysis:",
                "context": "Some advanced CV parsing solutions can identify and flag potentially biased language in job descriptions or resumes, promoting more inclusive communication."
            },
            {
                "title": "Data-Driven Insights on Diversity:",
                "context": "By providing structured data on all applicants, CV parsing enables organizations to analyze their applicant pool's diversity and adjust their sourcing strategies accordingly."
            },
            {
                "title": "Accessibility Considerations:",
                "context": "Modern CV parsing solutions often include features to ensure accessibility for candidates with disabilities, further promoting inclusivity in the application process."
            },
            {
                "title": "Compliance with Equal Opportunity Regulations:",
                "context": "By providing a consistent, data-driven approach to initial candidate screening, CV parsing can help organizations demonstrate compliance with equal opportunity regulations."
            }
        ],
        "subHeadings": [
            {
                "title": "",
                "paragraphs": [
                    "The impact of unbiased CV parsing on D&I efforts can be significant:",
                    "35% increase in diversity of candidate shortlists reported by some organizations",
                    "40% reduction in time-to-hire for diverse candidates",
                    "Improved long-term retention rates due to better job-candidate matches",
                    "A global tech company shared their experience: \"Implementing an AI-driven CV parsing solution was a turning point for our D&I initiatives. We've seen a marked increase in the diversity of our candidate pool, and our hiring managers report more confidence in the fairness of our initial screening process.\"",
                    "However, it's important to note that CV parsing is not a magic solution for D&I. It should be part of a comprehensive strategy that includes diverse sourcing, inclusive job descriptions, and ongoing training for hiring teams.",
                    "As we move towards a more inclusive future, tools like unbiased CV parsing play a crucial role in creating fairer, more diverse workplaces. They help organizations tap into a wider talent pool, bringing in fresh perspectives and driving innovation.",
                    "Is your organization leveraging technology to support your D&I efforts in recruitment? If not, exploring unbiased CV parsing could be a significant step towards creating a more diverse and inclusive workplace."
                ],
                "lists": []
            }
        ]
    }
    
    },
    {
      author: 'Vats Shah',
      date: 'June 30, 2024',
      title: 'Top benefits of using CV Parsing',
      description: 'The top benefits of implementing this technology in your HR department.',
      imgurl: blog7,
      href: "https://www.linkedin.com/pulse/top-benefits-using-cv-parsing-software-hr-departments-asva-ai-kvf6f/?trackingId=Jy32iU8QS9GeuXTfWxyztg%3D%3D ",
      content:{
        "heading": "Top Benefits of Using CV Parsing Software for HR Departments",
        "paragraphs": [
            "In today's fast-paced recruitment landscape, HR departments are constantly seeking ways to streamline their processes and improve efficiency. Enter CV parsing software—a game-changing tool that's transforming how companies handle resumes and candidate data. Let's explore the top benefits of implementing this technology in your HR department."
        ],
        "lists": [
            {
                "title": "Time Savings:",
                "context": "CV parsing software, like the solution offered by ASVA AI, can process hundreds of resumes in minutes, a task that would take hours or even days manually. This dramatic time savings allows HR professionals to focus on more strategic, high-value tasks."
            },
            {
                "title": "Improved Data Accuracy:",
                "context": "Manual data entry is prone to errors. CV parsing software extracts information with high accuracy, ensuring that your candidate database is reliable and up-to-date."
            },
            {
                "title": "Enhanced Candidate Experience:",
                "context": "With CV parsing, candidates can often apply by simply uploading their resume, eliminating the need for tedious form-filling. This streamlined process can significantly improve application completion rates and candidate satisfaction."
            },
            {
                "title": "Standardized Data:",
                "context": "CV parsing converts unstructured resume data into a standardized format, making it easier to compare candidates and identify the best fits for each role."
            },
            {
                "title": "Better Search and Match Capabilities:",
                "context": "With structured data from parsed resumes, HR teams can perform more accurate and granular searches to find candidates with specific skills or experiences."
            },
            {
                "title": "Increased Productivity:",
                "context": "By automating the initial screening process, CV parsing frees up recruiters to focus on engaging with top candidates and making strategic hiring decisions."
            },
            {
                "title": "Scalability:",
                "context": "Whether you're dealing with 10 or 10,000 applications, CV parsing software can handle the volume without a proportional increase in time or resources."
            },
            {
                "title": "Multilingual Support:",
                "context": "Advanced CV parsing solutions can handle resumes in multiple languages, breaking down barriers in global recruitment."
            },
            {
                "title": "Improved Compliance:",
                "context": "By ensuring consistent data extraction and storage, CV parsing can help maintain compliance with data protection regulations."
            },
            {
                "title": "Data-Driven Insights:",
                "context": "The structured data provided by CV parsing enables more comprehensive analytics, helping HR teams make data-driven decisions about their recruitment strategies."
            }
        ],
        "subHeadings": [
            {
                "title": "",
                "paragraphs": [
                    "The impact of these benefits can be substantial. Companies implementing CV parsing software often report:",
                    "70% reduction in time spent on initial resume screening",
                    "50% decrease in cost-per-hire",
                    "40% improvement in the quality of shortlisted candidates",
                    "A multinational corporation shared their experience: \"Implementing CV parsing software was a turning point for our HR department. We've not only saved countless hours on resume screening, but we're also making better hiring decisions thanks to the comprehensive, structured data we now have at our fingertips.\"",
                    "However, it's important to choose the right CV parsing solution for your needs. Look for software that offers:",
                    "High accuracy rates",
                    "Integration with your existing ATS or HRIS",
                    "Customizable parsing fields",
                    "Robust data security measures",
                    "As the job market continues to evolve, the ability to efficiently process and analyze large volumes of candidate data will become increasingly crucial. CV parsing software offers a powerful tool to stay ahead in this competitive landscape.",
                    "Is your HR department leveraging the power of CV parsing? If not, you might be missing out on a significant opportunity to enhance your recruitment process and gain a competitive edge in talent acquisition.",
                    "Check out ASVA AI and reach out to us for a demo to see how you can recruit better people and make your company grow 10x"
                ],
                "lists": []
            }
        ]
    }
    
    },
    {
      author: 'Vats Shah',
      date: 'June 29, 2024',
      title: 'How AI is revolutionising recruitment processes',
      description: 'Let\'s explore the key ways AI is revolutionizing recruitment.',
      imgurl: blog8,
      href: "https://www.linkedin.com/pulse/how-ai-revolutionizing-recruitment-process-asva-ai-o6xaf/?trackingId=phUv1wsCSl6iM3TsvP6fiA%3D%3D ",
      content:{
        "heading": "How AI is Revolutionizing the Recruitment Process",
        "paragraphs": [
            "Artificial Intelligence (AI) is not just a buzzword in the recruitment industry—it's a transformative force that's reshaping how companies attract, assess, and acquire talent. From CV parsing to candidate matching, AI is streamlining processes, reducing bias, and helping companies make more informed hiring decisions."
        ],
        "lists": [
            {
                "title": "Intelligent CV Parsing:",
                "context": "AI-powered parsing solutions, like those offered by innovative companies such as ASVA AI, can extract and categorize information from resumes with unprecedented accuracy and speed. This not only saves time but also ensures that no valuable information is overlooked."
            },
            {
                "title": "Automated Screening:",
                "context": "AI algorithms can quickly screen thousands of applications, identifying the most qualified candidates based on predetermined criteria. This dramatically reduces the time-to-shortlist and ensures a fair, consistent evaluation process."
            },
            {
                "title": "Chatbots and Virtual Assistants:",
                "context": "AI-driven chatbots can handle initial candidate inquiries, schedule interviews, and provide immediate feedback, enhancing the candidate experience and freeing up recruiters' time."
            },
            {
                "title": "Predictive Analytics:",
                "context": "By analyzing vast amounts of data, AI can predict which candidates are most likely to succeed in a role, helping companies make more informed hiring decisions."
            },
            {
                "title": "Video Interview Analysis:",
                "context": "AI can analyze video interviews, assessing factors like facial expressions, tone of voice, and word choice to provide insights into a candidate's personality and soft skills."
            },
            {
                "title": "Job Market Intelligence:",
                "context": "AI tools can analyze job market trends, helping companies optimize their job descriptions and recruitment strategies."
            },
            {
                "title": "Personalized Candidate Experience:",
                "context": "AI can tailor the application process and communication for each candidate, creating a more engaging and relevant experience."
            },
            {
                "title": "Bias Reduction:",
                "context": "By focusing on skills and qualifications rather than demographic information, AI-powered tools can help reduce unconscious bias in the hiring process."
            }
        ],
        "subHeadings": [
            {
                "title": "",
                "paragraphs": [
                    "The impact of AI on recruitment is profound:",
                    "75% reduction in time-to-hire reported by some companies",
                    "Significant improvement in the quality of hires",
                    "Enhanced candidate experience leading to better employer branding",
                    "More diverse and inclusive hiring practices",
                    "A global tech company shared their experience after implementing AI in their recruitment process: \"The integration of AI, particularly in our resume screening process, has been transformative. We're now able to process applications 10 times faster, and our quality of hire has improved significantly. It's like having a tireless, ultra-efficient recruiter working 24/7.\"",
                    "However, it's important to note that AI is not replacing human recruiters. Instead, it's augmenting their capabilities, allowing them to focus on high-value tasks like building relationships with candidates and making nuanced hiring decisions.",
                    "As we look to the future, the role of AI in recruitment will only grow. From more sophisticated matching algorithms to AI-driven assessment tools, the potential for innovation is vast.",
                    "Is your recruitment process leveraging the power of AI? If not, you might be missing out on a significant competitive advantage in the war for talent.",
                    "Check out ASVA AI and reach out to us to integrate AI in your recruitment process and hire better people"
                ],
                "lists": []
            }
        ]
    }
    
    },
    {
      author: 'Vats Shah',
      date: 'June 29, 2024',
      title: 'The evolution of CV Parsing',
      description: `The heart of this evolution lies in CV Parsing technology.`,
      imgurl: blog9,
      href: "https://www.linkedin.com/feed/update/urn:li:share:7212673897626820609/?actorCompanyId=101984708",
      content:{
        "heading": "The Evolution of CV Parsing Technology",
        "paragraphs": [
            "The recruitment landscape has undergone a remarkable transformation over the past few decades, and at the heart of this evolution lies CV parsing technology. From manual resume screening to cutting-edge AI-driven solutions, the journey has been nothing short of revolutionary.",
            "Let's take a walk through the evolution of CV parsing:"
        ],
        "lists": [
            {
                "title": "The Manual Era (Pre-1990s):",
                "items": [
                    "Resumes were reviewed entirely by hand",
                    "Time-consuming and prone to human error",
                    "Limited ability to handle high volumes of applications"
                ]
            },
            {
                "title": "The Keyword Matching Phase (1990s-2000s):",
                "items": [
                    "Introduction of basic digital systems",
                    "Relied on simple keyword matching",
                    "Often missed nuanced information and context"
                ]
            },
            {
                "title": "Rule-Based Parsing (Early 2000s):",
                "items": [
                    "More sophisticated systems using predefined rules",
                    "Improved accuracy but still limited by rigid structures",
                    "Struggled with unconventional resume formats"
                ]
            },
            {
                "title": "The Rise of Natural Language Processing (2010s):",
                "items": [
                    "Integration of NLP allowed for better understanding of context",
                    "Improved handling of various resume formats and languages",
                    "Began to capture more nuanced information"
                ]
            },
            {
                "title": "Machine Learning and AI Era (Present):",
                "items": [
                    "Advanced algorithms learn and improve over time",
                    "Contextual understanding rivals human comprehension",
                    "Handles complex, unstructured data with high accuracy"
                ]
            }
        ],
        "subHeadings": [
            {
                "title": "",
                "paragraphs": [
                    "Today, state-of-the-art CV parsing solutions, like those developed by innovative companies in the field, are pushing the boundaries of what's possible. These advanced systems can:",
                    "-Process resumes in multiple languages",
                    "-Understand industry-specific jargon and context",
                    "-Extract and categorize information with unprecedented accuracy",
                    "-Integrate seamlessly with existing HR systems"
                ]
            },
            {
                "title": "",
                "paragraphs": [
                    "The impact of this evolution on recruitment is profound:",
                    "-Drastic reduction in time spent on initial screening",
                    "-Improved candidate experience through faster processing",
                    "-Enhanced ability to identify the best-fit candidates",
                    "-Reduction in unconscious bias in the initial screening process",
                    "As we look to the future, the potential for CV parsing technology is boundless. With ongoing advancements in AI and machine learning, we can anticipate even more sophisticated systems that not only parse resumes but provide deep insights into candidate potential and job fit.",
                    "The journey of CV parsing technology is a testament to the power of innovation in transforming age-old processes. As companies like ASVA AI continue to push the envelope, we're excited to see what the next chapter in this evolution will bring.",
                    "Are you leveraging the latest in CV parsing technology in your recruitment process? If not, you might be missing out on a game-changing tool that could revolutionize your hiring practices."
                ]
            }
        ]
    }
    
    }
  ]

  const filteredPosts = searchTerm
    ? blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : blogPosts;

  const mainfilteredPosts = searchTerm
    ? mainPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : mainPosts;

    const handlePostClick = (post) => {
      // console.log("Navigating with post:", post);
      Navigate('/blogPage',{state:{post}}, {replace:true});
    }

  return (
    <div id='blog'>
      <div className="container mx-auto p-4">
        <div className='flex md:flex-row flex-col items-center md:items-start w-full'>
          <div className='p-8 bg-white flex flex-col gap-y-3 md:w-1/3'>
            <h1 className="text-3xl md:flex hidden font-bold mb-8">Blog Topics</h1>
            <div className="flex rounded-md py-1 px-1 border gap-x-3 w-full items-center mb-8">
              <svg
                className="h-5 w-5 ml-2 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                className="border-none outline-none px-3 py-2"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>
            <div className="md:flex md:flex-col hidden rounded-md text-start ">
              <h2 className="text-lg font-semibold mb-5">All Blog Posts</h2>
              <ul className='flex flex-col gap-y-5 text-gray-500'>
                {mainfilteredPosts.map((post, index) => (
                  <div  className= " cursor-pointer hover:text-violet-700" onClick={()=>handlePostClick(post)}>
                  {/*  */}
                    <li>{post.title}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex h-full items-start p-8 flex-col'>
            <h1 className="text-3xl font-bold px-4 mb-4 ">Recent Blog Posts</h1>

            {/* this div was link before */}

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <div key={index} className="rounded-md p-4 border border-violet-400 hover:bg-violet-200 transition-colors " onClick={()=>handlePostClick(post)}>
                    
                      <div className=' mb-4'>
                        <img src={post.imgurl} alt="image" />
                      </div>
                      <div className="text-sm text-violet-700 font-semibold mb-2">
                        {post.author} · {post.date}
                      </div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className=' text-sm text-gray-400'>{post.description}</p>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col items-center md:items-start w-full'>
          <div className=' bg-white flex flex-col gap-y-3 p-8 md:w-5/6'>
            <h1 className="text-3xl font-bold text-start mb-8">Subscribe to our Newsletter</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">FIRST NAME*</label>
                  <input
                    type="text"
                    id="firstName"
                    name= "First_Name"
                    className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">LAST NAME*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="Last_Name"
                    className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email*</label>
              <input
                type="email"
                id="email"
                name="Email"
                className=" appearance-none border w-full py-3 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
              />
              {error && <div className="text-red-500">{error}</div>}
              <button
                type="submit"
                className="bg-violet-700 hover:bg-gradient-to-br from-violet-900 via-violet-600 to-violet-200 transition-all duration-150 text-white w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
          <div className='flex h-full items-start p-8 flex-col'>
            <h1 className="text-3xl font-bold px-4 mb-4">All Blog Posts</h1>
                {/* this div was link */}
            <div to="/blogPage">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mainfilteredPosts.map((post, index) => (
                  <div key={index} className="rounded-md p-4 border border-violet-400 hover:bg-violet-200 transition-colors " onClick={()=>handlePostClick(post)}>
                    
                      <div className='mb-4'>
                        <img src={post.imgurl} alt="" />
                      </div>
                      <div className="text-sm text-violet-700 font-semibold mb-2">
                        {post.author} · {post.date}
                      </div>
                      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                      <p>{post.description}</p>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >


    </div >
  );
}

export default Blog;