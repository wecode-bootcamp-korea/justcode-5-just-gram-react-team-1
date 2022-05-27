import React, {useState, useEffect} from "react";
import Nav from "../../../components/sujin/Nav";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import './Main.scss';

export default function Main(){
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        fetch('/data/feedData.json', {
            method: 'GET' 
        })           
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFeedList(data);
        });
    },[])

    return(
        <section id="main">
            <Nav />
            <main>
                <div className="feeds_stn">
                    {feedList.map(feed => {
                        return(
                            <Feed 
                                key={feed.id}
                                name={feed.userName}
                                image={feed.feedImage}
                                content={feed.content}
                                likedNum={feed.likedNum}
                                liked={feed.isLiked}
                            />
                        )
                    })}
                </div>
                <Aside />
            </main>
        </section>
    );
}