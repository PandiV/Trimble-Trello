import React from "react";
import Comment from "containers/Comment";

const CommentsHistory = ({ comments }) => {
  return (
    <div className="comments">
      {comments.reverse().map((data) => (
        <Comment key={data} id={data} />
      ))}
    </div>
  );
};

export default CommentsHistory;
