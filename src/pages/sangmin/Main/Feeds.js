import React , {useState} from "react";
import Comments from "./Comments";

function Feeds({
    userName,
    feedImage,
    content,
    likedNum,
    isLiked,
    comments
}) {
    
    const [commentValue, setComment] = useState('');
    const [commentList, setCommentList] = useState(comments);
    const [isFeedLiked, setIsFeedLiked] = useState(isLiked);

    const getComment = (e) => {
        setComment(e.target.value);
    };

    const addComment = (comment) => {
        setCommentList([
            ...commentList,
            {
                id : commentList.length + 1,
                userName : "sangmin",
                content : comment,
                isLiked : false,
            },
        ]);
        setComment("");
    };

    const commentUpload = (e) => {
        e.preventDefault();
        addComment(commentValue);
    }

    const feedLikedButton = () => {
        isFeedLiked ? setIsFeedLiked(false) : setIsFeedLiked(true);
    }

    const deleteComment = (id) => {
        setCommentList([
            ...commentList.filter(comment => comment.id !== id)
          ])
    };

    const checkBlank = () => {
        if(commentValue === ""){
            return true;
        }
        else{
            return false;
        }
    }


    return (
            <article>
                <div className="feeds-header">
                    <div>
                        <img className="feeds-header-img1" src="images/sangmin/profile.png" alt="people" />
                        <span className="feeds-header-name">{userName}</span>
                    </div>
                    <img className="feeds-header-img2" src="images/sangmin/dots.png" alt="dots" />
                </div>
                <div className="feeds-image">
                    <img src={feedImage} alt="content" />
                </div>
                <div className="feeds-button">
                    <div className="feeds-button-left">
                        <button onClick={feedLikedButton}>
                            {isFeedLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                        </button>
                        <i className="fa-regular fa-comment"></i>
                        <i className="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className="feeds-button-right">
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className="feeds-like">
                    <span>{userName}님 외 {likedNum}명이 좋아합니다.</span>
                </div>
                <div className="feeds-content">
                    <span className="feeds-content-user">{userName}</span>
                    <span className="feeds-content-content"> {content}</span>
                    <span className="more"> 더 보기</span>
                </div>
                <div className="feeds-comment">
                    <ul id="comment-list">
                        {commentList.map(comment => (
                        <Comments key={comment.id} commentId={comment.id} userName={comment.userName} content={comment.content} isLiked={comment.isLiked} deleteComment={deleteComment} />
                        ))}
                    </ul>
                </div>
                <form className="feeds-comment-enter" onSubmit={commentUpload}>
                        <input className="enter-input" type="text" placeholder="댓글 달기..." onChange={getComment} value={commentValue} />
                        <button className="post-button" disabled={checkBlank()}>게시</button>
                </form>
            </article>
    );
}

export default Feeds;