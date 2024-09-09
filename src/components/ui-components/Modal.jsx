
import { useRef, useEffect } from "react"; 
import { createPortal } from "react-dom";

import { PiXBold } from "react-icons/pi";

export default function Modal({ children, closeModal }) {
  let overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        overlayRef.current &&
        overlayRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <>
      {createPortal(
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[99] bg-gray-900 bg-opacity-80"
            ref={overlayRef}
          ></div>

          {/* Modal */}
          <dialog className="fixed inset-0 z-[100] flex items-center justify-center rounded-md bg-transparent">
            <div className="relative w-[90vw] rounded-md border border-gray-200 bg-white p-4 shadow-lg sm:h-auto sm:w-[600px] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
              <PiXBold
                className="absolute right-4 cursor-pointer text-xl text-slate-500 dark:text-drkcol"
                onClick={closeModal}
              />
              <div className="no-scrollbar max-h-[80vh] overflow-y-auto">
                {children}
              </div>
            </div>
          </dialog>
        </>,
        document.body,)}
    </>
  );
}

// ORIGINAL CODE

// import { useState, useRef, useEffect  } from "react"
// import { createPortal } from "react-dom";

// import { PiXBold } from "react-icons/pi";

// export default function Modal({children, trigger}) {
//   const [isOpen, setIsOpen] = useState(false);
//   let overlayRef = useRef(null);

//   const toggleModal = () => {
//     setIsOpen((prev) => !prev)
//   }

//   useEffect(()=>{
//     const handleClickOutside = (event) => {
//       if (isOpen && overlayRef.current && overlayRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };

//   }, [isOpen]);

//   return (
//     <div className="relative inline-block text-left">
//       <div onClick={toggleModal}>{trigger}</div>

//       {isOpen &&
//         createPortal(
//           <>
//             {/* Overlay */}
//             <div
//               className="fixed inset-0 z-[99] bg-gray-900 bg-opacity-80"
//               ref={overlayRef}
//             ></div>

//             {/* Modal */}
//             <dialog className="fixed inset-0 z-[100] flex items-center justify-center rounded-md bg-transparent">
//               <div className="relative w-[90vw] rounded-md border border-gray-200 bg-white p-4 shadow-lg sm:h-auto sm:w-[600px] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
//                 <PiXBold
//                   onClick={toggleModal}
//                   className="absolute right-4 cursor-pointer text-xl text-slate-500 dark:text-drkcol"
//                 />
//                 <div className="max-h-[80vh] overflow-y-auto no-scrollbar">
//                   {children}
//                 </div>
//               </div>
//             </dialog>
//           </>,
//           document.body,
//         )}
//     </div>
//   );
// }
