function Comments({ commentList }) {
  return (
    <ul className="feed-commentlist">
      {commentList.map((comment, idx) => {
        return (
          <li key={idx} className="comment">
            <span className="newcomment-id">{comment.userName}</span>
            <span className="newcomment-text">{comment.comment}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
