import React, { useState } from "react";

function Comment({ id, userName, content, isLiked, commentRemove }){
    // console.log(props);
    const [like, setLike] = useState(isLiked)

    const handleLike = () =>{
        like ? setLike(false) : setLike(true)
    }
    const handleRemove = (id) => {
        commentRemove(id);
    }

    return(
        <div>
            <p>
                <b className="profile_name">{userName}</b>
                <span>{content}</span>
            </p>
            <button type="button" className="btn_commDelete" onClick={()=>handleRemove(id)}>
                <i className="fas fa-times-circle"></i>
            </button>
            <button type="button" className="btn_like" onClick={handleLike}>
                <i className={like ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
            </button>
        </div>
    );
}

export default Comment;