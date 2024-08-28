import { useRef, useState } from "react";

import Modal from "../../../ui-components/Modal";

import { PiPlusBold, PiCameraBold, PiFolderPlusBold, PiImageBold } from "react-icons/pi"

export default function AddProject() {
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

  function handleClickSubmit() {
   
    console.log('form needs to be filled out');
  }


  return (
    <div>
      <Modal
        trigger={
          <button className="btn-transition 3xl:w-[275px] flex w-[180px] items-center justify-center rounded-lg border-[2px] border-dashed border-blue-600 bg-white p-4 font-medium text-[#365dff] hover:border-blue-600 hover:bg-[#365dff] hover:text-white xl:w-[225px] dark:bg-drkbg2 dark:text-drkcol">
            <PiPlusBold />
            &nbsp;Add Project
          </button>
        }
      >
        <form
          ref={formRef}
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
                      placeholder="Add the name of the new project here"
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
                      Project image
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
          {/* <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <div
              className="flex basis-1/3 cursor-pointer flex-col items-center justify-center gap-2"
              onClick={() => projImgUpload.current.click()}
            >
              <div
                ref={projImgFrame}
                className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-[1px] border-[#365dff] bg-blue-100"
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
              <p className="text-xs">{projImg ? null : `Add project image`}</p>
              <input
                type="file"
                name="fileInput"
                id="fileInput"
                className="hidden"
                ref={projImgUpload}
                onChange={handleImgChange}
              />
            </div>
          </div> */}
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
              onClick={handleClickSubmit}
            >
              Add Project
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
