import React from "react";
import Card from "containers/Card";
import NewCard from "containers/NewCard";
import DeleteSvg from "assets/svg/trash.svg";
import { useStyleForDrag } from "helper/customhooks";

const BoardList = ({
  name,
  id,
  tasks,
  swapStatus,
  swapTasks,
  deleteStatus,
}) => {
  useStyleForDrag();

  const onDragStart = (e, id) => {
    e.stopPropagation();
    e.dataTransfer.setData("dragStatusId", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, id) => {
    e.stopPropagation();
    if (!e.dataTransfer.getData("dragTaskId")) {
      const dragStatusId = e.dataTransfer.getData("dragStatusId");
      swapStatus({
        dragStatusId,
        dropStatusId: id,
      });
    }
  };

  const onDropContent = (e, id) => {
    e.stopPropagation();
    const dragStatusId = e.dataTransfer.getData("dragStatusId");
    const dragTaskId = e.dataTransfer.getData("dragTaskId");
    e.dataTransfer.clearData();

    swapTasks({
      dragStatusId,
      dropStatusId: id,
      dragTaskId,
    });
  };

  return (
    <div
      className="project-board-card"
      draggable={true}
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, id)}
    >
      <div className="project-board-card-header _h-pointer">
        <p>{name.replace("_", " ")}</p>
        <img
          className="icon-sm icon"
          src={DeleteSvg}
          alt="delete icon"
          onClick={() => deleteStatus(id)}
        />
      </div>
      <div
        className="project-board-card-content _pb-1"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDropContent(e, id)}
      >
        {tasks.map((data) => {
          return <Card key={data} id={data} statusId={id} />;
        })}
        <NewCard statusId={id} />
      </div>
    </div>
  );
};

export default React.memo(BoardList);
