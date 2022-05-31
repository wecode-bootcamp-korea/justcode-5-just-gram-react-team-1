import React from "react";

function Comment(props){
    // console.log(props);
    return(
        <div key={props.idx}>
            <p>
                <b className="profile_name">{props.name}</b>
                <span>{props.content}</span>
                <span>{props.comment}</span>
            </p>
            <button type="button" className="btn_commDelete">
                <i className="fas fa-times-circle"></i>
            </button>
            <button type="button" className="btn_like">
                <i className={
                    props.liked === true ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }></i>
            </button>
        </div>
    );
}
export default Comment;