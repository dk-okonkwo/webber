import sample from '../assets/images/IMG_1480.jpg'

export interface project {
  name: string
  img: string
  tags: string[]
  description: string
  link?: string
}

export const MyProjects: project[] = [
  {
    name: 'Talk Wide',
    img: sample,
    tags: ['Web', 'Mobile'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem distinctio similique nulla vel optio reprehenderit alias tenetur molestiae enim, cupiditate ea, quod voluptates, hic itaque ipsam maxime doloribus corrupti quas!',
    link: 'www.change.org',
  },
  {
    name: 'WPM Fee Tool',
    img: sample,
    tags: ['Web'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem distinctio similique nulla vel optio reprehenderit alias tenetur molestiae enim, cupiditate ea, quod voluptates, hic itaque ipsam maxime doloribus corrupti quas!',
  },
  {
    name: 'FarMulan',
    img: sample,
    tags: ['Embedded', 'Mobile'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem distinctio similique nulla vel optio reprehenderit alias tenetur molestiae enim, cupiditate ea, quod voluptates, hic itaque ipsam maxime doloribus corrupti quas!',
  },
  {
    name: 'Bodfit',
    img: sample,
    tags: ['Mobile'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem distinctio similique nulla vel optio reprehenderit alias tenetur molestiae enim, cupiditate ea, quod voluptates, hic itaque ipsam maxime doloribus corrupti quas!',
  },
  {
    name: 'Quizzler',
    img: sample,
    tags: ['Web'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem distinctio similique nulla vel optio reprehenderit alias tenetur molestiae enim, cupiditate ea, quod voluptates, hic itaque ipsam maxime doloribus corrupti quas!',
    link: 'www.change.org',
  },
  {
    name: 'Aladdin',
    img: sample,
    tags: ['Web', 'Embedded'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem distinctio similique nulla vel optio reprehenderit alias tenetur molestiae enim, cupiditate ea, quod voluptates, hic itaque ipsam maxime doloribus corrupti quas!',
  },
]
