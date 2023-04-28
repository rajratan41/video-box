import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-1 rounded-xl text-white bg-gray-500 hover:bg-black">
        {name}
      </button>
    </div>
  );
};

export default Button;
