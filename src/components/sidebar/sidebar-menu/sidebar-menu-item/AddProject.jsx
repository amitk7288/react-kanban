import { useRef, useState } from "react";
import {useDispatch, useSelector } from "react-redux";

import { addBoard } from "../../../../features/boards/boardsSlice";

import Modal from "../../../ui-components/Modal";

import { PiPlusBold, PiCameraBold, PiFolderPlusBold, PiImageBold } from "react-icons/pi"

export default function AddProject() {

  const dispatch = useDispatch();
  const boardsLength = useSelector((state) => state.boards.length);

  const [projName, setProjName] = useState("");
  const [projImg, setProjImg] = useState(null);
  const projImgUpload = useRef(null);
  const projImgFrame = useRef(null);
  const formRef = useRef(null);

  function handleImgChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files[0]) {
      reader.onload = function (e) {
        setProjImg(e.target.result);
        projImgFrame.current.src = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  function handleChangeProjName(event) {
    setProjName(event.target.value)
  }

  function handleClickCancelBtn() {
    formRef.current.reset();
    setProjImg(null);
    setProjName("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formInfo = {
      id: boardsLength + 1,
      name: projName,
      img: projImg,
      complete: 0,
      members: [],
      lists: [
        {
          id: 1,
          name: "To Do",
          cards: [
            {
              id: 1,
              category: "UX/UI",
              title: "Wireframing",
              description:
                "Create low-fidelity designs that outline the basic structure and layout of the product or service.",
              progress: "0/8",
              //members: members[(1, 2)],
              watchers: 5,
              comments: 2,
              files: 3,
            },
            {
              id: 2,
              category: "Design",
              title: "First design concepts",
              description:
                "Create a concept based on the research and insights gathered during the discovery phase of the project.",
              progress: "1/5",
              //members: members[3], // Specific member assigned
              watchers: 3,
              comments: 4,
              files: 1,
            },
          ],
        },
        {
          id: 2,
          name: "In Progress",
        },
        {
          id: 3,
          name: "Review",
        },
        {
          id: 4,
          name: "Done",
        },
      ],
    };
    dispatch(addBoard(formInfo));
    handleClickCancelBtn();
  }


  return (
    <div>
      <Modal
        trigger={
          <button className="btn-transition flex cursor-pointer items-center whitespace-nowrap rounded-md bg-[#365dff] p-3 text-sm font-normal text-white">
            <PiPlusBold />
          </button>
        }
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex h-[100%] flex-col justify-between gap-5"
        >
          <div className="space-y-12">
            <div className="">
              <div className="flex gap-4">
                <h2 className="text-lg font-semibold leading-7">
                  Add a new project
                </h2>
              </div>
              <div
                className="mt-4 flex basis-1/3 cursor-pointer flex-col items-center justify-center gap-2"
                onClick={() => projImgUpload.current.click()}
              >
                <div
                  ref={projImgFrame}
                  className={`flex h-[100px] w-[100px] items-center justify-center rounded-full border-[1px] ${!projImg ? "border-[#365dff]" : null} bg-blue-100`}
                >
                  {projImg ? (
                    <img
                      src={projImg}
                      alt="Profile Picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <PiCameraBold className="text-2xl text-blue-950" />
                  )}
                </div>
              </div>
              <p className="mt-2 text-center font-semibold dark:text-white">
                {projName}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <div className="flex items-center gap-2">
                    <PiFolderPlusBold className="text-xl" />
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium leading-6"
                    >
                      Project name
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={handleChangeProjName}
                      id="project-name"
                      name="project-name"
                      type="text"
                      placeholder="ABC Ltd"
                      value={projName}
                      className="block w-full rounded-md border-0 py-1.5 text-sm shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 dark:text-drkbg"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <div className="flex items-center gap-2">
                    <PiImageBold className="text-xl" />
                    <label
                      htmlFor="project-img"
                      className="block text-sm font-medium leading-6"
                    >
                      Project logo
                    </label>
                  </div>
                  <div className="mt-2 w-[50px]">
                    <input
                      type="file"
                      name="fileInput"
                      id="fileInput"
                      ref={projImgUpload}
                      onChange={handleImgChange}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-end gap-6">
            <button
              type="button"
              className="text-sm font-semibold"
              onClick={handleClickCancelBtn}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!projName || !projImg}
              className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${projName && projImg ? "bg-[#365dff] text-white" : "bg-gray-400 text-white"}`}
            >
              Add Project
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
