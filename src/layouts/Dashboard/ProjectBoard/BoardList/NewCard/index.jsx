import React, { useState, useRef } from "react";
import AddNewButton from "components/AddNewButton";
import AddNewData from "components/AddNewData";

import { useOnClickOutside } from "helper/customhooks";
import { CONTENT_TYPE } from "static";

const NewCard = ({ addNewTaskFromStatus, statusId }) => {
  const [shouldAddNewCard, setAddNewCard] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setAddNewCard(false));
  return (
    <div className="">
      {!shouldAddNewCard ? (
        <AddNewButton
          text={CONTENT_TYPE.card}
          callBack={() => setAddNewCard(true)}
        />
      ) : (
        <AddNewData
          type={CONTENT_TYPE.card}
          ref={ref}
          addNewData={(value) =>
            addNewTaskFromStatus({ statusId, title: value })
          }
        />
      )}
    </div>
  );
};

export default NewCard;
