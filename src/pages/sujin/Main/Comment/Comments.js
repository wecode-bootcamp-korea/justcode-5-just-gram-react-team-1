import React from "react";

export default function Comments(props){
    // console.log(props);
    return(
        <div key={props.index}>
            <p>
                <b className="profile_name">sujinChoi</b>
                <span>{props.tag}</span>
            </p>
            <button type="button" className="btn_commDelete">
                <i className="fas fa-times-circle"></i>
            </button>
            <button type="button" className="btn_like">
                <i className="fa-regular fa-heart "></i>
            </button>
        </div>
    );
}