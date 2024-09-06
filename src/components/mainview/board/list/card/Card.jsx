// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

import DropMenu from "../../../../ui-components/DropMenu";

import {
  PiDotsThreeOutlineVerticalFill,
  PiListChecksBold,
  PiEyeBold,
  PiChatCircleDotsBold,
  PiPaperclipBold,
} from "react-icons/pi";

import pic from "/src/assets/members/1.jpg"

export default function Card({ card, categories }) {

// const { boardId } = useParams();
// const board = useSelector((state) =>
//   state.boards.find((board) => board.id === parseInt(boardId, 10)),
// );

const cardCategory = categories.find((category) => category.name === card.category);


const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="flex w-[250px] cursor-pointer flex-col rounded-lg border bg-white md:w-[300px] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <div className="flex h-[240px] flex-col justify-evenly gap-4 border-b border-b-drkbrd p-4">
        <div className="flex items-center justify-between">
          {cardCategory &&
            (isDarkMode ? (
              <span
                className="rounded-full px-4 py-2 text-xs font-semibold md:text-sm"
                style={{
                  backgroundColor: cardCategory.drkBgcolor,
                  color: cardCategory.drkColor,
                }}
              >
                {cardCategory.name}
              </span>
            ) : (
              <span
                className="rounded-full px-4 py-2 text-xs font-semibold md:text-sm"
                style={{
                  backgroundColor: cardCategory.bgColor,
                  color: cardCategory.textColor,
                }}
              >
                {cardCategory.name}
              </span>
            ))}
          <DropMenu
            trigger={
              <PiDotsThreeOutlineVerticalFill className="cursor-pointer" />
            }
            pos={`right-[0px]`}
          >
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#">Edit</a>
              <a href="#">Delete</a>
            </nav>
          </DropMenu>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-medium">{card.title}</p>
          <p className="text-xs text-[#8f959f] dark:text-drkcol">
            {card.description}
          </p>
          <div className="flex w-fit items-center gap-2.5 rounded-lg border bg-white p-1.5 dark:border-drkbrd dark:bg-drkbg2">
            <PiListChecksBold className="text-[#a4a6a8] dark:text-drkcol" />
            <p className="text-sm text-[#a4a6a8] dark:text-drkcol">
              {card.progress}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        {/* Users */}
        <div className="flex w-fit gap-1">
          <div className="h-6 w-6 overflow-hidden rounded-full border-[1px] border-white dark:border-drkbrd">
            <img src={pic} alt="profilepic" />
          </div>
          <div className="relative right-3 h-6 w-6 overflow-hidden rounded-full border-[1px] border-white dark:border-drkbrd">
            <img src={pic} alt="profilepic" />
          </div>
          <div className="relative right-6 h-6 w-6 overflow-hidden rounded-full border-[1px] border-white dark:border-drkbrd">
            <img src={pic} alt="profilepic" />
          </div>
          <div className="relative right-9 h-6 w-6 overflow-hidden rounded-full border-[1px] border-white dark:border-drkbrd">
            <img src={pic} alt="profilepic" />
          </div>
        </div>
        {/* Meta */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 text-[#a4a6a8] dark:text-drkcol">
            <PiEyeBold className="" />
            <p className="text-sm">{card.watchers}</p>
          </div>
          <div className="flex items-center gap-1 text-[#a4a6a8] dark:text-drkcol">
            <PiChatCircleDotsBold className="" />
            <p className="text-sm">{card.comments}</p>
          </div>
          <div className="flex items-center gap-1 text-[#a4a6a8] dark:text-drkcol">
            <PiPaperclipBold className="" />
            <p className="text-sm">{card.files}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
