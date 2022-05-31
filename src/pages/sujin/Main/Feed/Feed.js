import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";
import './Feed.scss';

function Feed(){
    const [text, setText] = useState("");

    const [feedList, setFeedList] = useState([]);
    useEffect(() => {
        fetch('/data/feedData.json', {
            method: 'GET' 
        })           
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setFeedList(data);
        });
    },[])

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

    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        fetch('/data/commentData.json', {
            method: 'GET' 
        })           
        .then(res => res.json())
        .then(data => {
            setCommentList(data);
        });
    },[])

    const getComment = (e) => {
        setText(e.target.value);
    };
    
    const addComment = (comment) => {
        setCommentList((commentList) => [
            ...commentList,
            {
                userName: "Sujin Choi",
                comment: comment,
            },
        ]);
        setText("");
    };
    

    const commentClickBtn = (event) => {
        event.preventDefault();
        addComment(text);
    }

    return(
        <div className="feeds_stn">
            {feedList.map((feed, idx) => {
                return(
                    <article key={idx}>
                        <div className="feeds_header">
                            <div className="feeds_profile">
                                <Link to="#" onClick={e => e.preventDefault()}>
                                    <img src={feed.feedImage} alt="feed img" />
                                    <span className="name">{feed.userName}</span>
                                </Link>
                            </div>
                            <button type="button" className="menu">
                                <i className="fa-solid fa-ellipsis"></i>
                            </button>
                        </div>
                        <div className="feeds_imgs">
                            <img src={feed.feedImage} alt="feed img" />
                        </div>
                        <div className="feeds_cont">
                            <div className="btn_area">
                                <div className="btn_left">
                                    <button type="button" className="btn_feedLike">
                                        <i className={
                                            feed.isLiked === true ? "fa-solid fa-heart" : "fa-regular fa-heart"
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
                                    <span  className="like_name">aineword</span>님&nbsp;<b>외 <span>{feed.likedNum}</span>명</b>이 좋아합니다
                                </p>
                                <div className="desc_cont">
                                    <div className="desc_cnt">
                                        <p className="profile_name">{feed.userName}</p>
                                        <p className="desc">{feed.content}</p>
                                        <button type="button" className="color_darkGray">더 보기</button>
                                    </div>
                                    <div className="comments">
                                        {commentList.map((comment, idx) => {
                                            return (
                                                <Comment
                                                    key={idx}
                                                    name={comment.userName}
                                                    content={comment.content}
                                                    liked={comment.isLiked}
                                                    comment={comment.comment}
                                                />
                                            );
                                        })}
                                        {/* {tags.map((tag,index) => (
                                            <Comments key={index} tag={tag} />
                                        ))} */}
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
                )
            })}
        </div>
    );
}

export default Feed;