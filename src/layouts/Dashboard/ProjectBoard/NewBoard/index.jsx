import React, { useState, useRef } from "react";
import AddNewButton from "components/AddNewButton";
import AddNewData from "components/AddNewData";
import { useOnClickOutside } from "helper/customhooks";
import { CONTENT_TYPE } from "static";

const NewBoard = ({ addNewStatus }) => {
  const [shouldAddNewBoard, setAddNewBoard] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setAddNewBoard(false));

  return (
    <div className="project-board-card">
      {!shouldAddNewBoard ? (
        <AddNewButton text="list" callBack={() => setAddNewBoard(true)} />
      ) : (
        <AddNewData
          type={CONTENT_TYPE.list}
          ref={ref}
          addNewData={addNewStatus}
        />
      )}
    </div>
  );
};

export default NewBoard;
