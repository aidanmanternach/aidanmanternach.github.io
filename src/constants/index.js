import {
    mobile,
    backend,
    creator,
    web,
    software_engineer,
    machine_learning,
    computer_security,
    data_science,
    c,
    cpp,
    java,
    javascript,
    python,
    pytorch,
    docker,
    git,
    mongodb,
    american_express,
    extreme_waves,
    ucsd,
    rubiks_cube,
    pantrypal,
    research,
    reciperecommendation,
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
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: software_engineer,
    },
    {
      title: "Machine Learning Engineer",
      icon: machine_learning,
    },
    {
      title: "Computer Security Engineer",
      icon: computer_security,
    },
    {
      title: "Data Science Engineer",
      icon: data_science
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    // {
    //   name: "Java",
    //   icon: java,
    // },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "UCSD Computer Science Tutor",
      company_name: "University of California San Diego",
      icon: ucsd,
      iconBg: "#383E56",
      date: "September 2023 - December 2024",
      points: [
        "Instructional assistant for Accelerated Introduction to Programming, conducted one-on-one tutoring, resolving 150+ student tickets while also proctoring exams, code reviews, and project demos.",
        "Reviewed and edited educational material, worksheets, and programming assignments.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "American Express",
      icon: american_express,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Built a custom feature drift detection tool and data pipeline leveraging SQL and pySpark to perform analysis and send email alerts with feature drift visualizations, deploying the tool through Airflow.",
      ],
    },
    {
      title: "Computer Engineer Intern",
      company_name: "Extreme Waves",
      icon: extreme_waves,
      iconBg: "#E6DEDD",
      date: "January 2024 - May 2024",
      points: [
        "Engineered a library in MATLAB to streamline and automate testing of phased array devices, by leveraging low level device control.",
        "Collaborated with software lead to design and implement functionality for controlling and debugging hardware.",
        "Developed a customer facing GUI using C\# and Visual Studio to provide easy device control and rapid response.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Rubik's Cube in Space",
      description:
        "Developed a procedural 3D Rubik's Cube animation and starfield effect using GLSL in Shadertoy, leveraging smooth blending, geometric transformations, and dynamic rotations. Integrated lighting models and star rendering techniques for enhanced realism and interactivity.",
      tags: [
        {
          name: "GLSL",
          color: "green-text-gradient",
        },
        {
          name: "ShaderToy",
          color: "pink-text-gradient",
        },
      ],
      image: rubiks_cube,
      source_code_link: "https://www.shadertoy.com/view/MftfWS",
    },
    {
      name: "Pantry Pal",
      description:
        "Designed and led the development of PantryPal, a voice-controlled recipe generator leveraging OpenAI's API to create personalized recipes from user-provided ingredients. Managed backend implementation with MongoDB, improved runtime efficiency by 10%, and followed Agile principles with automated testing and GitHub project management for seamless product delivery.",
      tags: [
        {
          name: "javaFX",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "gradle",
          color: "pink-text-gradient",
        },
      ],
      image: pantrypal,
      source_code_link: "https://github.com/ucsd-cse110-fa23/cse-110-project-team-14",
    },
    {
      name: "Recipe Recommender Systems",
      description:
        "Authored a paper comparing recipe recommendation systems by designing predictive models to estimate user ratings using metadata, interactions, and review text. Benchmarked approaches like latent factor models, Bag-of-Words, and neural network sentiment analysis.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: research,
      source_code_link: reciperecommendation,
    },
  ];
  
  export { services, technologies, experiences, projects };