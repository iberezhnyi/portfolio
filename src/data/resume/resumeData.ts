import {
  IAboutMe,
  IEducation,
  IExperience,
  ISkills,
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

export { about, experience, education, skills }
