import { IProject } from '@/interfaces/interfaces'

export const allProjects: IProject[] = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Planner APP',
    team: false,
    description:
      'An APP, designed to help users manage their daily tasks. The app includes user authentication, data persistence and user-friendly interface',
    stack: [
      { name: 'TypeScript' },
      { name: 'React JS' },
      { name: 'MongoDB' },
      { name: 'JWT' },
      { name: 'Emotion Styled' },
      { name: 'Nest JS' },

      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },

      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },

      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
      // { name: 'OavaScrOt HTMO' },
    ],

    image: '/assets/projects/planner-project.png',
    live: 'https://iberezhnyi.github.io/planner/',
    github: {
      frontend: 'https://github.com/iberezhnyi/planner',
      backend: 'https://github.com/iberezhnyi/planner-backend',
    },
  },

  {
    num: '02',
    category: 'fullstack',
    title: 'Water Tracker APP',
    team: true,
    description:
      'is an App that allows users to track their daily water consumption',
    stack: [
      { name: 'React JS' },
      { name: 'MongoDB' },
      { name: 'JWT' },
      { name: 'Emotion Styled' },
      { name: 'Node JS' },
      { name: 'Express JS' },
      { name: 'Swagger' },
    ],

    image: '/assets/projects/water-tracker-project.jpg',
    live: 'https://anzhela-ostrovska1.github.io/goit-group2-react-nodejs/',
    github: {
      frontend:
        'https://github.com/Anzhela-Ostrovska1/goit-group2-react-nodejs',

      backend: 'https://github.com/yaromatv/watertracker-backend',
    },
  },

  {
    num: '03',
    category: 'fullstack',
    title: 'Phone book APP',
    team: false,
    description:
      'An APP for managing personal contacts. Users can add, and delete contacts, with secure authentication and a simple, intuitive interface for easy contact management.',
    stack: [
      { name: 'React JS' },
      { name: 'MongoDB' },
      { name: 'JWT' },
      { name: 'Emotion Styled' },
      { name: 'Node JS' },
      { name: 'Express JS' },
    ],

    image: '/assets/projects/phonebook-project.png',
    live: 'https://iberezhnyi.github.io/phonebook/',
    github: {
      frontend: 'https://github.com/iberezhnyi/phonebook',
      backend: 'https://github.com/iberezhnyi/phonebook-backend',
    },
  },

  {
    num: '04',
    category: 'JavaScript',
    title: 'Filmoteka',
    team: true,
    description:
      'A website with a responsive layout. Pagination functionality, enabling seamless page transitions on the website.',
    stack: [
      { name: 'JavaScript' },
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'BEM' },
      { name: 'SASS' },
    ],
    image: '/assets/projects/filmoteka-project.jpg',
    live: 'https://b3dyk.github.io/filmoteka/',
    github: { frontend: 'https://github.com/b3dyk/filmoteka' },
  },

  {
    num: '05',
    category: 'JavaScript',
    title: 'ImageFinder',
    team: false,
    description:
      'A website with a responsive layout. Image search service utilizing functional JavaScript for seamless functionality and user experience.',
    stack: [
      { name: 'JavaScript' },
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'SASS' },
      { name: 'BEM' },
    ],
    image: '/assets/projects/image-finder.png',
    live: 'https://iberezhnyi.github.io/image-finder/',
    github: { frontend: 'https://github.com/iberezhnyi/image-finder' },
  },

  {
    num: '06',
    category: 'Markup',
    title: 'Icecream',
    team: true,
    description:
      'Adaptive design, animations, modal windows, and burger menu for ordering. Hero section - innovative CSS technique for showcasing a pop-up window.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'SASS' },
      { name: 'BEM' },
    ],
    image: '/assets/projects/icecream-project.jpg',
    live: 'https://i-havr.github.io/icecream-team-project/',
    github: { frontend: 'https://github.com/i-havr/icecream-team-project' },
  },

  {
    num: '07',
    category: 'Markup',
    title: 'WebStudio',
    team: false,
    description:
      'Responsive design, transform effects, modal windows. With the help of CSS, SASS mixins and placeholders. Everything was implemented using CSS. JS was not used.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'SASS' },
      { name: 'BEM' },
    ],
    image: '/assets/projects/web-studio-project.jpg',
    live: 'https://iberezhnyi.github.io/web-studio-markup/',
    github: { frontend: 'https://github.com/iberezhnyi/web-studio-markup' },
  },
]
