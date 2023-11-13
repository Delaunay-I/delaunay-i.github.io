import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
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
    jobit,
    tripguide,
    threejs,

    cpp,
    python,
    ubuntu,
    linux,
    tensorflow,

    ansys,
    ubc,

    github,
    linkedin,
    twitter,
    car,
    threads,
    arrow,
    contact,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Scientific Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Linux",
      icon: linux,
    },
  ];
  
  const experiences = [
    {
      title: "R&D Intern (Software Developer)",
      company_name: "Ansys",
      icon: ansys,
      iconBg: "#383E56",
      date: "July 2023 - Nov 2023",
      points: [
        "Optimized and implemented master’s thesis algorithm and ML model in Ansys, reducing runtime by 10%.",
        "Leveraged pyfluent and UDFs for efficient integration of Python algorithms into ANSYS.",
        "Implemented code using Python on both Windows and Windows Subsystem for Linux (WSL) platforms.",
        "Developed modular and maintainable algorithm classes using OOP concepts in Python.",
        "Ensured robust code quality through unit testing and continuous integration with Jenkins.",
        "Collaborated with Ansys developers on complex problem-solving."
      ],
    },
    {
      title: "Graduate Research Assistant",
      company_name: "University of British Columbia",
      icon: ubc,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Oct 2023",
      points: [
        "Developed a data-driven model using PCA, DMD, and ML, achieving instant convergence for linear problems and a 50% speedup for non-linear problems.",
        "Implemented the algorithm in C++ and Python, exclusively utilizing Linux Ubuntu systems.",
        "Ensured code robustness through unit tests and Jenkins CI.",
        "Collaborated with a team of developers to integrate code into the main software branch.",
        "Conducted code reviews and resolved merge conflicts using Git to ensure seamless feature integration",
        "Trained an XGBoost model for algorithm automation, achieving 97% accuracy",
        "Mitigated class imbalance using oversampling, undersampling, and ensemble methods",
        "Optimized models via hyper-parameter tuning and feature engineering, achieving a precision of 93.7%."
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "University of British Columbia",
      icon: ubc,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Dec 2023",
      points: [
        "Conducted engaging tutorials for 200+ students in Fluid Mechanics, Linear Algebra, and Numerical Algorithms.",
        "Guided students through assignments involving MATLAB and Python programming, as well as visualizations.",
        "Offered personalized assistance in Numerical Algorithms, Data Visualization, and Linear Algebra tasks.",
        "Fostered a supportive learning environment by addressing individual student needs and collaborating with faculty to enhance course materials.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];
  
  export { services, technologies, experiences, testimonials, projects };
  