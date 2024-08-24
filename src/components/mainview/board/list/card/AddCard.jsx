import { useState} from "react";

import {
  PiCardsBold,
  PiFeatherBold,
  PiTagChevronBold,
  PiEyeBold,
  PiEyeSlashBold,
  PiCheckSquareBold,
} from "react-icons/pi";

import CardChecklist from "./CardChecklist";

export default function AddCard({ list }) {
  const [watching, setWatching] = useState(false);
  const [chars, setChars] = useState(0);

  const maxChars = 150;

  function handleChangeChars(e) {
    let typedCharsLength = e.target.value.length;
    if (typedCharsLength <= maxChars) {
      setChars(typedCharsLength);
    } else {
      setChars(maxChars);
      e.target.value = e.target.value.substring(0, maxChars);
    }
  }


  return (
    <div className="lex flex-col">
      <div className="flex-1 p-4">
        <form>
          <div className="space-y-12">
            <div className="">
              <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold leading-7">
                    Add a new task
                  </h2>
                <div
                  className="flex w-fit cursor-pointer items-center gap-2 rounded-md bg-slate-300 px-2 py-1.5 text-black dark:bg-slate-700 dark:text-drkcol"
                  onClick={() => {
                    setWatching((prev) => !prev);
                  }}
                >
                  {watching ? (
                    <>
                      <PiEyeBold />
                      <p className="text-sm">Watching</p>
                    </>
                  ) : (
                    <>
                      <PiEyeSlashBold />
                      <p className="text-sm">Watch</p>
                    </>
                  )}
                </div>
              </div>
              <p className="text-sm">In list: {list.name}</p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <div className="flex items-center gap-2">
                    <PiCardsBold className="text-xl" />
                    <label
                      htmlFor="card-title"
                      className="block text-sm font-medium leading-6"
                    >
                      Title
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="card-title"
                      name="card-title"
                      type="text"
                      placeholder="Add the name of the task here"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-drkbg"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <div className="flex items-center gap-2">
                    <PiFeatherBold className="text-xl" />
                    <label
                      htmlFor="card-description"
                      className="block text-sm font-medium leading-6"
                    >
                      Description
                    </label>
                    <span
                      className={`text-xs ${chars >= 140 && "text-red-500"} ${chars < 140 && "text-black dark:text-white"} `}
                    >
                      {chars}/{maxChars}
                    </span>
                  </div>
                  <div className="mt-2">
                    <textarea
                      id="card-description"
                      name="card-description"
                      type="text"
                      placeholder="Add a short description"
                      rows="3"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-drkbg"
                      onChange={handleChangeChars}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="flex items-center gap-2">
                    <PiTagChevronBold className="text-xl" />
                    <label
                      htmlFor="card-category"
                      className="block text-sm font-medium leading-6"
                    >
                      Select Category
                    </label>
                  </div>

                  <div className="mt-2">
                    <select
                      id="card-category"
                      name="card-category"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:text-drkbg2"
                    >
                      <option className="">UX/UI</option>
                      <option className="">Design</option>
                      <option className="">Branding</option>
                      <option className="">Marketing</option>
                      <option className="">Testing</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <div className="mb-1 flex items-center gap-2">
                    <PiCheckSquareBold className="text-xl" />
                    <label
                      htmlFor="card-description"
                      className="block text-sm font-medium leading-6"
                    >
                      Checklist
                    </label>
                  </div>
                  <CardChecklist />
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#365dff] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
