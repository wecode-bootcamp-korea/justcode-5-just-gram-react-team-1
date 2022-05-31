import React, { useState } from "react";

function Comment(props){
    // console.log(props);
    const [like, setLike] = useState(props.liked)

    const handleLike = () =>{
        like ? setLike(false) : setLike(true)
    }
    // console.log(like)

    const handleEvent = (id) => {
        props.deleteEvent(id);
    }

    return(
        <div key={props.id}>
            <p>
                <b className="profile_name">{props.name}</b>
                <span>{props.content}</span>
            </p>
            <button type="button" className="btn_commDelete" onClick={()=>handleEvent(props.id)}>
                <i className="fas fa-times-circle"></i>
            </button>
            <button type="button" className="btn_like" onClick={handleLike}>
                <i className={
                    props.liked === true ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }></i>
            </button>
        </div>
    );
}

export default Comment;