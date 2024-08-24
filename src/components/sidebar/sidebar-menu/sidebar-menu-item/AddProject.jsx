import Modal from "../../../ui-components/Modal";

import { PiPlusBold } from "react-icons/pi"

export default function AddProject() {
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
        <p className="text-center text-xl font-semibold leading-7">
          Add a new project
        </p>
        <form className="flex h-[100%] flex-col justify-between gap-5">
          <div className="flex justify-between gap-5">
            {/* image upload */}
            <div className="flex basis-1/3 cursor-pointer flex-col items-center justify-center gap-2">
              <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-[1px] border-[#365dff] bg-blue-100"></div>
              <p className="text-xs"></p>
              <input
                type="file"
                name="fileInput"
                id="fileInput"
                className="hidden"
              />
            </div>
            {/* fields */}
            <div className="flex basis-2/3 items-end">
              <div className="flex items-center gap-10">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="card-title"
                    className="text-sm font-medium leading-6"
                  >
                    First name
                  </label>

                  <input
                    id="card-title"
                    name="card-title"
                    type="text"
                    placeholder="Add first name"
                    className="rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-drkbg"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="card-title"
                    className="block text-sm font-medium leading-6"
                  >
                    Last name
                  </label>

                  <input
                    id="card-title"
                    name="card-title"
                    type="text"
                    placeholder="Add last name"
                    className="rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-drkbg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="mt-5 flex items-center justify-end gap-6">
            <button type="button" className="text-sm font-semibold">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#365dff] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Member
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
