export interface Template {
    id: string
    label: string
    imageUrl: string
    initialContent: string
}


export const templates: Template[] = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
        <h1>Software Development Proposal</h1>
        <h2>Project Overview</h2>
        <p>Provide a brief summary of the software project, including goals and objectives.</p>
        <h2>Scope of Work</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Timeline and milestones</li>
        </ul>
        <h2>Budget</h2>
        <p>Estimated cost and payment schedule.</p>
        <h2>Contact</h2>
        <p>Your Name<br>Your Company<br>Email | Phone</p>
      `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
        <h1>Project Proposal</h1>
        <h2>Introduction</h2>
        <p>Briefly introduce the project and its importance.</p>
        <h2>Objectives</h2>
        <ul>
          <li>Objective 1</li>
          <li>Objective 2</li>
        </ul>
        <h2>Methodology</h2>
        <p>Describe the steps and approach you’ll take to complete the project.</p>
        <h2>Timeline</h2>
        <p>Include key phases and expected completion dates.</p>
        <h2>Conclusion</h2>
        <p>Summarize the value and impact of the project.</p>
      `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
        <p>Your Name<br>
        Your Company<br>
        Address<br>
        City, State, ZIP Code</p>
        <p>Date</p>
        <p>Recipient Name<br>
        Their Company<br>
        Address<br>
        City, State, ZIP Code</p>
        <p>Dear [Recipient Name],</p>
        <p>[Start your letter with a formal greeting and get straight to the point.]</p>
        <p>Thank you,<br>
        [Your Name]</p>
      `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
        <h1>Your Name</h1>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: you@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>LinkedIn: linkedin.com/in/yourname</li>
        </ul>
        <h2>Summary</h2>
        <p>Brief summary about your professional background and career goals.</p>
        <h2>Experience</h2>
        <h3>Job Title – Company Name</h3>
        <p><em>MM/YYYY – Present</em></p>
        <ul>
          <li>Responsibility or achievement</li>
        </ul>
        <h2>Education</h2>
        <p><strong>Degree</strong> – University Name<br>Graduation Year</p>
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
        </ul>
      `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
        <p>Dear Hiring Manager,</p>
        <p>I am writing to express my interest in the [Job Title] position at [Company Name]. I believe my skills and background make me a strong fit for this role.</p>
        <p>[Highlight your experience, achievements, and interest in the company.]</p>
        <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to your team.</p>
        <p>Sincerely,<br>Your Name</p>
      `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
        <p>Your Name<br>
        Your Address<br>
        City, State, ZIP Code</p>
        <p>Date</p>
        <p>Recipient Name<br>
        Their Address<br>
        City, State, ZIP Code</p>
        <p>Dear [Recipient Name],</p>
        <p>[Write your letter here. Keep it clear and concise.]</p>
        <p>Sincerely,<br>
        Your Name</p>
      `
    }
];
