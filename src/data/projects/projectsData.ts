import { IProject } from '@/interfaces/interfaces'

export const allProjects: IProject[] = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptatum magnam ullam, tempore exercitationem.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'JavaScript' },
      { name: 'Docker' },

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
    image: '/assets/projects/project-1.png',
    live: '',
    github: '',
  },

  {
    num: '02',
    category: 'fullstack',
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptatum magnam ullam, tempore exercitationem.',
    stack: [{ name: 'Next.JS' }, { name: 'Tailwind CSS' }, { name: 'Node JS' }],
    image: '/assets/projects/project-2.png',
    live: '',
    github: '',
  },

  {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptatum magnam ullam, tempore exercitationem.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }],
    image: '/assets/projects/project-3.png',
    live: '',
    github: '',
  },
]
