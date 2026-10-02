export interface SkillItem {
  name: string
  val: string
}

export interface SkillData {
  cat: string
  sks: SkillItem[]
}

export const mySkills: SkillData[] = [
  {
    cat: 'ML',
    sks: [
      {
        name: 'Python',
        val: '4',
      },
      {
        name: 'TensorFlow',
        val: '4',
      },
      {
        name: 'Scikit',
        val: '3',
      },
    ],
  },
  {
    cat: 'Backend & Cloud',
    sks: [
      {
        name: 'Flask/Django',
        val: '4',
      },
      {
        name: 'Spring Boot',
        val: '3',
      },
      {
        name: 'Firebase',
        val: '4',
      },
      {
        name: 'SQL',
        val: '4',
      },
    ],
  },
  {
    cat: 'Mobile Dev.',
    sks: [
      {
        name: 'Flutter',
        val: '4',
      },
      {
        name: 'Hive',
        val: '3',
      },
    ],
  },
  {
    cat: 'Web Dev.',
    sks: [
      {
        name: 'React(TypeScript)',
        val: '5',
      },
      {
        name: 'Tanstack',
        val: '4',
      },
      {
        name: 'Tailwind CSS',
        val: '4',
      },
    ],
  },
  {
    cat: 'Systems / Blockchain',
    sks: [
      {
        name: 'C',
        val: '5',
      },
      {
        name: 'Solidity',
        val: '4',
      },
      {
        name: 'Arduino',
        val: '4',
      },
    ],
  },
]
