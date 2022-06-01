import React, {useState} from "react";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";
import './Feed.scss';

function Feed({ userName, feedImage, content, likedNum, isLiked,comments }){

    const [text, setText] = useState("");
    const checkValue = () =>{
        if( text !==  "" ){
            return true;
        }
        return false;
    }
    const handelKeyDown = (e) => {
        if ( e.target.value.length !== 0 && e.key === 'Enter') {
            // console.log(text);
            addComment(text);
        }
    }

    const [commentList, setCommentList] = useState(comments);
    const getComment = (e) => {
        setText(e.target.value);
    };
    
    const addComment = (comment) => {
        setCommentList((commentList) => [
            ...commentList,
            {
                id: commentList.length+1,
                userName: "Sujin Choi", 
                content: comment,
                isLiked: false,
            },
        ]);
        // console.log(commentList);
        setText("");
    };
    
    const commentClickBtn = (event) => {
        event.preventDefault();
        addComment(text);
    }

    const commentRemove = (id) => {
        setCommentList(commentList.filter((comment) => comment.id !== id));
    }

    const [feedLike, setFeedLike] = useState(isLiked);
    const handleFeedLike = () => {
        setFeedLike(!feedLike);
    }

    return(
        <article>
            <div className="feeds_header">
                <div className="feeds_profile">
                    <Link to="#" onClick={e => e.preventDefault()}>
                        <img src={feedImage} alt="feed img" />
                        <span className="name">{userName}</span>
                    </Link>
                </div>
                <button type="button" className="menu">
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </div>
            <div className="feeds_imgs">
                <img src={feedImage} alt="feed img" />
            </div>
            <div className="feeds_cont">
                <div className="btn_area">
                    <div className="btn_left">
                        <button type="button" className="btn_feedLike" onClick={handleFeedLike}>
                            <i className={
                                feedLike ? "fa-solid fa-heart" : "fa-regular fa-heart"
                            }></i>
                        </button>
                        <button type="button">
                            <i className="fa-regular fa-comment"></i>
                        </button>
                        <button type="button">
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        </button>
                    </div>
                    <button type="button"><i className="fa-regular fa-bookmark"></i></button>
                </div>
                <div className="feeds_cnt">
                    <p className="like_nums">
                        <img src="images/sujin/bg02.jpg" alt="bg02" />
                        <span  className="like_name">aineword</span>님&nbsp;<b>외 <span>{likedNum}</span>명</b>이 좋아합니다
                    </p>
                    <div className="desc_cont">
                        <div className="desc_cnt">
                            <p className="profile_name">{userName}</p>
                            <p className="desc">{content}</p>
                            <button type="button" className="color_darkGray">더 보기</button>
                        </div>
                        <div className="comments">
                            {commentList.map((comment) => {
                                return (
                                    <Comment
                                        key={comment.id}
                                        id={comment.id}
                                        userName={comment.userName}
                                        content={comment.content}
                                        isLiked={comment.isLiked}
                                        commentRemove={commentRemove}
                                    />
                                );
                            })}
                        </div>
                        <p className="color_darkGray">42분 전</p>
                    </div>
                </div>
                <div className="feeds_comments">
                    <input className="comment_input" 
                        type="text" 
                        placeholder="댓글 달기" 
                        onChange={getComment} 
                        onKeyPress={handelKeyDown}
                        value={text}
                    />
                    <button type="button" 
                        className="btn_addComment" 
                        onClick={commentClickBtn} 
                        disabled={checkValue() === true ? false : true}
                    >게시</button>
                </div>
            </div>
        </article>
    );
}

export default Feed;