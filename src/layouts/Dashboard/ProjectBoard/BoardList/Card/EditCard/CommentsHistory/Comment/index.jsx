import React from "react";
import { dateFormatOptions } from "config";

const Comment = ({ description, createdDate }) => {
  return (
    <div className="comment-li">
      <p>{description}</p>
      <p>
        {new Intl.DateTimeFormat("default", dateFormatOptions).format(
          Date.parse(createdDate)
        )}
      </p>
    </div>
  );
};

export default Comment;
