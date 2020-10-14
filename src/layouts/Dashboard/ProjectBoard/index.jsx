import React from "react";
import BoardList from "containers/BoardList";
import NewBoard from "containers/NewBoard";

const ProjectBoard = ({ list }) => {
  return (
    <div className="project-board">
      {list.map(({ id, title, tasks }) => {
        return (
          <BoardList key={`Status-${id}`} id={id} name={title} tasks={tasks} />
        );
      })}
      <NewBoard />
    </div>
  );
};

export default ProjectBoard;
