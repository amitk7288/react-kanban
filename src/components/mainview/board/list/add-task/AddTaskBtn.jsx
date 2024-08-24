import Modal from "../../../../ui-components/Modal";
import AddCard from "../card/AddCard";

import { PiPlusBold } from "react-icons/pi";

export default function AddTaskBtn({list}) {
  return (
    <Modal
      trigger={
        <button className="flex w-[250px] items-center justify-center rounded-lg border bg-white p-4 font-medium text-[#365dff] md:w-[300px] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
          <PiPlusBold />
          <p className="text-sm md:text-base">&nbsp;Add New Task</p>
        </button>
      }
    >
      <AddCard list={list} />
    </Modal>
  );
}