import drumkit from '../images/drumkit.png'
import hotstar from "../images/hotstar.png"
import restaurant from "../images/restaurant.png"
import weatheraapp from '../images/weatherapp.png'
import portfolio from "../images/portfolio.png"
import todos from '../images/todos.png'
import uber from "../images/uber.png"

export const Bio = {
  name: "HariShankar",
  roles: [
    "Full Stack Developer",
    "frontend Developer",
    "Backend Developer",
  ],
  description:
    " I’m a Full-Stack Developer skilled in MERN stack building scalable apps with real-time features, secure APIs, and optimized UI/UX. Let’s connect!",
  github: "https://github.com/HarishankarPriyadarshi",
  resume:
    "https://drive.google.com/file/d/1dfuYL2NIKjuSB-WWU4qyOfZojP2UqzWb/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/harishankar-priyadarshi-a92a8b212/",
  twitter: "https://twitter.com",
  insta: "https://www.instagram.com/who_i_am_423",
  facebook: "https://www.facebook.com",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },

      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      // {
      //   name: "Next Js",
      //   image:
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      // },


      // {
      //   name: "Material UI",
      //   image:
      //     "data:image/png;base64,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",
      // },
      // {
      //   name: "Flutter",
      //   image:
      //     "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      // },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      // {
      //   name: "Graph Ql",
      //   image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      // },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "Prisma",
        image: "https://logowik.com/content/uploads/images/prisma2244.jpg"
      },
    ],
  },
  {
    title: "Android",
    skills: [
      // 
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "AWS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s"
      },
      {
        name: "Git",
        image:
          "data:image/png;base64,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"
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s",
      },

      {
        name: "Figma",
        image:
          "https://e7.pngegg.com/pngimages/431/965/png-clipart-figma-designer-computer-icons-material-design-design-rectangle-poster-thumbnail.png"
      },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://www.ziostechsolutions.com/static/media/ziostech_logo-footer.165ad1b331df2be89001.png",
    role: "Software Engineer Intern",
    company: "ZiostechSolutions",
    date: "Dec 2024 - Present ",
    desc: "Developed and optimized backend services for a school management system with role-based authentication, secure data handling (PostgreSQL, Prisma ORM), and RESTful APIs for key functionalities. Resolved performance issues, ensured seamless frontend integration, and enhanced system reliability. Also built a responsive company portfolio website using React.js, optimizing UI/UX with real-time backend updates.",
    skills: [
      "HTML",
      "CSS",
      "React Js",
      "RestAPI",
      "Node js",
      "AWS S3",
      "EC2",
      "Express Js",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "Prsima",

    ],
    //doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
  },
  // {
  //   id: 0,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
  //   role: "Frontend Engineer Intern",
  //   company: "Neurobit",
  //   date: "June 2023 - Present",
  //   desc: "Working on the frontend of the web application using ReactJS, Redux, and Material UI.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "NodeJs",
  //     "Material UI",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //   ],
  //   doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  // },

];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/en/1/1f/National_Institute_of_Technology%2C_Raipur_Logo.png",
    school: "National Institute of Technology, Raipur",
    date: "2020 - 2024",
    grade: "CPI: 8.16/10",
    desc: "Completed a Bachelor's degree in Information Technology at NIT Raipur, gaining expertise in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    degree: "Bachelor of Technology - BTech, Information Technology",
  },
  {
    id: 1,
    img: "https://pbs.twimg.com/profile_images/1645719908247031808/GQDKrxnF_400x400.jpg",
    school: "C.P.P. College, Hisar, Bourhar, Madhubani",
    date: "2017 - 2019",
    grade: "84.6%",
    desc: "Completed Class 12th under the BSEB Board with a focus on Science.",
    degree: "Class 12th (BSEB), Science",
  },
  {
    id: 2,
    img: "https://pbs.twimg.com/profile_images/1645719908247031808/GQDKrxnF_400x400.jpg",
    school: "High School Sonai, Madhubani",
    date: "2015 - 2017",
    grade: "82.4%",
    desc: "Completed Class 10th under the BSEB Board with a focus on Science.",
    degree: "Class 10th (BSEB), Science",
  },
];



