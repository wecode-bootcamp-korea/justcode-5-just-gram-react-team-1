import { useState } from "react";
import { FiTrash } from "react-icons/fi";

function Comments({ commentid,userName,content,isLiked,commentDelte}) {
  const handcomment = (id) =>{
    commentDelte(id)
  }
  const [commentIsLiked,setcommentIsLiked] =useState(isLiked);
  
 const clickL = ()=>{
  commentIsLiked? setcommentIsLiked(false): setcommentIsLiked(true)
 }
  return (
          <li  className="comment" style={{display:"flex", justifyContent:"space-between"}}>
            <div>
            <span className="newcomment-id">{userName}</span>
            <span className="newcomment-text">{content}</span>
            </div>
            <div>
              <span onClick={clickL} className="newcomment-icons">
              {!commentIsLiked?   
              <img style={{width:"15px",height:"15px"}} src="/images/jeonghoon/heart.png" alt="feed"/>  : <img style={{width:"15px",height:"15px"}} src="/images/jeonghoon/pinkHeart.png"/>}
              </span>
              <span className="newcomment-icons">
                <FiTrash onClick={()=>{handcomment(commentid)}} />
              </span>
              </div>
          </li>    
  );
}

export default Comments;
