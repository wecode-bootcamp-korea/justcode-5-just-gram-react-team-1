import React , {useState, useEffect} from "react";
import Comments from "./Comments";

function Feeds() {
    const commentText = [];
    const [commentList, setCommentList] = useState([]);
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data/commentData.json")
        .then((res) => res.json())
        .then((data) => setCommentList(data));
    }, []);

    const getComment = (e) => {
        commentText[0] = e.target.value;
    };

    const addComment = (comment) => {
        setCommentList((commentList) => [
            ...commentList,
            {
                id : commentList.length + 1,
                userName : "sangmin",
                content : comment,
                isLiked : false,
            },
        ]);
    };

    const commentUpload = (e) => {
        e.preventDefault();
        addComment(commentText[0]);
        commentText[0] = "";
        e.target.reset();
    }



    return (
        <div className="feeds">
            <article>
                <div className="feeds-header">
                    <div>
                        <img className="feeds-header-img1" src="images/sangmin/profile.png" alt="people" />
                        <span className="feeds-header-name">sangmin</span>
                    </div>
                    <img className="feeds-header-img2" src="images/sangmin/dots.png" alt="dots" />
                </div>
                <div className="feeds-content">
                    <img src="images/sangmin/feedcontent.jpg" alt="content" />
                </div>
                <div className="feeds-button">
                    <div className="feeds-button-left">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        <i className="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className="feeds-button-right">
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className="feeds-like">
                    <span>sangmin님 외 100명이 좋아합니다.</span>
                </div>
                <div className="feeds-comment">
                    
                    <Comments commentList={commentList} />
                </div>
                <form className="feeds-comment-enter" onSubmit={commentUpload}>
                        <input className="enter-input" type="text" placeholder="댓글 달기..." onChange={getComment} />
                        <button className="post-button">게시</button>
                </form>
            </article>
        </div>
    );
}

export default Feeds;