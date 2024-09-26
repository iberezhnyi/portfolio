import { IProject } from '@/interfaces/interfaces'

export const allProjects: IProject[] = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Water Tracker',
    team: true,
    description:
      'Is an app that allows users to track their daily water consumption',
    stack: [
      { name: 'React JS' },
      { name: 'MongoDB' },
      { name: 'JWT' },
      { name: 'Emotion Styled' },
      { name: 'Node JS' },
      { name: 'Express JS' },
      { name: 'Swagger' },

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
    image: '/assets/projects/water-tracker-project.jpg',
    live: 'https://anzhela-ostrovska1.github.io/goit-group2-react-nodejs/',
    github: {
      frontend:
        'https://github.com/Anzhela-Ostrovska1/goit-group2-react-nodejs',

      backend: 'https://github.com/yaromatv/watertracker-backend',
    },
  },

  {
    num: '02',
    category: 'frontend',
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
    num: '03',
    category: 'frontend',
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
]
