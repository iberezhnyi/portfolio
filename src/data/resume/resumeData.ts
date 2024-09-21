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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',

  info: [
    { fieldName: 'Name', fieldValue: 'Ihor Berezhnyi' },
    { fieldName: 'Phone', fieldValue: '+38 (063) 111 11 11' },
    { fieldName: 'Experience', fieldValue: '1+ Year' },
    { fieldName: 'Nationality', fieldValue: 'American' },
    { fieldName: 'Email', fieldValue: 'iberezhnyi@gmail.com' },
    { fieldName: 'Telegram', fieldValue: '@iberezhnyi' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'English, Ukrainian, Russian' },
  ],
}

const experience: IExperience = {
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2024-present',
    },

    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2023',
    },

    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2022-2023',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },

    {
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2024',
    },
  ],
}

const education: IEducation = {
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',
  items: [
    {
      institution: 'GoIT',
      degree: 'Full Stack Developer',
      duration: '2023-2024',
    },
  ],
}

const skills: ISkills = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel bibendum ipsum. Integer vel libero vel velit sagittis tincidunt. In hac habitasse platea dictumst.',
  skillList: [
    { icon: 'FaHtml5', name: 'HTML5' },
    { icon: 'FaCss3', name: 'CSS3' },
    { icon: 'FaJs', name: 'JavaScript' },
    { icon: 'FaReact', name: 'React' },
    { icon: 'FaFigma', name: 'Figma' },
    { icon: 'FaNodeJs', name: 'Node.js' },
    { icon: 'SiTailwindcss', name: 'Tailwind CSS' },
    { icon: 'SiNextdotjs', name: 'Next.js' },
  ],
}

export const technologies: ITechnology[] = [
  {
    name: 'HTML 5',
    icon: '/assets/icons/tech/html.png',
  },

  {
    name: 'CSS 3',
    icon: '/assets/icons/tech/css.png',
  },

  {
    name: 'JavaScript',
    icon: '/assets/icons/tech/javascript.png',
  },

  {
    name: 'TypeScript',
    icon: '/assets/icons/tech/typescript.png',
  },

  {
    name: 'Node JS',
    icon: '/assets/icons/tech/nodejs.png',
  },

  {
    name: 'React JS',
    icon: '/assets/icons/tech/reactjs.png',
  },

  {
    name: 'Next JS',
    icon: '/assets/icons/tech/next.png',
  },

  {
    name: 'Nest JS',
    icon: '/assets/icons/tech/nest.png',
  },

  {
    name: 'Redux',
    icon: '/assets/icons/tech/redux.png',
  },

  {
    name: 'MongoDB',
    icon: '/assets/icons/tech/mongodb.png',
  },

  {
    name: 'Tailwind CSS',
    icon: '/assets/icons/tech/tailwind.png',
  },

  {
    name: 'figma',
    icon: '/assets/icons/tech/figma.png',
  },

  {
    name: 'git',
    icon: '/assets/icons/tech/git.png',
  },

  // {
  //   name: 'Three JS',
  //   icon: '/assets/icons/tech/threejs.svg',
  // },

  {
    name: 'rest',
    icon: '/assets/icons/tech/rest.png',
  },

  {
    name: 'styledComponents',
    icon: '/assets/icons/tech/styled-components.png',
  },

  {
    name: 'docker',
    icon: '/assets/icons/tech/docker.png',
  },
]

export { about, experience, education, skills }
