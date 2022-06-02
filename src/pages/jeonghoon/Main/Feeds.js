import React, { useState } from "react";
import Comments from "./Comments";
import "./Feeds.scss";
import { AiTwotoneHeart, AiOutlineHeart} from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";
import { BsThreeDots, BsBookmarkFill} from "react-icons/bs";

function Feeds({
          userName,
          feedImage,
          content,
          likedNum,
          isLiked,
          comments
}) {
  const [commentValue,setComment] = useState('');
  const [commentList,setCommentList] = useState(comments);

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = (comment) => {
    setCommentList([
      ...commentList,
      {
        id:commentList.length+1,
        userName: "Jeonghoon",
        content: comment,
        isLiked:false
      },
    ]);
    console.log(commentList)
    setComment('');
  };

  const commentUpload = (event) => {
    event.preventDefault();
    addComment(commentValue);
  };

  const commentDelte = (id) =>{
    setCommentList([
      ...commentList.filter(comment => comment.id !== id)
    ])
  };
  const [Liked,setIsLiked] =useState(isLiked);
  
  const likeed = ()=>{
    Liked? setIsLiked(false): setIsLiked(true)
  }
  return (   
          <article className="article-Jh">
        <div className="feed-titlebox">
          <div className="feed-titleboxleft">
            <div className="feed-titlelogo">JH</div>
            <div className="feed-title">
              <div className="title-name">{
              userName          
              }</div>
              <div className="title-author">{userName}</div>
            </div>
          </div>

          <div className="feed-config">
            <BsThreeDots />
          </div>
        </div>
        <div className="feed-img">
          <img src={feedImage} alt="feed" />
        </div>
        <div className="feed-menus">
          <div className="feed-menusleft">
            
           <button  onClick={likeed} className="menuslogo menusleft-heart">{Liked ? <AiTwotoneHeart /> : <AiOutlineHeart /> }</button>
            <span className="menuslogo menusleft-comment">
              <BiCommentDetail />
            </span>
            <span className="menuslogo menusleft-share">
              <MdOutlineIosShare />
            </span>
          </div>
          <div className="feed-menusright">
            <div className="menusright-bookmark">
              <BsBookmarkFill />
            </div>
          </div>
        </div>

        <div className="feed-likebox">
          <div className="liker-profile">Jh</div>
          <div className="like-counter">
            <span className="bold">{userName}</span>님 외{" "}
            <span className="bold">{likedNum}</span>명이 좋아합니다.
          </div>
        </div>
        <div className="feed-descripton">
          <span className="bold">{userName}</span> {content}
          <span className="blur more">더 보기</span>
          <div className="blur timestamp">54분 전</div>
        </div>
        <div className="feed-commentbox">
        <ul className="feed-commentlist">
          {commentList.map(comment => (

            <Comments key={comment.id} commentid={comment.id} userName={comment.userName} content={comment.content} isLiked={comment.isLiked}
            commentDelte={commentDelte}/>
          ))
          }
          </ul>
          <form className="feed-form" onSubmit={commentUpload}>
            <input
              className="comment-text"
              placeholder="댓글 달기..."
              onChange={getComment}
              value={commentValue}
            />
            <button className="comment-add blur">게 시</button>
          </form>
        </div>
      </article>
  );
}

export default Feeds;
