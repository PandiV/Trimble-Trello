import React from "react";
import Header from "containers/Header";
import ProjectHeader from "containers/ProjectHeader";
import ProjectBoard from "containers/ProjectBoard";

export default () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <ProjectHeader />
        <ProjectBoard />
      </div>
    </>
  );
};
