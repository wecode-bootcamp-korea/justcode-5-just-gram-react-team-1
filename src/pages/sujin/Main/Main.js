import React, {useState, useEffect} from "react";
import Nav from "../../../components/sujin/Nav";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import './Main.scss';

function Main(){
    const [feedsList, setFeedsList] = useState([]);
    useEffect(() => {
        fetch('/data/feedCommentData.json', {
            method: 'GET' 
        })           
        .then(res => res.json())
        .then(data => {
            setFeedsList(data);
        });
    },[])

    return(
        <section id="mainSj">
            <Nav />
            <main>
                <div className="feeds_stn">
                    {feedsList.map(feed => (
                        <Feed 
                            key={feed.id}
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
        </section>
    );
}

export default Main;