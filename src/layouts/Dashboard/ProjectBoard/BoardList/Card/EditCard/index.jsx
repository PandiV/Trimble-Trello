import React, { useState, useRef } from "react";
import CommentsHistory from "./CommentsHistory";
import Close from "assets/svg/close.svg";

import { useOnClickOutside } from "helper/customhooks";

const EditCard = (props) => {
  const [shouldOpenSave, setSaveButton] = useState(false);
  const [shouldAddCommentOpen, setAddCommentOpen] = useState(false);

  const [desc, setDesc] = useState("");
  const [comment, setComment] = useState("");

  const saveRef = useRef(null);
  const commentRef = useRef(null);

  useOnClickOutside(saveRef, () => setSaveButton(false));
  useOnClickOutside(commentRef, () => setAddCommentOpen(false));

  return (
    <div className="edit-card">
      <div className="_df _jc-fe _mx-25-50">
        <img
          onClick={props.closeModal}
          className="icon-md icon _h-pointer"
          src={Close}
          alt="close"
        />
      </div>
      <div className="edit-card-header _df _jc-sb">
        <h2 className="_capitalize">{props.title}</h2>
        <button
          className="button _fr"
          onClick={() => {
            props.deleteTaskFromStatus({
              statusId: props.statusId,
              taskId: props.id,
            });
            props.closeModal();
          }}
        >
          Delete card
        </button>
      </div>
      <div className="edit-card-body">
        <div className="edit-card-body-desc">
          <h4>Description</h4>
          <div className="" ref={saveRef}>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc || props.description}
              row="5"
              col="10"
              onFocus={() => setSaveButton(!shouldOpenSave)}
            />
            {shouldOpenSave && (
              <button
                className="button"
                onClick={() =>
                  props.updateDesc({
                    taskId: props.id,
                    description: desc,
                  })
                }
              >
                save
              </button>
            )}
          </div>
        </div>
        <div className="edit-card-body-comments">
          <h4>Comments</h4>
          <div className="" ref={commentRef}>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              row="5"
              col="10"
              placeholder="write a comment..."
              onFocus={() => setAddCommentOpen(!shouldAddCommentOpen)}
            />
            {shouldAddCommentOpen && (
              <button
                className="button"
                onClick={() =>
                  props.addCommentsFromTask({
                    taskId: props.id,
                    description: comment,
                  })
                }
              >
                Add comments
              </button>
            )}
          </div>
          <CommentsHistory comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default EditCard;
