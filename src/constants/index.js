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
    imagecapgen_tf,
    dmd_acc,
    threejs,

    cpp,
    python,
    ubuntu,
    linux,
    tensorflow,
    julia,
    sklearn,
    matlab,
    jenkins,
    makefile,

    ansys,
    ubc,

    github,
    github_black,
    linkedin,
    twitter,
    car,
    threads,
    arrow,
    contact,
    docs,
    
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
      title: "Scientific Software Developer",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: mobile,
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
      name: "Sklearn",
      icon: sklearn,
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
      name: "HTML",
      icon: html,
    },
    {
      name: "css",
      icon: css,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
    {
      name: "Julia",
      icon: julia,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "GitHub",
      icon: github_black,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "MakeFile",
      icon: makefile,
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
        "Congratulations, this thesis is a nice piece of work!",
      name: "Mauricio Ponga",
      designation: "Associate Professor",
      company: "UBC",
      image: "https://mech.ubc.ca/mauricio-ponga/files/2020/02/2017-07-10-Mauricio-Ponga-004-scaled-e1581097853586.jpg",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7123133825777373186/",
    },
  ];
  
  const projects = [
    {
      name: "Image Caption Generator",
      description:
        "A web-based image caption generator with TensorFlow, enabling users to swiftly generate descriptive captions by uploading images. Docker containerized and seamlessly deployed via GitHub Actions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: imagecapgen_tf,
      source_code_link: "https://github.com/Delaunay-I/image_cap_generator",
    },
    {
      name: "Convergence Acceleration Algorithm",
      description:
        "Data-driven algorithm accelerates simulation solver runtime by generating over-relaxation updates from user-input solution data. Fully autonomous, no solver information required.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: dmd_acc,
      source_code_link: "https://github.com/Delaunay-I/DMD_over-relaxation",
      source_document_link: "http://hdl.handle.net/2429/86199",
    },
  ];

  export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'mailto:amirmsh@student.mail.ca',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Delaunay-I',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/amirmsh/',
    }
];
  
  export { services, technologies, experiences, testimonials, projects };
  