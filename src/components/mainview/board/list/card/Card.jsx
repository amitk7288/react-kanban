import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import DropMenu from "../../../../ui-components/DropMenu";
import MemberCircles from "../../../../ui-components/MemberCircles";

import {
  PiDotsThreeOutlineVerticalFill,
  PiListChecksBold,
  PiEyeBold,
  PiChatCircleDotsBold,
  PiPaperclipBold,
} from "react-icons/pi";

export default function Card({ card, categories, zen }) {

const { boardId } = useParams();
const board = useSelector((state) =>
  state.boards.find((board) => board.id === parseInt(boardId, 10)),
);
const members = board.members;

const cardCategory = categories.find((category) => category.name === card.category);


const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="flex w-[240px] cursor-pointer flex-col rounded-lg border bg-white md:w-[300px] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <div
        className={`flex flex-col gap-4 ${!zen ? `h-[230px] justify-evenly border-b border-b-drkbrd` : ``} p-4`}
      >
        <div className="flex items-center justify-between">
          {cardCategory &&
            (isDarkMode ? (
              <span
                className={`rounded-full text-xs font-semibold ${!zen ? `px-4 py-2 md:text-sm` : `md:text-xs`}`}
                style={
                  !zen
                    ? {
                        backgroundColor: cardCategory.drkBgcolor,
                        color: cardCategory.drkColor,
                      }
                    : {
                        backgroundColor: `transparent`,
                        color: cardCategory.textColor,
                      }
                }
              >
                {cardCategory.name}
              </span>
            ) : (
              <span
                className={`rounded-full text-xs font-semibold ${!zen ? `px-4 py-2 md:text-sm` : `md:text-xs`}`}
                style={
                  !zen
                    ? {
                        backgroundColor: cardCategory.bgColor,
                        color: cardCategory.textColor,
                      }
                    : {
                        backgroundColor: `transparent`,
                        color: cardCategory.textColor,
                      }
                }
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
          <p className={`font-medium ${zen ? `text-sm` : ``}`}>{card.title}</p>
          {!zen ? (
            <p className="text-xs text-[#8f959f] dark:text-drkcol">
              {card.description}
            </p>
          ) : null}
          <div
            className={`flex w-fit items-center gap-2.5 rounded-lg dark:border-drkbrd ${!zen ? `border bg-white p-1.5 dark:bg-drkbg2` : ``}`}
          >
            <PiListChecksBold className="text-[#a4a6a8] dark:text-drkcol" />
            <p className="text-sm text-[#a4a6a8] dark:text-drkcol">
              {card.progress}
            </p>
          </div>
        </div>
      </div>
      {!zen ? (
        <div className="flex items-center justify-between p-4">
          <div className="relative flex w-fit">
            <MemberCircles imgs={members} size={25} />
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
      ) : null}
    </div>
  );
}
