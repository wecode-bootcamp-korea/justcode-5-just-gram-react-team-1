import {React,useEffect,useState} from "react";

import "./Main.scss";
import "../../../styles/variables.scss";
import Nav from "../../../components/NavJh/Nav";
import Feeds from "./Feeds";
import Aside from "./Aside";

function Main() {
  const [feeds, setFeed] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedCommentData.json")
      .then((res) => res.json())
      .then((data) => setFeed(data));
  }, []);

  return (
    <>
      <Nav />
      <main className="main-Jh">
      <div className="feeds-jh">
        {feeds.map(feed =>(
         <Feeds 
          key= {feed.id}
          userName={feed.userName}
          feedImage={feed.feedImage}
          content={feed.content}
          likedNum={feed.likedNum}
          isLiked={feed.isLiked}
          comments={feed.comments}
         /> 
        ))}
        </div>
        <Aside />
      </main>
    </>
  );
}

export default Main;
