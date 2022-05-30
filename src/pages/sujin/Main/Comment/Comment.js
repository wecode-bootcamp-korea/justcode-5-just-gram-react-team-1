import React from "react";

export default function Comment(props){
    // console.log(props);
    return(
        <div key={props.index}>
            <p>
                <b className="profile_name">{props.name}</b>
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