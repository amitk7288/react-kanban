import listColors from "./listColours";
import members from "./members";
import notes from "./notes";
import cards from "./cards";

const getMembersByIds = (ids) =>
  members.filter((member) => ids.includes(member.id));

const getNotesByIds = (ids) =>
  notes.filter((note) => ids.includes(note.id));

const getCardsByIds = (ids) =>
  cards.filter((card) => ids.includes(card.id));

const boards = [
  {
    id: 1,
    name: "Plant Ltd",
    img: "/src/assets/logo-1.png",
    members: getMembersByIds([1, 2, 3, 4, 9]),
    notes: getNotesByIds([1]),
    lists: [
      {
        id: 1,
        name: "To Do",
        color: listColors["To Do"],
        cards: getCardsByIds([1, 2]),
      },
      {
        id: 2,
        name: "In Progress",
        color: listColors["In Progress"],
        cards: getCardsByIds([3, 4]),
      },
      {
        id: 3,
        name: "Review",
        color: listColors["Review"],
        cards: getCardsByIds([5, 6]),
      },
      {
        id: 4,
        name: "Done",
        color: listColors["Done"],
        cards: getCardsByIds([7]),
      },
    ],
  },
  {
    id: 2,
    name: "Web Platform",
    img: "/src/assets/web-platform-logo.png",
    members: getMembersByIds([1, 3, 5, 6]),
    notes: getNotesByIds([1]),
    lists: [
      {
        id: 1,
        name: "To Do",
        color: listColors["To Do"],
        cards: getCardsByIds([8]),
      },
      {
        id: 2,
        name: "In Progress",
        color: listColors["In Progress"],
        cards: getCardsByIds([9]),
      },
      {
        id: 3,
        name: "Review",
        color: listColors["Review"],
        cards: getCardsByIds([10]),
      },
      {
        id: 4,
        name: "Done",
        color: listColors["Done"],
        cards: getCardsByIds([11]),
      },
    ],
  },
  {
    id: 3,
    name: "Dev Dreamer",
    img: "/src/assets/DDLogo.png",
    members: getMembersByIds([1, 2, 11]),
    notes: getNotesByIds([1]),
    lists: [
      {
        id: 1,
        name: "To Do",
        color: listColors["To Do"],
        cards: getCardsByIds([]),
      },
      {
        id: 2,
        name: "In Progress",
        color: listColors["In Progress"],
        cards: getCardsByIds([]),
      },
      {
        id: 3,
        name: "Review",
        color: listColors["Review"],
        cards: getCardsByIds([]),
      },
      {
        id: 4,
        name: "Done",
        color: listColors["Done"],
        cards: getCardsByIds([12, 13, 14, 15]),
      },
    ],
  },
  {
    id: 4,
    name: "Social Campaign",
    img: "/src/assets/social-campaign.png",
    members: getMembersByIds([1, 2, 3, 4, 6, 7, 8]),
    notes: getNotesByIds([1]),
    lists: [
      {
        id: 1,
        name: "To Do",
        color: listColors["To Do"],
        cards: getCardsByIds([16, 17]),
      },
      {
        id: 2,
        name: "In Progress",
        color: listColors["In Progress"],
        cards: getCardsByIds([18]),
      },
      {
        id: 3,
        name: "Review",
        color: listColors["Review"],
        cards: getCardsByIds([19]),
      },
      {
        id: 4,
        name: "Done",
        color: listColors["Done"],
        cards: getCardsByIds([20]),
      },
    ],
  },
];

export default boards;
