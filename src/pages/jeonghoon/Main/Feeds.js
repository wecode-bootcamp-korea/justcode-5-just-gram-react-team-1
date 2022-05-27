import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import "./Feeds.scss";
import { AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";
import { BsThreeDots, BsBookmarkFill } from "react-icons/bs";

function Feeds() {
  const commentText = [];
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/jeonghoon/mock.json")
      .then((res) => res.json())
      .then((data) => setCommentList(data));
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
    <div className="feeds">
      <article className="article">
        <div className="feed-titlebox">
          <div className="feed-titleboxleft">
            <div className="feed-titlelogo">JH</div>
            <div className="feed-title">
              <div className="title-name">JeongHoon</div>
              <div className="title-author">Jeonghoon</div>
            </div>
          </div>

          <div className="feed-config">
            <BsThreeDots />
          </div>
        </div>
        <div className="feed-img">
          <img src="/images/jeonghoon/최정훈.jpeg" alt="feed" />
        </div>
        <div className="feed-menus">
          <div className="feed-menusleft">
            <span className="menuslogo menusleft-heart">
              <AiTwotoneHeart />
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
            <span className="bold">jeonghoon</span>님 외{" "}
            <span className="bold">4</span>명이 좋아합니다.
          </div>
        </div>
        <div className="feed-descripton">
          <span className="bold">JustCode</span> "저스트코드는 단순 교육업체가
          아닌 개발자 커뮤니티입니다. Justcode에서 배우고 저는 총 5개 회사에서
          오퍼를 받았습니다." - 졸업생...{" "}
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
    </div>
  );
}

export default Feeds;
