import React from "react";

// Define types for the props
interface ProjectTagProps {
  name: string;           // The name of the tag
  onClick: (name: string) => void; // The function to call on click, passing the tag name
  isSelected: boolean;    // Whether the tag is selected or not
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}  // Pass the name to the onClick handler
    >
      {name}
    </button>
  );
};

export default ProjectTag;
