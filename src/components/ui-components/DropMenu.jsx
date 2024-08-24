import { useState, useEffect, useRef } from "react";

export default function DropMenu ({ children, trigger, }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div onClick={toggleDropdown}>{trigger}</div>

      {isOpen && (
        <div className="dark:bg-drkbg dark:text-drkcol dark:border-drkbrd absolute right-0 mt-2 w-[350px] rounded-md border border-gray-200 bg-white p-4 shadow-lg z-[100]">
          {children}
        </div>
      )}
    </div>
  );
}