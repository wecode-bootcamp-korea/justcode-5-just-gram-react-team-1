import React from "react";

function Comments({ commentList }) {
    console.log(commentList)
    return (
        <ul id="comment-list">
        {
            commentList.map((comments, idx) => {
                return (
                    <li key = {idx} className="comment-li">
                        <div>
                            <span className="comment-id">{comments.userName} </span>
                            <span className="comment-content">{comments.content}</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-heart"></i>
                            <i className="fa-regular fa-trash-can"></i>
                        </div>
                    </li>
                );
            })
        }
        </ul>
    );
}

export default Comments;