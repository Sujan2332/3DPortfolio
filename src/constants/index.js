import {
  mobile,
  backend,
  creator,
  web,
  ec2,
  s3,
  jspiders,
  stf,
  express,
  school,
  javascript,
  typescript,
  html,
  css,
  jit,
  render,
  vs,
  reactjs,
  redux,
  tailwind,
  iam,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  something,
  chatsphere,
  qrfind,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GIT",
    icon: git,
  },
  {
    name:"EC2",
    icon:ec2,
  },
  {
    name:"S3",
    icon:s3,
  },
  {
    name:"IAM",
    icon:iam
  },
  {
    name:"VS Code",
    icon:vs
  },
  {
    name:"Render",
    icon:render
  }
];

const experiences = [
  {
    title: "MERN Stack Course",
    company_name: "Jspiders",
    icon: jspiders,
    iconBg: "#383E56",
    date: "July 2024 - Dec 2024",
    points: [
      "Building and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Collaborating with cross-functional teams, including frontend and backend developers, to deliver scalable applications.",
      "Ensuring responsive and mobile-friendly user interfaces through React components and hooks.",
      "Implementing RESTful APIs and integrating them with the frontend using Axios or Fetch for dynamic data handling.",
      "Optimizing application performance and ensuring efficient database queries with MongoDB.",
      "Deploying applications using platforms like Render and AWS for seamless production environments.",
    ],
  },
  {
    title: "B.E.(Computer Science & Engg.)",
    company_name: "Jyothy Institute of Technology",
    icon: jit,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - June 2024",
    points: [
      "Gained deep understanding of computer science fundamentals, including algorithms, data structures, and software engineering principles.",
      "Developed various projects using technologies like Java, Python, C++, and web development frameworks.",
      "Collaborated with peers in academic projects, conducting research and presenting findings on emerging technologies.",
      "Worked on practical hands-on projects, including building and optimizing database systems, creating web applications, and working with mobile app development.",
      "Participated in code debugging sessions, optimizing performance, and ensuring code quality.",
      "Attended Internships on current trends in AI, Machine Learning, and Cloud Computing.",
    ],
  },
  {
    title: "PUC(PCMC)",
    company_name: "St. Francis Composite PU College",
    icon: stf,
    iconBg: "#383E56",
    date: "May 2018 - Mar 2020",
    points: [
      "Studied core subjects including Physics, Chemistry, Mathematics, and Computer Science, with a focus on analytical problem-solving and logical thinking.",
    "Gained foundational knowledge in programming concepts and problem-solving using language like C++.",
    "Developed a strong understanding of mathematics and physics, which helped in algorithmic problem-solving and technical projects.",
    "Worked on academic projects, applying theoretical knowledge to practical use in areas like basic web development and data analysis.",
    "Participated in college-level coding competitions and hackathons to enhance programming and teamwork skills.",
    "Attended workshops and seminars to expand knowledge in fields like AI, data science, and emerging tech.",
    ],
  },
  {
    title: "SSLC",
    company_name: "Indira Convent High School",
    icon: school,
    iconBg: "#E6DEDD",
    date: "Mar 2017 - Mar 2018",
    points: [
      "Focused on foundational education with a strong emphasis on subjects like Mathematics, Science, and English.",
    "Developed critical thinking and problem-solving skills through subjects like Physics and Mathematics.",
    "Participated in school-level extracurricular activities, enhancing teamwork, leadership, and communication skills.",
    "Developed a strong academic foundation that prepared me for advanced learning in technology and engineering.",
    "Achieved academic excellence, consistently ranking among top students in my class.",
    "Engaged in school-level science exhibitions and projects, demonstrating an interest in practical applications of science and technology.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Something Application",
    description:
      "A dynamic social media platform enabling users to post, share images/text,and interact through likes, comments, and shares, with an engaging feed to discover and discuss new content.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name:"ExpressJS",
        color:"pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: something,
    source_code_link: "https://github.com/Sujan2332/Something",
  },
  {
    name: "ChatSphere Application",
    description:
      "A seamless real-time chat app built with React, Node.js, and MongoDB,featuring WebSocket messaging, JWT-secured authentication, user profiles, chats, and chat history,deployed on Render.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name:"ExpressJS",
        color:"pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: chatsphere,
    source_code_link: "https://github.com/Sujan2332/ChatSphere",
  },
  {
    name: "QRFind",
    description:
      `A React-based tool for managing emergency contacts,generating unique QR codes, and printing wristbands, with secure data handling.
      `,
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name:"ExpressJS",
        color:"pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: qrfind,
    source_code_link: "https://github.com/Sujan2332/QRFind",
  },
];

export { services, technologies, experiences, testimonials, projects };
