import React from "react";
import Comments from "./Comments";

function CommentBoard(props) {
  console.log("props", props);

  return (
    <>
      <div className="article-comment">
        <span className="bold-text user-id">user id</span>
        <p>{props.comment}</p>
      </div>
    </>
  );
}

export default CommentBoard;
