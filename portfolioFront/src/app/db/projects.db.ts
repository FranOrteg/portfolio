import { Projects } from "../interfaces/projects";

export const PROJECTS: Projects[] = [
    {
        title: 'ClassMate',
        textResume: 'Data manager for educational centers (SPA) .',
        text: 'This project is developed using technologies such as MYSQL, EXPRESS, ANGULAR, and NODE.JS.<br><br>This web application is called ClassMate, a data management system for educational institutions, providing a platform where teachers and families can connect, communicate, and share learning experiences.<br><br>Through ClassMate, the data of any school can be easily and efficiently managed, including information about students and teaching staff:<br><br>• Grades<br>• Attendance records<br>• Observations<br>• Assignments<br>• Timetables<br>• Class and subject management<br><br>ClassMate will also offer communication tools that allow parents and teachers to interact through an asynchronous messaging system.<br><br>Once a user has registered and logged into ClassMate, they will be able to perform specific tasks based on the role assigned to them in the database.In this way, the application can identify the user and grant them access to the functionalities designed for their particular role<br><br>The platform has been designed with an easy and intuitive interface so that any user, regardless of their level of experience in technology, can use it with ease. In addition, the age of the users will not be an obstacle, as even the youngest ones will be able to interact with the platform in a simple and efficient manner.',
        image: '/assets/images/ClassMateIntro.png',
        images: ['ClassMateView1', 'ClassMateView2', 'ClassMateView3'],
        url: 'https://github.com/FranOrteg/ClassMate_front.git',
        id: 1
    },
    {
        title: 'BLOG',
        textResume: 'Snowboarding blog in Angular that can be updated through forms',
        text: "In today's digital world, having a personalized space to share your ideas, experiences, and knowledge is essential. And that's exactly what my BlogZone offers you, a blog developed in Angular that allows you to create, organize, and explore content in an easy and dynamic way.<br><br>Furthermore, offers you the flexibility to organize your posts according to your preferences. You can arrange them by publication date, category, or even popularity. This allows you to present your content in the most convenient way for your readers and keep it always up to date.<br><br>BlogZone also provides individual post views, which means that each entry will have its own dedicated page. On these pages, you can showcase related images, allow comments, and provide your readers with the opportunity to interact with you and with each other. It's a fantastic way to encourage engagement and create a community around your blog.",
        image: '/assets/images/blog.png',
        images: ['blog1', 'blog2', 'blog3'],
        url: 'https://github.com/FranOrteg/Fran_BLOG.git',
        id: 2
    },
    {
        title: 'TODO',
        textResume: 'Task management app developed in JavaScript, allowing you to manage tasks',
        text: 'The task management application is a powerful tool built with JavaScript that enables you to efficiently organize and manage your daily tasks. It provides an easy and effective way to keep track of your responsibilities, assign priorities, and monitor your progress.<br><br>With this application, you can add new tasks by specifying their name, description, and due date. Furthermore, you have the ability to assign a priority to each task, helping you determine which tasks are more important and need to be completed first. Priorities can be set as high, medium, or low, or you can even utilize a custom ranking system based on your specific needs.<br><br>Once you have entered your tasks, the application allows you to organize and filter them based on their priority. This enables you to focus on the most crucial tasks and ensure they are completed on time. Additionally, you can perform searches and apply additional filters to quickly find specific tasks or view only pending tasks.The application also provides the capability to track the progress of your tasks.<br><br>You can mark a task as completed once you have finished working on it, helping you maintain a clear record of your accomplishments and pending tasks.',
        image: '/assets/images/todo.png',
        images: ['todo'],
        url: 'https://github.com/FranOrteg/TODO-Fran.git',
        id: 3
    },
    {
        title: 'Burger',
        textResume: 'The development of a responsive website for a burger in HTML, CSS, and JavaScript',
        text: 'With a modern and appealing design, this website allows customers to explore the burger menu, place online orders, and obtain information about the location and opening hours of the burger joint.<br><br>The website also includes informative sections such as "About Us," where the story and values of the burger joint can be shared, and "Location and Hours," where visitors can find the address, phone number, and opening hours. These sections are created using HTML and CSS to provide relevant information in a clear and concise manner.<br><br>The combination of an appealing design, interactive functionalities, and informative content creates a pleasant experience for visitors and effectively promotes the burger business.',
        image: '/assets/images/burger.png',
        images: ['burger1', 'burger2', 'burger3', 'burger4'],
        url: 'https://github.com/FranOrteg/hamburgueser-a-rovers.git',
        id: 4
    },
    {
        title: 'POKEDEX',
        textResume: 'The development of a Pokemon combat videogame in Angular',
        text: 'The Pokédex application created using Angular is an exciting tool that combines the love for Pokémon with the thrill of battles. With its intuitive and visually appealing interface, this application allows trainers to explore and learn about a wide variety of Pokémon, as well as train them and put them to the test in exhilarating combat.<br><br>The Pokédex application in Angular offers an extensive Pokémon database, providing detailed information about each species, including their abilities, statistics, evolution, and signature moves. Users can explore different generations of Pokémon, discover new species, and learn about their strengths and weaknesses.<br><br>But the most exciting feature of this application is the ability to engage in real-time Pokémon battles. Users can challenge other trainers, either online or in local mode, and put their strategic skills to the test. Battles are filled with excitement and action as players select moves, anticipate their opponents tactics, and fight for victory.<br><br>To develop this application, the backend was built using Node.js and Express, while the frontend was created using Angular.The MySQL database serves as the foundation for storing and retrieving Pokémon information, as well as user data and battle records.',
        image: '/assets/images/Pokemon.png',
        images: ['Pokemon'],
        url: 'https://github.com/FranOrteg/Pokemon.git',
        id: 5
    },
    {
        title: 'Portfolio',
        textResume: 'Portfolio developed with Angular and Node.js',
        text: "customized website portfolio developed with Angular and Node.js. This single-page application (SPA) is designed to showcase an individual's skills, projects, and achievements in an engaging and professional manner.<br><br>Portfolio interface is intuitive and easy to navigate, featuring a modern and sleek design that visually highlights the content. With interactive features and subtle animations, the portfolio provides an immersive user experience.<br><br>Using Angular, different sections are built, including a striking homepage, a featured projects section, an image gallery, and a contact page. These sections are developed in a modular fashion and can be customized based on the user's needs and preferences<br><br>The back-end of the portfolio is implemented using Node.js, enabling efficient data management and interaction with a database or other external services, if needed. Additionally, a functional contact form can be added using Node.js to capture and send messages from visitors.",
        image: '/assets/images/portfolio.png',
        images: ['portfolio', 'portfolio1'],
        url: '',
        id: 6
    },
]