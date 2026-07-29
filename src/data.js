/*
  ────────────────────────────────────────────────────────────────
  ALL SITE CONTENT LIVES HERE.
  Edit this file to update anything — text, links, projects, etc.
  No other file needs to change for content updates.

  IMPORTANT — read before deploying:
  LinkedIn blocks automated/AI access to individual profile pages
  (it sits behind a login wall), so your Education and Experience
  entries below are PLACEHOLDERS, not real data pulled from your
  profile. Replace every entry marked "REPLACE ME" with your
  actual details before you publish this site. Everything in
  `projects` below WAS pulled live from your public GitHub repos.
  ────────────────────────────────────────────────────────────────
*/

export const profile = {
  name: 'Muhammad Momin Tariq',
  role: 'iOS · Java Desktop · Full-Stack Developer',
  location: 'Faisalabad, Punjab, Pakistan',
  tagline:
    'I build software across three different runtimes — native iOS apps, Java desktop systems, and full-stack web — and I like the seams between them.',
  bio:
    "I'm a developer working across iOS app development, Java desktop development, and full-stack web development. My projects range from embedded AI hardware (an obstacle-detection stick for visually impaired users) to CLI fleet-management simulators and classic OOP design-pattern implementations in Java, alongside web-based data tooling. I care about writing systems that are structured clearly enough that someone else could read them cold.",
  photo: '/images/profile.png',
  resumeNote: 'Résumé available on request',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Momintariq-11', handle: '@Momintariq-11' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-momin-tariq-4b1b95369',
    handle: '/in/muhammad-momin-tariq',
  },
  { label: 'Email', href: 'mailto:REPLACE_ME@example.com', handle: 'REPLACE_ME@example.com' },
]

export const skills = [
  {
    category: 'iOS App Development',
    id: '01',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'iOS SDK', 'App architecture & MVVM'],
  },
  {
    category: 'Java Desktop Development',
    id: '02',
    items: [
      'Java (OOP)',
      'Design patterns (Singleton, Factory, Observer, Builder, Facade, Strategy, Adapter)',
      'CLI application architecture',
      'Object modelling & simulation systems',
    ],
  },
  {
    category: 'Full-Stack Development',
    id: '03',
    items: ['HTML/CSS/JavaScript', 'React', 'Python (Flask-style data apps)', 'REST-style app structure', 'Git & GitHub workflows'],
  },
  {
    category: 'Applied AI / ML',
    id: '04',
    items: ['Rule-based systems', 'Random Forest / classification', 'Recommendation logic', 'Embedded AI (Arduino sensor integration)'],
  },
]

/*
  Pulled live from https://github.com/Momintariq-11 — these are your
  actual public repositories with their real descriptions.
*/
export const projects = [
  {
    title: 'AI Smart Blind Stick',
    tag: 'Embedded AI',
    description:
      'An AI-assisted smart stick built on Arduino Uno with ultrasonic sensors, helping visually impaired users detect obstacles and navigate safely through intelligent vibration and alert feedback.',
    stack: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Embedded Systems'],
    href: 'https://github.com/Momintariq-11/AI-smart-blind-stick',
  },
  {
    title: 'FLEET-X',
    tag: 'Java · Desktop',
    description:
      'A CLI-based Fleet Management System simulating a lineup of autonomous vehicles — cars, drones, and delivery bots — built to showcase core object-oriented design across a real console application.',
    stack: ['Java', 'OOP', 'CLI'],
    href: 'https://github.com/Momintariq-11/FLEET-X',
  },
  {
    title: 'NovaBot — Rule-Based AI Chatbot',
    tag: 'Python · Desktop GUI',
    description:
      'A beginner-friendly GUI chatbot built with Python and Tkinter, responding to predefined commands through conditional logic in an interactive desktop chat environment.',
    stack: ['Python', 'Tkinter', 'Rule-Based Logic'],
    href: 'https://github.com/Momintariq-11/NovaBot-Rule-Based-AI-Chatbot',
  },
  {
    title: 'Data Classification Using AI',
    tag: 'Web · ML Tooling',
    description:
      'A data classification web app built for Decode Labs that streams a custom dataset into a Random Forest model, automating data cleaning, variable encoding, and validation splits.',
    stack: ['HTML', 'Python', 'Random Forest'],
    href: 'https://github.com/Momintariq-11/Data-classification-using-ai',
  },
  {
    title: 'AI Recommendation Logic',
    tag: 'Python · Terminal',
    description:
      'A terminal-based recommendation system using a pre-defined dataset spanning vehicles, movies, music, books, food, and sports, matching user preferences with a tag-based recommendation approach.',
    stack: ['Python', 'Recommendation Systems'],
    href: 'https://github.com/Momintariq-11/AI-Recommendation-Logic',
  },
  {
    title: 'Design Patterns in Java',
    tag: 'Java · Fundamentals',
    description:
      'A collection of 8 individual Java tasks, each implementing a distinct design pattern — Singleton, Factory, Observer, Builder, Facade, Strategy, Repository, and Adapter.',
    stack: ['Java', 'Design Patterns', 'OOP'],
    href: 'https://github.com/Momintariq-11/Pattern-in-java',
  },
]


