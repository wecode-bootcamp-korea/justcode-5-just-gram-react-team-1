import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import "./Feeds.scss";
import { AiTwotoneHeart, AiOutlineHeart} from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";
import { BsThreeDots, BsBookmarkFill } from "react-icons/bs";

function Feeds() {
  const commentText = [];
  const [commentList, setCommentList] = useState([]);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/commentData.json")
      .then((res) => res.json())
      .then((data) => setCommentList(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json")
      .then((res) => res.json())
      .then((data) => setFeed(data));
  }, []);


  const getComment = (event) => {
    commentText[0] = event.target.value;
  };

  const addComment = (comment) => {
    setCommentList((commentList) => [
      ...commentList,
      {
        userName: "Jeonghoon",
        comment: comment,
      },
    ]);
  };

  const commentUpload = (event) => {
    event.preventDefault();
    addComment(commentText[0]);
    commentText[0] = "";
    event.target.reset();
  };
  return (
    <div className="feeds-jh">
      {feed.map(f => 
        {return(
          <article className="article">
        <div className="feed-titlebox">
          <div className="feed-titleboxleft">
            <div className="feed-titlelogo">JH</div>
            <div className="feed-title">
              <div className="title-name">{
              f.userName          
              }</div>
              <div className="title-author">{f.userName}</div>
            </div>
          </div>

          <div className="feed-config">
            <BsThreeDots />
          </div>
        </div>
        <div className="feed-img">
          <img src={f.feedImage} alt="feed" />
        </div>
        <div className="feed-menus">
          <div className="feed-menusleft">
            <span className="menuslogo menusleft-heart">{f.isLiked ===true ? <AiTwotoneHeart /> : <AiOutlineHeart /> }
            </span>
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
            <span className="bold">{f.userName}</span>님 외{" "}
            <span className="bold">{f.likedNum}</span>명이 좋아합니다.
          </div>
        </div>
        <div className="feed-descripton">
          <span className="bold">{f.userName}</span> {f.content}
          <span className="blur more">더 보기</span>
          <div className="blur timestamp">54분 전</div>
        </div>
        <div className="feed-commentbox">
          <Comments commentList={commentList} />
          <form className="feed-form" onSubmit={commentUpload}>
            <input
              className="comment-text"
              placeholder="댓글 달기..."
              onChange={getComment}
            />
            <button className="comment-add blur">게 시</button>
          </form>
        </div>
      </article>

      )})}
      
    </div>
  );
}

export default Feeds;
