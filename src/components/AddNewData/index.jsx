import React, { useRef, useEffect, useState } from "react";

const AddNewData = React.forwardRef((props, ref) => {
  const textInput = useRef(null);
  const [newData, setNewData] = useState("");

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleButtonClick = () => {
    props.addNewData(newData);
    setNewData("");
  };

  return (
    <div className="project-board-card-add-new" ref={ref}>
      <input
        type="text"
        ref={textInput}
        value={newData}
        placeholder={`enter ${props.type} here...`}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button className="button" onClick={() => handleButtonClick()}>
        Add {props.type}
      </button>
    </div>
  );
});

export default AddNewData;
