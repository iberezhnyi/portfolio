import {
  IAboutMe,
  IEducation,
  IExperience,
  ISkills,
  ITechnology,
} from '@/interfaces/interfaces'

const about: IAboutMe = {
  title: 'About Me',
  description:
    'I am a passionate Full-Stack developer with a focus on creating efficient, responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver clean, maintainable code and innovative solutions to complex problems.',

  info: [
    { fieldName: 'Name', fieldValue: 'Ihor Berezhnyi' },
    { fieldName: 'Email', fieldValue: 'iberezhnyi@gmail.com' },
    { fieldName: 'Phone', fieldValue: '+38(063)-738-05-89' },
    { fieldName: 'Telegram', fieldValue: '@iberezhnyi' },
    // { fieldName: 'Experience', fieldValue: '1+ Year' },
    { fieldName: 'Experience', fieldValue: '1+ years learning and practicing' },
    { fieldName: 'Languages', fieldValue: 'English, Ukrainian, Russian' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
  ],
}

const experience: IExperience = {
  title: 'My experience',
  description:
    'As an aspiring developer, I have been focused on building strong foundational skills through personal and collaborative projects.',
  items: [
    {
      company: '"Filin Consult", LLC',
      position: 'Legal advisor',
      description: [
        "Providing legal assistance and guidance to the company's law policies.",
      ],
      duration: '2016-2023',
    },

    {
      company: '"Delawyers", LLC',
      position: 'Legal advisor',
      description: ["Lawyer's assistant."],
      duration: '2014-2016',
    },
  ],
}

const education: IEducation = {
  title: 'My education',
  description:
    'I have developed a deep understanding of full-stack technologies, collaborative team environments, and modern software development practices.',
  items: [
    {
      institution: 'IT Academy GoIT',
      degree: 'Full Stack Developer',
      description: [
        'Designed and developed full-featured web applications using modern technologies like React.js, Node.js, and Express.',
        'Actively contributed to code reviews, promoting best practices and improving code quality.',
        'Implemented responsive and adaptive UI/UX designs, ensuring seamless functionality across various devices and browsers.',
        'Gained hands-on experience in working with APIs, databases (e.g., MongoDB), and deployment tools.',
      ],
      duration: '2023-2024',
    },

    {
      institution: 'National Aviation University (Kyiv)',
      degree: 'Master’s of Law',
      description: [],
      duration: '2009-2014',
    },
  ],
}

const skills: ISkills = {
  title: 'My skills',
  description:
    'I have experience working with a diverse range of front-end and back-end technologies, focusing on building responsive, scalable, and performant web applications.',
}

export const technologies: ITechnology[] = [
  {
    name: 'HTML 5',
    icon: '/assets/icons/tech/html.png',
    iconLib: 'FaHtml5',
  },

  {
    name: 'CSS 3',
    icon: '/assets/icons/tech/css.png',
    iconLib: 'FaCss3',
  },

  {
    name: 'JavaScript',
    icon: '/assets/icons/tech/javascript.png',
    iconLib: 'FaJs',
  },

  {
    name: 'TypeScript',
    icon: '/assets/icons/tech/typescript.png',
    iconLib: 'SiTypescript',
  },

  {
    name: 'Node JS',
    icon: '/assets/icons/tech/nodejs.png',
    iconLib: 'FaNodeJs',
  },

  {
    name: 'React JS',
    icon: '/assets/icons/tech/reactjs.png',
    iconLib: 'FaReact',
  },

  {
    name: 'Next JS',
    icon: '/assets/icons/tech/next.png',
    iconLib: 'SiNextdotjs',
  },

  {
    name: 'Nest JS',
    icon: '/assets/icons/tech/nest.png',
    iconLib: 'SiNestjs',
  },

  {
    name: 'Redux',
    icon: '/assets/icons/tech/redux.png',
    iconLib: 'SiRedux',
  },

  {
    name: 'MongoDB',
    icon: '/assets/icons/tech/mongodb.png',
    iconLib: 'SiMongodb',
  },

  {
    name: 'Tailwind CSS',
    icon: '/assets/icons/tech/tailwind.png',
    iconLib: 'SiTailwindcss',
  },

  {
    name: 'figma',
    icon: '/assets/icons/tech/figma.png',
    iconLib: 'FaFigma',
  },

  {
    name: 'git',
    icon: '/assets/icons/tech/git.png',
    iconLib: 'FaGit',
  },

  // {
  //   name: 'Three JS',
  //   icon: '/assets/icons/tech/threejs.svg',
  //   iconLib: '',
  // },

  {
    name: 'express',
    icon: '/assets/icons/tech/express.png',
    iconLib: 'SiExpress',
  },

  // {
  //   name: 'rest',
  //   icon: '/assets/icons/tech/rest.png',
  //   iconLib: '',
  // },

  {
    name: 'styledComponents',
    icon: '/assets/icons/tech/styled-components.png',
    iconLib: 'SiStyledcomponents',
  },

  // {
  //   name: 'docker',
  //   icon: '/assets/icons/tech/docker.png',
  //   iconLib: 'SiDocker',
  // },
]

export { about, experience, education, skills }