export const projects = [
  {
    id: 10,
    title: "Uber Web App",
    date: "Jan 2025 - Present",
    description:
      "Uber Web Clone is a MERN stack-based ride-hailing web application that enables real-time communication between users and captains using WebSockets. It features real-time ride requests, notifications, and dynamic ride tracking for a seamless user experience.",
    image:
      uber,
    tags: [
      "MERN Stack",
      "WebSockets",
      "Socket.IO",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "Tailwind CSS",
    ],
    category: "web app",
    github: "https://github.com/HarishankarPriyadarshi/Uber-WebApp",
    webapp: "https://github.com/HarishankarPriyadarshi/Uber-WebApp"
  },

  // {
  //   id: 0,
  //   title: "Podstream",
  //   date: "Apr 2023 - May 2023",
  //   description:
  //     "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
  //   tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Podstream",
  //   webapp: "https://podstream.netlify.app/",
  //   member: [
  //     {
  //       name: "Rishav Chanda",
  //       img: "https://avatars.githubusercontent.com/u/64485885?v=4",
  //       linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  //       github: "https://github.com/rishavchanda/",
  //     },
  //     {
  //       name: "Upasana Chaudhuri",
  //       img: "https://avatars.githubusercontent.com/u/100614635?v=4",
  //       linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
  //       github: "https://github.com/upasana0710",
  //     },
  //   ],
  // },
  {
    id: 11,
    title: "Weather App",
    date: "2024",
    description:
      "A simple and intuitive weather application built using React.js, HTML, and CSS, integrated with the OpenWeather API to provide real-time weather updates, temperature details, and many details based on user input.",
    image:
      weatheraapp,
    tags: [
      "React.js",
      "OpenWeather API",
      "HTML",
      "CSS",
      "REST API",
      "Axios",
    ],
    category: "web app",
    github: "https://github.com/HarishankarPriyadarshi/WeatherApp",
    webapp: "https://weathermonitoring.netlify.app/", // Replace with actual deployed app link
  },

  {
    id: 12,
    title: "Drum Kit",
    date: "October 2023",
    description:
      "Developed an interactive drum kit using HTML, CSS, and JavaScript. Implemented keyboard event listeners to trigger unique drum sounds when corresponding keys are pressed. Enhanced the user experience with CSS animations for visual feedback on keypress. The project is deployed online for public access.",
    image:
      drumkit,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Event Listeners",
      "Audio API",
      "Animations",
    ],
    category: "web app",
    github: "https://github.com/HarishankarPriyadarshi/Drum-kit",
    webapp: "https://harishankarpriyadarshi.github.io/Drum-kit/"
  },

  {
    id: 13,
    title: "Todo App",
    date: "2024",
    description:
      "A simple and responsive Todo App built using React and Context API. It allows users to add, edit, delete, and mark tasks as complete. Todos are saved in local storage, ensuring persistence even after a page refresh. The app features a clean UI built with Tailwind CSS for a seamless user experience.",
    image:
      todos,
    tags: [
      "React.js",
      "Context API",
      "useState",
      "useEffect",
      "Tailwind CSS",
      "LocalStorage",
    ],
    category: "web app",
    github: "https://github.com/HarishankarPriyadarshi/TodoApp", // Replace with actual GitHub link
    webapp: "https://github.com/HarishankarPriyadarshi/TodoApp", // Replace with actual deployed app link
  },

  {
    id: 14,
    title: " Restaurant sales analysis",
    date: "2024",
    description:
      "Performed an in-depth analysis of restaurant data in Bangalore to extract insights on locations, cuisine types, customer ratings, votes, and online delivery services. The project helps potential restaurant owners and franchisees make informed decisions to maximize profitability.",
    image:
      restaurant,
    tags: [
      "Data Analysis",
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
    category: "machine learning",
    github: "https://github.com/HarishankarPriyadarshi/Restaurant-Sales-Analysis",
    webapp: "https://github.com/HarishankarPriyadarshi/Restaurant-Sales-Analysis",
  },
  {
    id: 15,
    title: "Disney+ Hotstar Clone",
    date: "2023",
    description:
      "Developed a frontend replica of the Disney+ Hotstar streaming platform using HTML, CSS, and JavaScript. Implemented interactive features such as a carousel, card slider, and video card interactions, along with CSS gradient effects to enhance the UI experience.",
    image:
      hotstar,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Carousel",
      "Card Slider",
      "CSS Gradients",
    ],
    category: "web app",
    github: "https://github.com/HarishankarPriyadarshi/Hotstar-clone-",
    webapp: "https://harishankarpriyadarshi.github.io/Hotstar-clone-/"
  },
  {
    id: 16,
    title: "Personal Portfolio Website",
    date: "2025",
    description:
      "A sleek and responsive portfolio website built with React.js and styled-components. It showcases projects, skills, and experience, featuring animations, and an interactive UI. The website is fully responsive and optimized for performance.",
    image: portfolio,
    tags: [
      "React.js",
      "Styled Components",
      "Framer Motion",
      "JavaScript",
      "CSS",
      "Dark Mode",
      "Responsive Design",
    ],
    category: "web app",
    github: "https://github.com/HarishankarPriyadarshi/myportfolio",
    webapp: "https://harishankarportfolio423.netlify.app/",
  },

];

export const TimeLineData = [
  { year: 2017, text: "Completed Class 10th (BSEB Board) at High School Sonai, Madhubani" },
  { year: 2019, text: "Completed Class 12th (BSEB Board) at C.P.P. College, Hisar, Bourhar, Madhubani" },
  { year: 2020, text: "Started B.Tech in Information Technology at NIT Raipur" },
  { year: 2024, text: "Worked on a School Management System at Ziostech Solutions" },
  { year: 2024, text: "Graduated from NIT Raipur" },
  { year: 2025, text: "Developed an Uber Web Clone using the MERN stack with real-time WebSockets integration" },
];

