import React from "react";

const ProjectHeader = ({ sprintName }) => {
  return (
    <div className="project-header">
      <div className="project-header-title">
        <h1>{sprintName}</h1>
      </div>
    </div>
  );
};

export default ProjectHeader;
