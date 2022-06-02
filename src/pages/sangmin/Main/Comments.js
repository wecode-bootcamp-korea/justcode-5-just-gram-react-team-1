import React, {useState} from "react";

function Comments({commentId, userName, content, isLiked, deleteComment}) {
    
    const [isCommentLiked, setIsCommentLiked] = useState(isLiked);

    const CommentLikedButton = () => {
        isCommentLiked ? setIsCommentLiked(false) : setIsCommentLiked(true);
    }

    return (
        <li className="comment-li">
            <div>
                <span className="comment-id">{userName} </span>
                <span className="comment-content">{content}</span>
            </div>
            <div>
                <button onClick={CommentLikedButton}>
                    {isCommentLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
                <button onClick={() => deleteComment(commentId)}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
                
            </div>
        </li>
    );
}

export default Comments;