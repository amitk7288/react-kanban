import { useRef, useState } from "react";

import Modal from "../../../ui-components/Modal";

import { PiPlusBold, PiCameraBold } from "react-icons/pi"

export default function AddProject() {
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

  function handleClickCancelBtn() {
    formRef.current.reset();
    setProjImg(null);
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
        <p className="mb-5 text-center text-xl font-semibold leading-7">
          Add a new project
        </p>
        <form
          ref={formRef}
          className="flex h-[100%] flex-col justify-between gap-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-end items-center justify-between gap-6">
            {/* image upload */}
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
              <p className="text-xs">
                {projImg ? null : `Add project image`}
              </p>
              <input
                type="file"
                name="fileInput"
                id="fileInput"
                className="hidden"
                ref={projImgUpload}
                onChange={handleImgChange}
              />
            </div>
            {/* fields */}
            <div className="flex basis-2/3 items-end">
              <div className="flex items-center gap-10">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="proj-name"
                    className="text-sm font-medium leading-6"
                  >
                    Project name
                  </label>

                  <input
                    id="proj-name"
                    name="proj-name"
                    type="text"
                    placeholder="Add project name"
                    className="rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-drkbg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* buttons */}
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
              className="rounded-md bg-[#365dff] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Project
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
