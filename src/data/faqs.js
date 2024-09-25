const faqs = [
  {
    id: 1,
    question: "What technologies and tools did you use to build this project?",
    answer:
      "This project was built using a modern web stack including React for the front end, Redux for state management, React Router for navigation, and Tailwind CSS for styling. I also used tools like Git for version control.",
  },
  {
    id: 2,
    question:
      "What challenges did you face and how did you overcome them?",
    answer:
      "One challenge was managing state across multiple components efficiently, I solved this by implementing Redux for global centralized state management, which reduced prop drilling and made the code more scalable. I also leveraged Tailwind CSS for custom media queries.",
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
];

export default faqs;
