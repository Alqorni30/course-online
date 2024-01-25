"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border bg-gray-200 rounded mb-2">
      <div className="p-4 cursor-pointer" onClick={toggleAccordion}>
        <div className="flex justify-between items-center">
          <h2 className="lg:text-lg text-md font-semibold">{title}</h2>
          <button
            className=""
          >
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`p-4 ${isOpen ? "transition dur" : ""}`}>{children}</div>
      )}
    </div>
  );
};

export default Accordion;
