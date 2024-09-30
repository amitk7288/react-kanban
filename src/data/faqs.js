const faqs = [
  {
    id: 1,
    question: "What technologies and tools did you use to build this project?",
    answer:
      "This project was built using a modern web stack including React JS for the front end, Redux for global state management, React Router Dom for navigation, and Tailwind CSS for styling. I also used tools like Git/GitHub for version control, React Icons, uuid for generating unique id's and React Dnd-Kit for the drag n drop feature for the cards.",
    icons: [
      {id: 1, src: "/src/assets/React-icon.png", title: "React JS"},
      {id: 2, src: "/src/assets/redux-icon.webp", title: "Redux"},
      {id: 3, src: "/src/assets/react-router.svg", title: "React Router DOM"},
      {id: 3, src: "/src/assets/tailwind-icon.png", title: "Tailwind CSS"},
      {id: 3, src: "/src/assets/github-logo.png", title: "Git/Github"},
      {id: 3, src: "/src/assets/react-icons-icon.svg", title: "React Icons"},
      {id: 3, src: "/src/assets/dndkit-icon.png", title: "dnd kit"},
    ]
  },
  {
    id: 2,
    question:
      "What challenges did you face and how did you overcome them?",
    answer:
      "One challenge was managing state across multiple components efficiently, I solved this by implementing Redux for global centralized state management, which reduced prop drilling and made the code more scalable. My choice between Redux and Reacts Context API came down to the scalability of my project, it made more sense to go for Redux due to the size of the project. I also leveraged Tailwind CSS for custom media queries.",
  },
  {
    id: 3,
    question: "How do you ensure your code is maintainable and scalable?",
    answer:
      "I follow best practices such as modular component architecture, ensuring that each component is reusable and focused on a single responsibility. I also write clean, readable code and use version control to track changes.",
  },
  {
    id: 4,
    question:
      "How do you stay up to date with the latest technologies and industry trends?",
    answer:
      "I stay up to date by following industry blogs, regularly checking documentation for langauges I'm interested in and continuing to create tutorials for my YouTube channel - Dev Dreamer. I also regularly explore new tools and libraries to ensure I'm always learning and staying current with the latest trends in software development.",
  },
  {
    id: 5,
    question:
      "How can the project be improved?",
    answer:
      "There are may ways in which the project can be improved such as: (1) moving the data from using a file system to a back end with something like Mongo DB and Node JS to create a fully fledged full stack application, (2) Adding a filter button section on top of each board so users can filter cards by category, (3) Allowing for the creation of new lists. These are all things I could do to further improve the project.",
  },
];

export default faqs;
