function generateSlug(title) {
  return title.toLowerCase().replace(/[\s\W-]+/, '-');
}

const jobs = [
      {
        id: '1',
        category: 'Design',
        title: 'Junior UI/UX Designer',
        slug: generateSlug('Junior-UI-UX-Designer'),
        type: 'FULL_TIME',
        image: 'ui-ux-junior.webp',
        experience: '6 – 24 months experience',
        location: 'Noida, Sector 62',
        compensation: 'INR 350,000/ – to INR 650,000/-',
        benefits: [
          'Full-time',
          'Flexible Hours',
          'On-site',
          '6 – 24 months experience'
        ],
        bgImage: "ui-ux-design.webp",

        sDescription: 'Are you ready to design experiences that resonate and redefine the digital realm?',
        lDescription: 'As a Junior UI/UX Designer at Enigma Digital, you will be an integral part of our design team, working to create seamless and innovative digital experiences. You will collaborate with cross-functional teams to design and refine user interfaces that are not only visually compelling but also intuitively functional.',
        responsibilities: [
          "6 months to 2 years of proven experience as a UI/UX Designer or similar role with a track record of designing visually appealing & intuitive interfaces.",
          'Create wireframes, storyboards, user flows, and process flows to effectively communicate interaction and design ideas.',
          'Participate in the development of UI mockups and prototypes that clearly illustrate how sites and apps function and look.',
          "Help maintain design consistency and coherence across the product's interface.",
          'Stay abreast of UI/UX trends and look for creative ideas and inspiration in parallel analogous worlds.',
          "Receive feedback from peers and stakeholders and use it to improve your work.",
        ],
        qualifications: [
          'A portfolio that demonstrates a foundational understanding of UI/UX design principles.',
          'Bachelor’s degree in Design, Computer Science, or a related field, or equivalent practical experience.',
          'Proficiency in a variety of design tools such as Adobe Creative Suite and Figma.',
          'Basic understanding of HTML, CSS, and JavaScript for rapid prototyping purposes.',
          "Excellent visual design skills with sensitivity to user-system interaction.",
          "Ability to solve problems creatively and effectively.",
          "Up-to-date with the latest UI/UX trends, techniques, and technologies.",
          "Excellent communication skills to collaborate with various stakeholders.",
          "Ability to work in a fast-paced, deadline-driven environment.",
        ],
        ourOffers: [
          'A dynamic and creative work environment where your ideas can make a real impact.',
          'A culture that values innovation, collaboration, and personal growth.',
          'Competitive salary and benefits package.',
          'Opportunities for professional development and career advancement.',
          "Access to cutting-edge tools and technologies.",
          "Flexible work arrangements to support work-life balance.",
        ],
        HowToApply: "Please submit your resume, cover letter, and a link to your portfolio showcasing examples of your UI/UX design work to careers@weareenigma.com or apply through the careers section of our website. ",
        message: "Are you ready to design experiences that resonate and redefine the digital realm? Apply now to join the Enigma Digital team as a Junior UI/UX Designer and start crafting the future today!",
        
        note: "Please be aware that a portfolio is a mandatory component of your application. Submissions without a portfolio will not be reviewed, and applicants may not reapply for a period of six months.",

        postingDate:"2023-11-07",
        salMin: "350000",
        salMax: "650000"
    },
    {
      id: '2',
      category: 'SEO',
      title: 'SEO Specialist',
      slug: generateSlug('SEO-Specialist'),
      type: 'FULL_TIME',
      image: 'seo-specialist.webp',
      experience: '2 – 4 years experience',
      location: 'Noida, Sector 62',
      compensation: 'INR 400,000/ – to INR 700,000/-',
      benefits: [
        'Full-time',
        'Flexible Hours',
        'On-site',
        '2 – 4 years experience'
      ],
      bgImage: "seo.webp",

      sDescription: 'Are you passionate about SEO and eager to drive digital excellence?',
      lDescription: 'We are seeking a detail-oriented and data-driven SEO Specialist to join our dynamic team at Enigma Digital. In this role, you will be responsible for developing and implementing effective search engine optimization strategies to increase the online presence and organic traffic of our diverse clientele. Your expertise will be crucial in analysing trends, executing tactical SEO initiatives, and measuring the effectiveness of various campaigns.',
      responsibilities: [
        "Conduct comprehensive keyword research and competitive analysis to identify opportunities for growth.",
        'Develop and implement SEO strategies that align with client objectives and digital marketing goals.',
        'Optimize website content, landing pages, and copy to improve rankings and user experience.',
        "Monitor and report on search metrics, including keyword ranking, SOV, trend analysis, visibility, and organic traffic, using tools like Google Analytics and SEMrush.",
        'Collaborate with content writers to ensure that all content is optimized for search engines.',
        "Stay up-to-date with the latest SEO trends, search algorithm updates, and industry best practices.",
        "Collaborate with the web development team to ensure SEO best practices are properly implemented on newly developed websites and apps.",
        "Work with marketing teams to drive SEO in content creation and content programming. Recommend changes to website architecture, content, linking, and other factors to improve SEO positions for target keywords.",
      ],
      qualifications: [
        '2 – 5 years of proven experience as an SEO Specialist or similar role with a track record of creating & implementing successful SEO strategies, across technology & SaaS industry.',
        'Strong understanding of search engine algorithms and ranking methods.',
        'Experience with SEO industry tools, such as Google Analytics, SEMrush, Screaming Frog, and Adobe Analytics.',
        'Proven ability to complete competitive analysis of other companies within the industry.',
        "Excellent written and verbal communication skills (email, phone, etc. for blogger outreach & partnership opportunities).",
        "Comfortable analysing high volumes of data on a daily basis.",
        "Familiarity with WordPress, Shopify, and other widely used content management systems.",
        "Experience with other aspects of marketing, such as customer growth and promotion, is a plus.",
      ],
      ourOffers: [
        "A role where your skills and contributions will have a significant impact on the company's growth and success.",
        'A collaborative and innovative work environment with a team of experts in digital marketing.',
        'Competitive salary and performance incentives.',
        'Opportunities for professional development and career progression.',
        "Access to the latest tools and technologies in digital marketing.",
        "Flexible working environment and a commitment to work-life balance.",
      ],
      HowToApply: "Please submit your resume, cover letter, and any relevant case studies or examples of past SEO successes to careers@weareenigma.com or apply through the careers section of our website.",
      message: "If you are passionate about SEO and eager to drive digital excellence, apply to become Enigma Digital's next SEO Specialist and help shape the future of digital engagement!",

      postingDate:"2023-11-07",
      salMin: "400000",
      salMax: "700000"
    },
    {
      id: '3',
      category: 'Development',
      title: 'Front-End Developer',
      slug: generateSlug('Front-End-Developer'),
      type: 'FULL_TIME',
      image: 'front-end.webp',
      experience: '1 – 2 years experience',
      location: 'Noida, Sector 62',
      compensation: 'INR 400,000/ – to INR 700,000/-',
      benefits: [
        'Full-time',
        'Flexible Hours',
        'On-site',
        '1 – 2 years experience'
      ],
      bgImage: "development.webp",

      sDescription: 'Ready to code at the cutting edge of digital innovation?',
      lDescription: 'Enigma Digital is on the lookout for a skilled Front-End Developer with a passion for creating dynamic user interfaces and a keen eye for detail. As a Front-End Developer, you will be at the heart of our development team, translating design concepts into code to produce the visual elements of our applications. You will collaborate closely with our UI/UX designers and back-end developers to deliver high-quality, scalable, and responsive web applications.',
      responsibilities: [
        "Develop new user-facing features with a focus on responsive and adaptive design.",
        'Convert UI/UX design wireframes into actual code that will produce the visual elements of the application.',
        'Ensure the technical feasibility of UI/UX designs.',
        "Optimize applications for maximum speed and scalability.",
        'Assure that all user input is validated before submitting to the back-end services.',
        "Collaborate with other team members and stakeholders, including designers, back-end developers, and project managers.",
        "Maintain and improve the website and optimize applications for maximum speed.",
        "Stay up-to-date on emerging technologies and apply them into operations and activities.",
        "Utilize a variety of markup languages to write web pages.",
        "Maintain brand consistency throughout the design.",
      ],
      qualifications: [
        'A minimum of 1 year of experience in frontend development or a similar role.',
        'Bachelor’s degree in Computer Science or a related field, or equivalent experience.',
        'Proficient understanding of web markup, including HTML5 and CSS3.',
        'Proficient understanding of server-side CSS pre-processing platforms, such as LESS and SASS.',
        "Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery.",
        "Good understanding of advanced JavaScript libraries and frameworks, such as AngularJS, ReactJS, and VueJS.",
        "Proficient understanding of cross-browser compatibility issues and ways to work around them.",
        "Proficient understanding of code versioning tools, such as Git.",
        "Good understanding of SEO principles and ensuring that the application will adhere to them.",
      ],
      ourOffers: [
        'A creative and dynamic work environment where innovation and ideas are always welcome.',
        'Competitive salary and benefits package.',
        'Opportunities for professional growth and development.',
        'A collaborative team that supports each other and works together to achieve common goals.',
        "Access to the latest tools and technologies.",
        "Flexible work hours and remote work options to support a healthy work-life balance.",
      ],
      HowToApply: "Interested candidates should submit a resume, cover letter, and portfolio showcasing recent projects to careers@weareenigma.com or apply through the careers section of our website. Please include links to live websites or code repositories such as GitHub.",
      message: "Ready to code at the cutting edge of digital innovation? Join Enigma Digital as a Front-End Developer and turn visionary designs into reality. Apply now and let's build the future together!",

      postingDate:"2023-11-07",
      salMin: "400000",
      salMax: "700000"
    },
      {
      id: '4',
      category: 'BD',
      title: 'Business Development Manager',
      slug: generateSlug('Business-Development-Manager'),
      type: 'FULL_TIME',
      image: 'bd-manager.webp',
      experience: '2 – 5 years experience',
      location: 'Noida, Sector 62',
      compensation: 'INR 600,000/ – to INR 900,000/- (incentives extra)',
      benefits: [
        'Full-time',
        'Flexible Hours',
        'On-site',
        '2 – 5 years experience'
      ],
      bgImage: "bd.webp",

      sDescription: 'Are you ready to be a catalyst that opens new horizons for business growth worldwide?',
      lDescription: 'We are on the hunt for a driven Business Development Manager to join the ambitious team at Enigma Digital. Your role will be pivotal in identifying new business opportunities, fostering relationships with potential clients, and driving growth. You will be the front line of our company, embodying our passion for digital excellence and commitment to client success.',
      responsibilities: [
        "Identify and develop new business opportunities through networking, industry research, and outreach.",
        'Cultivate strong relationships with potential clients by understanding their business needs and proposing tailored digital solutions.',
        "Prepare and deliver presentations and proposals that effectively communicate Enigma Digital's value proposition.",
        "Negotiate contract terms with clients and work with internal teams to ensure contract fulfillment.",
        'Collaborate with the marketing team to develop strategies that align with business development goals.',
        "Maintain an in-depth knowledge of Enigma Digital's services and industry trends to effectively communicate potential solutions to clients.",
        "Meet and exceed sales targets and contribute to the overall growth of the company.",
        "Attend industry events, conferences, and networking meetups to promote Enigma Digital's services and forge new business relationships.",
        "Provide feedback to the management team on market trends, competitive threats, unmet needs, and opportunities to deliver greater value to customers.",
        "Ensure a seamless transition of client accounts to the service delivery team and stay involved in the account nurturing process.",
      ],
      qualifications: [
        "Bachelor's degree in Business Administration, Marketing, or a related field.",
        'Minimum 3 years of work experience with a proven track record in business development, sales, or a similar role within the digital or technology sectors, working in the international markets.',
        'Strong understanding of digital services and the ability to articulate technical concepts to non-technical clients.',
        'Exceptional communication and negotiation skills.',
        "Ability to build rapport and foster collaborative relationships.",
        "Strategic thinker with a knack for identifying opportunities for growth.",
        "Self-motivated with a results-driven approach.",
        "Proficiency in CRM software and Microsoft Office Suite.",
      ],
      ourOffers: [
        'A dynamic and supportive work environment where innovation thrives.',
        'Competitive salary with performance-based bonuses.',
        'Opportunities for professional growth and advancement.',
        'Comprehensive training on our services and market positioning.',
        "Comprehensive training on our services and market positioning.",
        "Flexible working hours and remote work options to support work-life balance.",
      ],
      HowToApply: "Submit your resume, cover letter, and any relevant work experience or achievements that demonstrate your ability to succeed in this role to careers@weareenigma.com or apply through the careers section of our website. We are looking for candidates who are not just looking for a job but are passionate about building a career in the digital space.",
      message: "As a Business Development Manager at Enigma Digital, you'll have the power to open new horizons for businesses worldwide and be a catalyst for digital transformation. Apply now and let's shape the digital future together!",

      postingDate:"2023-11-07",
      salMin: "600000",
      salMax: "900000"
    },
    {
      id: '5',
      category: 'Accounts',
      title: 'Senior Account Executive',
      slug: generateSlug('Senior-Account-Executive'),
      type: 'FULL_TIME',
      image: 'account-manager-senior.webp',
      experience: ' 2 – 5 years experience',
      location: 'Noida, Sector 62',
      compensation: 'INR 400,000/ – to INR 700,000/- (incentives extra)',
      benefits: [
        'Full-time',
        'Flexible Hours',
        'On-site',
        ' 2 – 5 years experience'
      ],
      bgImage: "account.webp",

      sDescription: 'Ready to play a pivotal role in our continued growth and success worldwide?',
      lDescription: 'Enigma Digital is seeking a seasoned Senior Account Executive to join our dynamic team. In this role, you will be instrumental in nurturing client relationships, expanding our client base, and driving revenue growth. Your strategic insight, exceptional relationship-building skills, and deep understanding of digital services will help our clients achieve their most ambitious marketing and business goals.',
      
      responsibilities: [
        'Manage and grow relationships with existing clients, ensuring their needs are met and expectations exceeded.',
        'Identify upselling and cross-selling opportunities within your client portfolio, expanding the scope of services provided.',
        "Develop a deep understanding of client's business challenges and objectives to propose tailored digital solutions.",
        "Lead client meetings and presentations, articulating the strategic value of Enigma Digital's services.",
        'Collaborate with project managers and creative teams to ensure the successful delivery of digital projects.',
        'Monitor account performance, reporting on progress and outcomes to both clients and internal stakeholders.',
        "Negotiate contracts and close agreements, maintaining a balance between client satisfaction and Enigma Digital's interests.",
        'Stay abreast of industry trends and digital innovations to serve as a trusted advisor to clients.',
        "Provide feedback to the internal teams on market trends and client feedback to guide the evolution of Enigma Digital's offerings.",
        "Meet and exceed targets and contribute to the company's revenue and strategic growth objectives."
      ],
      qualifications: [
        "Bachelor's degree in Business, Marketing, Communications, or a related field.",
        'A minimum of 2 years of experience in account management or a client-facing role within the digital, technology or marketing industry.',
        'Proven track record of meeting and exceeding KPIs.',
        'Strong understanding of digital marketing, web design, UI UX and development processes.',
        'Exceptional communication, negotiation, and presentation skills.',
        'Strategic thinker with an ability to identify opportunities for growth within client accounts.',
        'Proficient in CRM software and Microsoft Office Suite.',
        'Ability to manage multiple accounts while seeking new opportunities.',
        'Excellent listening, negotiation, and presentation abilities.',
        'Strong verbal and written communication skills.'
      ],
      ourOffers: [
        'A competitive salary with a rewarding incentive structure.',
        'A vibrant and creative work environment where innovation is at the heart of everything we do.',
        'Opportunities for career advancement and professional development.',
        'A supportive team that values collaboration and open communication.',
        'Access to cutting-edge tools and technologies.',
        'Flexible work arrangements to support a healthy work-life balance.'
      ],
      HowToApply: "To apply, please submit your resume detailing your relevant experience and a cover letter explaining why you are the ideal candidate for this role to careers@weareenigma.com or apply through the careers section of our website. Include any significant achievements that demonstrate your ability to perform in a high-paced, innovative digital environment.",
      message: "Elevate your career to new heights with Enigma Digital. As a Senior Account Executive, you'll play a pivotal role in our continued growth and success. Apply now to join our team of digital pioneers!",

      postingDate:"2023-11-07",
      salMin: "400000",
      salMax: "700000"
    },
    {
      id: '6',
      category: 'Design',
      title: 'UI UX Design Intern',
      slug: generateSlug('UI-UX-Design-Intern'),
      type: 'PART_TIME',
      image: 'design-intern.webp',
      experience: '3/6 months',
      location: 'Hybrid, Noida, Sector 62',
      compensation: 'Paid Internship',
      benefits: [
        'Part-time',
        'Flexible Hours',
        'Hybrid/On-site',
        "3/6 months",
      ],
      bgImage: "ui-ux-design.webp",

      sDescription: 'Kickstart your design career with an internship at Enigma Digital.',
      lDescription: 'As a Design Intern at Enigma Digital, you will have the unique opportunity to contribute to real-world projects that redefine the digital space. You will work closely with our team of experienced designers to learn the ropes of digital design, from conceptualization to execution. This internship is designed to offer you a hands-on experience in the industry while contributing to impactful projects.',
      responsibilities: [
        'Assist in the creation of digital design assets for a variety of platforms, including web, mobile, and social media.',
        'Participate in brainstorming sessions and contribute creative ideas for campaign strategies and design concepts.',
        'Support the design team in researching design trends, user behaviours, and new technologies.',
        'Help prepare presentations and mock-ups for client pitches and internal reviews.',
        'Collaborate with cross-functional teams, including marketing, development, and product management, to ensure design consistency and coherence.',
        'Receive and act on feedback from senior design staff to refine and iterate on design projects.',
        'Aid in the maintenance of design files and assets, ensuring they are organized and up-to-date.',
        'Engage in learning opportunities, such as workshops and training sessions, to enhance your design skills and knowledge.'
      ],
      qualifications: [
        "Currently enrolled in or a recent graduate of a degree program in Graphic Design, Visual Arts, or a related field.",
        "A portfolio showcasing design skills and a keen eye for aesthetics.",
        "Basic proficiency in design software (e.g., Adobe Creative Suite, Figma).",
        "A strong desire to learn and grow within the field of digital design.",
        "Excellent communication skills and the ability to work well in a team environment.",
        "An understanding of design principles, typography, colour theory, and user-centred design practices.",
        "Ability to manage time effectively and meet deadlines.",
        "A positive attitude and eagerness to take on new challenges."
      ],
      ourOffers: [
        'A collaborative and creative work atmosphere where ideas are valued and growth is encouraged.',
        'Exposure to real-world design projects for top-tier clients.',
        'Mentorship from industry professionals with years of experience.',
        'A chance to build your professional portfolio with diverse and challenging assignments.',
        'A flexible schedule to accommodate your academic commitments.',
        'A certificate of internship completion.'
      ],
      HowToApply: "If you're passionate about design and eager to learn in a fast-paced, innovative environment, we'd love to hear from you. Please submit your resume, a cover letter, and a link to your online portfolio at to careers@weareenigma.com or apply through the careers section of our website. ",
      message: "Kickstart your design career with an internship at Enigma Digital. Apply today and take the first step towards becoming a digital design expert in an environment that celebrates creativity and innovation!",

      postingDate:"2023-11-07",
      salMin: "84000",
      salMax: "120000"
    },
    {
      id: '7',
      category: 'Development',
      title: 'Frontend Development Intern',
      slug: generateSlug('Frontend-Development-Intern'),
      type: 'PART_TIME',
      image: 'front-end-intern.webp',
      experience: '3 months',
      location: 'Hybrid, Noida, Sector 62',
      compensation: 'Paid Internship',
      benefits: [
        'Part-time',
        'Flexible Hours',
        'Hybrid/On-site',
        "3 months",
      ],
      bgImage: "development.webp",

      sDescription: 'Dive into the world of front-end development with an internship at Enigma Digital.',
      lDescription: 'As a Junior UI/UX Designer at Enigma Digital, you will be an integral part of our design team, working to create seamless and innovative digital experiences. You will collaborate with cross-functional teams to design and refine user interfaces that are not only visually compelling but also intuitively functional.',
      responsibilities: [
        'Assist in the development of responsive web applications using the latest frontend technologies.',
        'Collaborate with UI/UX designers to translate visual concepts into functional online experiences.',
        'Participate in code reviews to maintain high-quality code standards.',
        'Help troubleshoot and resolve bugs or issues to ensure smooth user experiences.',
        'Contribute to the documentation of code and development processes.',
        'Engage in learning and applying best practices for frontend development, including performance optimization and accessibility standards.',
        'Support the team in testing across multiple browsers and platforms to ensure compatibility.',
        'Stay updated with emerging frontend technologies and trends, sharing insights with the team.'
      ],
      qualifications: [
        'Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or a related technical field.',
        'Basic understanding of web markup, including HTML5 and CSS3.',
        'Familiarity with client-side scripting and JavaScript frameworks, such as React.js or Vue.js.',
        'Eagerness to learn and work with new technologies and programming languages.',
        'Strong problem-solving skills and attention to detail.',
        'Ability to work collaboratively in a team environment as well as independently.',
        'Effective communication skills to articulate ideas and technical concepts.',
        'A portfolio or GitHub repository showcasing personal or academic projects is a plus.'
      ],
      ourOffers: [
        'A stimulating work environment where innovation and learning are a constant.',
        "Hands-on experience with real-world projects that impact our client's success.",
        'Guidance and mentorship from experienced frontend developers.',
        'Opportunities to learn and grow your skills in frontend development.',
        'A flexible work schedule to accommodate your academic commitments.',
        'A certificate of internship completion upon successful completion of the internship program.'
      ],
      HowToApply: "If you are passionate about frontend development and eager to make a mark in the digital world, we want to meet you. Please send us your resume, a cover letter, and any relevant work samples or links to your code repositories to careers@weareenigma.com or apply through the careers section of our website",
      message: "Dive into the world of frontend development with an internship at Enigma Digital. Apply now and start shaping the future of digital experiences!",
      
      postingDate:"2023-11-07",
      salMin: "84000",
      salMax: "120000"
    },
    ];

export default jobs;