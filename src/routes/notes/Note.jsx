//import { PiDotsThreeBold } from "react-icons/pi";
import { MdOutlineAddReaction } from "react-icons/md";
import img from "/src/assets/DDLogo.png";
//import DropMenu from "../../components/ui-components/DropMenu";

export default function Note({text}) {
  return (
    <div className="w-[50%] px-3 py-1.5">
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 basis-[30px]">
          <img
            src={img}
            alt="name"
            className="h-[30px] w-[30px] rounded-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-1 rounded-md border p-1.5">
          <p className="text-sm font-semibold">
            Amit Kadara
            <span className="text-xs font-normal text-[#878686]">
              &nbsp; 2d ago
            </span>
          </p>
          <div className="break-all">
            <p className="whitespace-pre-wrap text-[13px] leading-normal text-[#545355]">
              {text}
            </p>
          </div>
          <div className="mt-1 flex items-center gap-2 text-gray-600">
            <MdOutlineAddReaction className="cursor-pointer text-lg" />
            <div className="flex items-center gap-2 text-xs">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}