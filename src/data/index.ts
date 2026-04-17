
export interface Skill {
  name: string
  icon: string     
  category: string     
}

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  demoUrl: string
  githubUrl: string
}

export interface TimelineItem {
  year: string
  title: string
  place: string
  description: string
  isCurrent?: boolean  
}



export const skills: Skill[] = [
  { name: 'HTML',              icon: '🌐', category: 'Language'  },
  { name: 'CSS',               icon: '🎨', category: 'Language'  },
  { name: 'JavaScript',        icon: '⚡', category: 'Language'  },
  { name: 'TypeScript',        icon: '🔷', category: 'Language'  },
  { name: 'React',             icon: '⚛️', category: 'Library'   },
  { name: 'Git',               icon: '🔧', category: 'Tool'      },
  { name: 'GitHub',            icon: '🐙', category: 'Tool'      },
  { name: 'Responsive Design', icon: '📱', category: 'Practice'  },
]


export const projects: Project[] = [
  {
    id: 1,
    title: 'Task Manager App',
    description:
      'A clean to-do application with task creation, completion tracking, and local storage support. Built as a practice project during the course.',
    techStack: ['React', 'TypeScript', 'CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'Fetches live weather data from a public API and displays it in a responsive card layout with temperature, humidity, and conditions.',
    techStack: ['React', 'JavaScript', 'REST API'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'This portfolio — designed and built from scratch using React, TypeScript, and React Router. Fully responsive across all screen sizes.',
    techStack: ['React', 'TypeScript', 'React Router'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Landing Page Clone',
    description:
      'A pixel-perfect recreation of a modern SaaS landing page, practiced to sharpen HTML/CSS layout and responsive design skills.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: '#',
  },
]


export const timeline: TimelineItem[] = [
  {
    year: '2024 – 2025',
    title: 'Frontend Development Course',
    place: 'PROWEB · Tashkent, Uzbekistan',
    description:
      'Completed a structured frontend development program covering HTML, CSS, JavaScript, TypeScript, and React. Built multiple hands-on projects and learned modern development workflows.',
  },
  {
    year: '2025',
    title: 'Self-Study & Practice Projects',
    place: 'Independent',
    description:
      'Continued learning by building personal projects, exploring React ecosystem tools (React Router, Vite), and practising responsive design and clean code principles.',
    isCurrent: true,
  },
  {
    year: 'Goal',
    title: 'Junior Frontend Developer Role',
    place: 'Open to opportunities',
    description:
      'Looking for my first professional role or internship where I can contribute to real projects, grow as a developer, and collaborate with an experienced team.',
  },
]
