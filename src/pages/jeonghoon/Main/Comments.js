function Comments({ commentList }) {
  console.log(commentList)
  return (
    <ul className="feed-commentlist">
      {commentList.map((comment, idx) => {
        return (
          <li key={idx} className="comment" style={{display:"flex", justifyContent:"space-between"}}>
            <div>
            <span className="newcomment-id">{comment.userName}</span>
            <span className="newcomment-text">{comment.comment}</span>
            <span className="newcomment-text">{comment.content}</span>
            </div>
            <span className="newcomment-icons">
              {comment.isLiked === true ?  <img style={{width:"15px",height:"15px"}} src="/images/jeonghoon/heart.png" alt="feed" /> : null}
              </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
