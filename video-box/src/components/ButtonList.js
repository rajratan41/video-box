import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "News",
  "Cricket",
  "Soccer",
  "Gaming",
  "Website",
  "Mixes",
  "T-Series",
  "Music",
  "Javascript",
];

const ButtonList = () => {
  return (
    <div className=" mt-5 ml-5 flex gap-3 items-center justify-center">
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
