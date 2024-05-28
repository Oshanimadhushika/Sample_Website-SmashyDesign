import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="border-b border-gray-200 py-4">
        <div
          onClick={toggleOpen}
          className="flex justify-between items-center cursor-pointer w-full"
        >
          <h3 className="text-md font-semibold">{question}</h3>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isOpen && <p className="mt-2 text-gray-600 ">{answer}</p>}
      </div>
    </>
  );
};
export default FAQItem;
