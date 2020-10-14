import React from "react";
import plusIcon from "assets/svg/plus.svg";

const AddNew = ({ text, callBack }) => {
  return (
    <div className="add-new" onClick={() => callBack()}>
      <img src={plusIcon} className="icon-sm" alt="plus icon" />
      <span>Add another {text}</span>
    </div>
  );
};

export default AddNew;
