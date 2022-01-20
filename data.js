export const projectsList = [
  {
    id: 1,
    name: "NailStyle",
    route: "nailstyle",
    previewImg: "/nailstyle/nailstyle.png",
    description:
      "Nail Salon website app built on the MERN stack (MongoDB, Express, React, Node.js) to learn React and flesh out full stack skillset. Features a simple RESTful API implementation. The app has a terminal for admins to manage customers, employees and appointments, as well as an appointment page for customers.",
    longDescription:
      "Single-Page Application built on the MERN stack (MongoDB, Express, React, Node.js) to learn React and further flesh out full stack skillset. The website back-end and front-end are hosted through Heroku and Netlify respectively." +
      "\n\nNailStyle was created as a template for a nail salon website that small businesses could adopt. It features an admin terminal for the management of customers, employees and appointments, as well as a page for customers to book appointments. All data is stored in the MongoDB database and fetched using our REST API calls. We also included some authentication using JSON Web Tokens, but only for administrators. Finally, the app is fully responsive on both desktop and mobile devices." +
      "\n\nI worked with a friend to revamp a local business's nail salon website given a list of user requirements, issues to resolve and optimizations to add. The biggest issue we noticed in these types of businesses was the lack of clarity and a cohesive theme. Salon services help people feel beautiful and comfortable in their appearances, and their website should radiate the same feeling of elegance. That being said, our intention with NailStyle was to stick to a simple structure/template that could then be personalized to suit a business's desires. Therefore, the current design is as minimalistic as we would ever see it.",
    type: "Personal",
    year: "2021",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express",
      "Axios",
      "MongoDB",
      "Heroku",
      "Netlify",
    ],
    desktopImgs: ["/nailstyle/nailstyle1.png", "/nailstyle/nailstyle2.png"],
    mobileImgs: ["/nailstyle/mobile1.png", "/nailstyle/mobile2.png"],
    github: "https://github.com/Shewng/NailStyle",
    external: "https://hxnails.ca",
  },
  {
    id: 2,
    name: "MENJI.",
    route: "menji",
    previewImg: "/menji/menji.png",
    description:
      "Final project for my Database Management course, mimicking an online eCommerce clothing store. Features a simple RESTful API implementation. Clients can log into their account, browse products, add/remove them from their cart, checkout with personal information and review their orders.",
    longDescription:
      "Partnered final project for my Database Management course. A web app that mimics an online eCommerce clothing store, letting users browse and purchase items. We were tasked with creating a problem and design process, building the entire project through a near full-stack implementation." +
      "\n\nMENJI. uses simple REST API calls to add, remove and load products from the MongoDB database. We were encouraged to use Mongoose to help model some of our objects using schemas. This helped immensely with the learning process of the differences between front-end and back-end. HTTP web cookies are used for the login/register process of both customers and admins. Admins can view all registered customers, manage the store's inventory and track orders placed by customers." +
      "\n\nThis project was my first exposure to the idea of full stack. With our specified deadlines, learning the concepts from scratch and coding everything ground-up was difficult. Looking back only less than a year ago, I think my skills in design and development have greatly improved ever since.",
    type: "University",
    year: "2021",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    desktopImgs: ["/menji/menji1.png", "/menji/menji2.png"],
    mobileImgs: [""],
    github: "https://github.com/Shewng/Menji",
    external: "",
  },
  {
    id: 3,
    name: "Personal Portfolio",
    route: "portfolio",
    previewImg: "/portfolio/portfolio.png",
    description:
      "First website iteration to showcase my work, developed in React, Next.js and SASS. My design inspiration was based on a combination of modern aesthetics and minimalism, finished with a monochromatic pallete and a hint of my favourite color - red. The website was deployed using Vercel and uses the React Reveal library for some subtle animations.",
    longDescription:
      "First website iteration to showcase my work, developed in React, Next.js and SASS. My design inspiration was based on a combination of modern aesthetics and minimalism, finished with a monochromatic pallete and a hint of my favourite color - red. The website was deployed using Vercel and uses the React Reveal library for some subtle animations." +
      "\n\nOne of my main objectives of the site was visual hierarchy and understanding proportions on the page. Making sure there is an intention for a component to be lighter in tone or having a specific margin to draw attention toward it. If there's one thing I learned, it's that there are many many options that look great which can overwhelm you quite fast. However, it is important to stick to your theme and finish what you started in order to not second-guess the quality of work and stay productive. There's always time to develop make another version." +
      "\n\nI hope to create a modular/scalabe version that lets me add in different elements and features easily. It would have parts of a blog, parts of a portfolio, parts of a dashboard-esq style, many parts that can be personalized. My end goal of it all would be a website that feels like an autobiography/log of my life, thoughts and work.",
    type: "Personal",
    year: "2021",
    technologies: ["HTML", "SASS", "JavaScript", "React", "Next.js", "Vercel"],
    desktopImgs: ["/portfolio/portfolio1.png", "/portfolio/portfolio2.png"],
    mobileImgs: ["/portfolio/mobile2.png", "/portfolio/mobile2.png"],
    github: "https://github.com/Shewng/personal-portfolio",
    external: "https://shwong.me",
  },
  {
    id: 4,
    name: "MakeApp",
    route: "makeapp",
    previewImg: "/makeapp/makeapp.png",
    description:
      "Final project for my iOS development course that mimics a social media application based on creating makeupp routines. Built on SwiftUI using Firebase's Cloud Firestore to manage backend infrastructure.",
    longDescription:
      "Final project for my iOS development course that mimics a social media application based on creating makeupp routines. Built on SwiftUI using Firebase's Cloud Firestore to manage backend infrastructure." +
      "\n\nMakeApp features a media feed where you can browse makeup inspiration through various styles and tags. Users can find new makeup routines from their favourite artists or create their own routines to share with others. For our project, we used SwiftUI for the creation of routines which would be shared to the general feed, managed by Firebase." +
      "\n\nThe project had both development and business aspects to teach us how to market our own apps. From our prototypes, we had to narrow down our functionality to the core reasons of using MakeApp, which was the aspect of sharing and showcasing makeup routines. Advertising this niche towards a new social media app and developing something that matches it was a difficult but important learning process.",
    type: "University",
    year: "2020",
    technologies: ["Swift", "SwiftUI", "Firebase"],
    desktopImgs: ["/smartspace/smartspace1.png", "/smartspace/smartspace2.png"],
    mobileImgs: [""],
    github: "https://github.com/Shewng/makeup",
    external: "",
  },
  {
    id: 5,
    name: "Plants Vs Zombies Clone",
    route: "pvz",
    previewImg: "/pvz/pvz.png",
    description:
      "Final project for my Introductory Computer Science course, mimicking the famous Tower Defense game Plants Vs Zombies. I built this project with Object-Orientated principles in mind, utilizing Java's class structure to create the plants and zombies and JavaFx to control the game engine and GUI. The game was simplified to a simple attack-defend style, with users having 3 plants to defend against 5 types of zombies.",
    longDescription:
      "Final project for my Introductory Computer Science course, mimicking the famous Tower Defense game Plants Vs Zombies. I built this project with Object-Orientated principles in mind, utilizing Java's class structure to create the plants/zombies and JavaFx to control the game engine/UI. The game was simplified to a simple attack-defend style, with users having 3 plants to defend against 5 types of zombies." +
      "\n\nFor our year-long project, our group came up with the idea to recreate the iconic Plants Vs Zombies game. The entirety of the game was well beyond our reach, but we decided to stick to some core elements: left-right game progress, a grid placement for defense, the shovel to remove plants, natural falling sun generation and lawnmowers as a second-life. Unfortunately, we couldn't add in the sunflower unit for sun generation but made up for it by using a kill-reward system.",
    type: "University",
    year: "2018",
    technologies: ["Java", "JavaFX"],
    desktopImgs: ["/smartspace/smartspace1.png", "/smartspace/smartspace2.png"],
    mobileImgs: [""],
    github: "https://github.com/Shewng/pvz-ms-remake",
    external: "",
  },
  {
    id: 6,
    name: "Laser Unlock",
    route: "laserunlock",
    previewImg: "/laserunlock/laserunlock.png",
    description:
      "Phone application that re-envisions our phone-unlock methods from the traditional slide-to-unlock and pin/password. Using Android Studio's sensor framework, I created a minigame that mimics a cat trying to catch a laser. In order to unlock your phone, the cat must catch the laser 3 times in the correct positions, which the user would set as their password.",
    longDescription:
      "Phone application that re-envisions our phone-unlock methods from the traditional slide-to-unlock and pin/password. Using Android Studio's sensor framework, I created a minigame that mimics a cat trying to catch a laser. In order to unlock your phone, the cat must catch the laser 3 times in the correct positions, which the user would set as their password." +
      "\n\nLaser Unlock was developed in Android Studio which was my first experience in mobile development. Specifically, we had to dive into their sensor framework which utilizes smartphone sensors such as pressure, proximity, orientation and lumination to monitor/provide data change. The app detects when the user covers the light sensor, which translates to the cat swiping at the laser. Essentially, the user should feel like the cat trying to catch the laser themselves as it randomly moves across the screen.",
    type: "University",
    year: "2020",
    technologies: ["Android Studio", "Java"],
    desktopImgs: [""],
    mobileImgs: [
      "/laserunlock/laserunlock1.png",
      "/laserunlock/laserunlock1.png",
      "/laserunlock/laserunlock1.png",
      "/laserunlock/laserunlock1.png",
    ],
    github: "https://github.com/Shewng/Cat-and-Laser",
    external: "",
  },
  /**{
    name: "Minesweeper",
    route: "/projects/minesweeper",
    previewImg: "/../public/nightcity.gif",
    description:
      "Final project for my Web-Based systems course, mimicking the popular browser game Minesweeper. Built on Javascript and JQuery to learn about front-end development and responsive design. ",
    longDescription: "",
    type: "University",
    year: "2020",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    images: ["", "", ""],
    github: "",
    external: "",
  },*/
  {
    id: 7,
    name: "SmartSpace",
    route: "smartspace",
    previewImg: "/smartspace/smartspace.png",
    description:
      "Semester-long group project focused on UX/UI design. SmartSpace assisted those that integrated many smart devices into their home and needed a device manager API to handle them all. The project was done entirely in Adobe XD to emphasize taking a user-orientated approach to our problems.",
    longDescription:
      "Semester-long group project focused on UX/UI design. SmartSpace assisted those that integrated many smart devices into their home and needed a device manager API to handle them all. The project was done entirely in Adobe XD to emphasize taking a user-orientated approach to our problems." +
      "\n\nThis was my first exposure to design principles and their methods. I learned a large amount of what good design entails and how to approach the process of conjuring both an appealing and usable application. In the end, SmartSpace ignited my passion for UX/UI which now reflects my methodological to approach my projects.",
    type: "University",
    year: "2019",
    technologies: ["Adobe XD"],
    desktopImgs: ["/smartspace/smartspace1.png", "/smartspace/smartspace2.png"],
    mobileImgs: [""],
    github: "",
    external:
      "https://xd.adobe.com/view/2fe35e91-1dad-4313-a6f2-f9b2db807940-7ab0/?fullscreen",
  },
  {
    id: 8,
    name: "ChaiSweets",
    route: "/projects/chaisweet",
    previewImg: "/chaisweets/chaisweets.png",
    description:
      "Work-in-progress website built on React, Nextjs and SASS for my sister's small local business. As she only used social media, I offered to create a more professional showcase of her business via a website to better sell, promote and track her creations. Informed by her suggestions and feedback, I designed and developed the site with the intention of a modern, slightly edgy style with a monochromatic color pallete.",
    longDescription:
      "When my sister started ChaiSweets, she never intended for it to become a side-hustle, instead more of a way to entertain her baking-craves. The popularity she gained from the desserts pushed her to establish a dedicated social media page, followed by some business cards and promo deals. After a while, she requested me to help her create a site to better showcase her creations. It would also help her track what she has made as well as streamline customer requests and payments." +
      "\n\nChaiSweets boasts a modernistic style with a hint of edginess, influenced by contemporary architecture and ornamental stone. The color pallete is quite monochrome with some color signatures of mint, gunmental blue and a natural wood brown. These color contrasts are balanced by a clean and uncomplicated layout to finalize the design." +
      "\n\nThere are certain things I want to try out for this project such as React-Hook-Form for customer requests and Styled Components for CSS. I'm also eagered to use more React hooks and want to learn how to create my own hooks as well. Overall, I feel very optimistic about the timeline I have planned and the pace I'm setting for myself.",
    type: "Personal",
    year: "2022",
    technologies: [
      "HTML",
      "SASS",
      "JavaScript",
      "React",
      "Next.js",
      "Styled Components",
      "Vercel",
    ],
    desktopImgs: ["/smartspace/smartspace1.png", "/smartspace/smartspace2.png"],
    mobileImgs: [""],
    github: "https://github.com/Shewng/ChaiSweetBakery",
    external: "",
  },
];
