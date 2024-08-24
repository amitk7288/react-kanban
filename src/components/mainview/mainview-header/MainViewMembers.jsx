import { useRef, useState } from "react";

import Modal from "../../ui-components/Modal";

import { PiPlusBold, PiCameraBold, PiUserPlusBold } from "react-icons/pi";
import ddlogo from "../../../assets/DDLogo.png";

export default function MainViewMembers() {
  const [profileImg, setProfileImg] = useState(null);
  const userImgUpload = useRef(null);
  const userImgFrame = useRef(null);
  const formRef = useRef(null);

  function handleImgChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files[0]) {
      reader.onload = function (e) {
        setProfileImg(e.target.result);
        userImgFrame.current.src = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  function handleClickCancelBtn() {
    formRef.current.reset();
    setProfileImg(null);
  }

  return (
    <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-self-end">
      <div className="hidden md:block">
        <div className="flex w-fit gap-1">
          <div className="h-8 w-8 overflow-hidden rounded-full border-[1px] border-white">
            <img src={ddlogo} alt="profilepic" />
          </div>
          <div className="relative right-3 h-8 w-8 overflow-hidden rounded-full border-[1px] border-white">
            <img src={ddlogo} alt="profilepic" />
          </div>
          <div className="relative right-6 h-8 w-8 overflow-hidden rounded-full border-[1px] border-white">
            <img src={ddlogo} alt="profilepic" />
          </div>
          <div className="relative right-9 h-8 w-8 overflow-hidden rounded-full border-[1px] border-white">
            <img src={ddlogo} alt="profilepic" />
          </div>
        </div>
      </div>
      <div>
        <Modal
          trigger={
            <button className="btn-transition flex cursor-pointer items-center whitespace-nowrap rounded-md bg-[#365dff] p-3  text-sm font-normal text-white hover:bg-indigo-500">
              <div className="md:flex items-center hidden">
                <PiPlusBold />
                <p>&nbsp;Add Member</p>
              </div>
              <PiUserPlusBold className="text-xl md:hidden" />
            </button>
          }
        >
          <p className="pb-4 text-center text-xl font-semibold leading-7">
            Add a new member
          </p>
          <form
            ref={formRef}
            className="flex h-[100%] flex-col justify-between gap-5"
          >
            <div className="flex justify-between gap-5">
              {/* image upload */}
              <div
                className="flex basis-1/3 cursor-pointer flex-col items-center justify-center gap-2"
                onClick={() => userImgUpload.current.click()}
              >
                <div
                  ref={userImgFrame}
                  className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-[1px] border-[#365dff] bg-blue-100"
                >
                  {profileImg ? (
                    <img
                      src={profileImg}
                      alt="Profile Picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <PiCameraBold className="text-2xl text-blue-950" />
                  )}
                </div>
                <p className="text-xs">
                  {profileImg ? null : `Add profile picture`}
                </p>
                <input
                  type="file"
                  name="fileInput"
                  id="fileInput"
                  className="hidden"
                  ref={userImgUpload}
                  onChange={handleImgChange}
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
                Add Member
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