/*
  PLACEHOLDER — replace with your real LinkedIn education history.
  I could not access your LinkedIn profile page (it sits behind a
  login wall for automated tools), so nothing here is verified.
*/
export const education = [
  {
    degree: 'BACHELOR OF SCIENCE ARTIFICIAL INTELLIGENCE ',
    institution: 'THE UNIVERSITY OF FAISALABAD',
    period: '2024 — 2028',
    detail: 'PYHTON,DBMS,ARTIFICIAL INTELLIGENCE',
  },

  {
    degree: 'FSC PRE-ENGINEERING',
    institution: 'KIPS COLLEGE',
    period: '2022 — 2024',
    detail: 'Completed F.Sc. Pre-Engineering from KIPS College, with a focus on Mathematics, Physics, and Chemistry. Developed strong analytical thinking, logical reasoning, and problem-solving skills through a rigorous academic curriculum.',
  },
]

/*
  PLACEHOLDER — replace with your real LinkedIn work / internship
  history. Same reason as above: not pulled from a verified source.
*/
export const experience = [
  {
    role: 'Software Engineer Intern',
    org: 'KOLONX',
    period: 'JULY-2026 TO OCTOBER-2026',
    points: ['Developed a strong foundation in Object-Oriented Programming (OOP), SOLID principles, software design patterns, dependency injection, software architecture, SQL, database design, Git, and version control. Gained practical experience in writing clean, maintainable code, implementing unit tests with JUnit, applying Test-Driven Development (TDD), and building Java desktop applications using JavaFX, JDBC, and the MVC architecture. Currently expanding my knowledge of Swift, SwiftUI, and modern iOS application development.'],
  },
  {
    role: 'AI/ML INTERN',
    org: 'DECOELABS',
    period: 'JUNE-2026 TO AUGUST-2026',
    points: ['As an Artificial Intelligence Intern at Decode Labs, I gained hands-on experience in Python development and machine learning through project-based learning. I worked on data preprocessing, model implementation, and problem-solving while improving my programming, debugging, and software development skills in a collaborative environment.'],
  },

  {
    role: 'MACHINE LEARNING INTERN',
    org: 'INTERNEE.PK',
    period: 'JULY-2026 TO SEPTEMBER-2026',
    points: ['As a Machine Learning Intern at Internee.pk, I have gained hands-on experience in Machine Learning and Artificial Intelligence by working on practical projects and real-world datasets. I have strengthened my skills in Python, data preprocessing, exploratory data analysis (EDA), model development, and model evaluation using industry-standard tools and libraries. This experience has enhanced my problem-solving, analytical thinking, and collaboration skills while deepening my understanding of modern Machine Learning workflows.'],
  
  },

  {
    role: 'Photographer',
    org: 'mmt.clicks',
    period: 'JULY-2026 TO SEPTEMBER-2026',
    href: 'https://www.instagram.com/mmt.clicks/',
  },
]
