import React, { useState } from "react";
import DescIcon from "./DescIcon";
import { useStyleForDrag } from "helper/customhooks";
import Modal from "components/Modal";
import EditCard from "containers/EditCard";

const Card = (props) => {
  const [shouldShowModal, setModalShow] = useState(false);

  useStyleForDrag();

  const onDragStart = (e, dragId) => {
    e.dataTransfer.setData("dragTaskId", dragId);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, dropId) => {
    e.stopPropagation();
    const dragStatusId = e.dataTransfer.getData("dragStatusId");
    const dragTaskId = e.dataTransfer.getData("dragTaskId");
    e.dataTransfer.clearData();

    props.swapTasks({
      dragStatusId,
      dropStatusId: props.statusId,
      dragTaskId,
      dropTaskId: dropId,
    });
  };

  return (
    <>
      <div
        className="project-board-card-content-list"
        draggable={true}
        onDragStart={(e) => onDragStart(e, props.id)}
        onDragOver={(e) => onDragOver(e, props.id)}
        onDrop={(e) => onDrop(e, props.id)}
        onClick={(e) => setModalShow(!shouldShowModal)}
      >
        <div>
          <p>{props.title}</p>
        </div>
        <div className="project-board-card-content-list-footer">
          <div className="task-id">{props.description && <DescIcon />}</div>
        </div>
      </div>
      {shouldShowModal && (
        <Modal>
          <EditCard
            statusId={props.statusId}
            title={props.title}
            id={props.id}
            description={props.description}
            comments={props.comments}
            closeModal={() => setModalShow(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default Card;
