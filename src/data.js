export const profile = {
  name: 'Muhammad Momin Tariq',
  role: 'iOS · Java Desktop · Full-Stack Developer',
  location: 'Faisalabad, Punjab, Pakistan',
  tagline:
    'I build software across three different runtimes — native iOS apps, Java desktop systems, and full-stack web — and I like the seams between them.',
  bio:
    "I'm a developer working across iOS app development, Java desktop development, and full-stack web development. My projects range from embedded AI hardware (an obstacle-detection stick for visually impaired users) to CLI fleet-management simulators and classic OOP design-pattern implementations in Java, alongside web-based data tooling. I care about writing systems that are structured clearly enough that someone else could read them cold.",
  photo: '/images/profile.png',
  resumeNote: 'Resume available on request',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Momintariq-11', handle: '@Momintariq-11' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-momin-tariq-4b1b95369',
    handle: 'Muhammad Momin Tariq',
  },
  { label: 'Email', href: 'mailto:momintariq639@gmail.com', handle: 'momintariq639@gmail.com' },
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
    items: ['JavaFX | FXML | Event Handling | Form Validation | JDBC | MVC | SwiftUI', 'React', 'C++', 'Python', 'Java', 'Git & GitHub'],
  },
  {
    category: 'Applied AI / ML',
    id: '04',
    items: ['Rule-based systems', 'Random Forest / classification', 'Recommendation logic', 'Embedded AI (Arduino sensor integration)'],
  },
  {
    category: 'Database & Backend',
    id: '05',
    items: ['MySQL', 'SQL & Database Design', 'JDBC & Connection Pooling', 'CRUD Operations', 'Relational Data Modelling', 'Query Optimization'],
  },
]

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
    tag: 'Java · CLI',
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
    tag: 'Local Deployment · ML Tooling',
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
    title: 'Intern Performance Prediction Model',
    tag: 'Python · WEB',
    description:
      'A machine learning-based system that predicts intern performance using key factors like task completion, feedback, and attendance. Designed to support data-driven evaluation and performance improvement.',
    stack: ['Python', 'HTML', 'CSS', 'OOP'],
    href: 'https://intern-performance-prediction-model.vercel.app/',
    linkLabel: 'VIEW LIVE DEMO',
  },
  {
    title: 'CarCare — Auto Workshop Management System',
    tag: 'Java · Desktop · MySQL',
    description:
      'An enterprise 3-tier automotive workshop solution built with Java Swing (FlatLaf) and MySQL. Features glassmorphic authentication, live FIFO bay queue management, appointment scheduling, automated itemized invoicing, ASCII receipts, and parameterized JDBC queries.',
    stack: ['Java 21', 'Java Swing', 'FlatLaf', 'MySQL', 'JDBC', '3-Tier Architecture'],
    href: 'https://github.com/Momintariq-11/CarCare',
  },
  {
    title: 'Jinbo E-Commerce Order System — MySQL',
    tag: 'Java · MySQL · OOP',
    description:
      'A modular console-based e-commerce order processing engine in Java backed by MySQL (XAMPP) and JDBC. Implements 8 GoF design patterns (Facade, Builder, Factory, Strategy, Repository, Observer, Adapter, Singleton) to handle product catalogs, dynamic loyalty discounts, multi-channel payments, and shipments.',
    stack: ['Java', 'MySQL', 'JDBC', 'Design Patterns (GoF)', 'Clean Architecture'],
    href: 'https://github.com/Momintariq-11/Jinbo-Order-System-MySQL',
  },
]

export const education = [
  {
    degree: 'BACHELOR OF SCIENCE ARTIFICIAL INTELLIGENCE',
    institution: 'THE UNIVERSITY OF FAISALABAD',
    period: '2024 — 2028',
    detail: 'DSA, PYTHON, DBMS, ARTIFICIAL INTELLIGENCE',
  },
  {
    degree: 'FSC PRE-ENGINEERING',
    institution: 'KIPS COLLEGE',
    period: '2022 — 2024',
    detail: 'Completed F.Sc. Pre-Engineering from KIPS College, with a focus on Mathematics, Physics, and Chemistry. Developed strong analytical thinking, logical reasoning, and problem-solving skills through a rigorous academic curriculum.',
  },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    org: 'KOLONX',
    period: 'JULY-2026 TO OCTOBER-2026',
    points: ['Developed a strong foundation in Object-Oriented Programming (OOP), SOLID principles, software design patterns, dependency injection, software architecture, SQL, database design, Git, and version control. Gained practical experience in writing clean, maintainable code, implementing unit tests with JUnit, applying Test-Driven Development (TDD), and building Java desktop applications using JavaFX, JDBC, and the MVC architecture. Currently expanding my knowledge of Swift, SwiftUI, and modern iOS application development.'],
  },
  {
    role: 'AI/ML INTERN',
    org: 'DECODELAB',
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
    role: 'Photography Hobbyist',
    org: 'mmt.clicks',
    period: 'JULY-2026 TO PRESENT',
    href: 'https://www.instagram.com/mmt.clicks/',
    points: ['Pursuing photography as a creative hobby through MMT.clicks — capturing, editing, and sharing visual moments. Exploring visual storytelling, composition, and creative photography techniques as part of my personal passion.'],
  },
]

/*
  CERTIFICATES — Add your certificate images to /public/images/certificates/
  Use the image filename as the `image` value.
*/
export const certificates = [
  {
    title: 'Your Certificate Title',
    issuer: 'Issuing Organization',
    date: '2026',
    image: '/images/certificates/placeholder.png',
  },
]

/*
  HONORS & AWARDS — Add your award images to /public/images/awards/
  Use the image filename as the `image` value.
*/
export const awards = [
  {
    title: 'Your Award Title',
    org: 'Awarding Organization',
    date: '2026',
    description: 'Brief description of the honor or award.',
    image: '/images/awards/placeholder.png',
  },
]
