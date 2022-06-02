import React ,{useState,useEffect}from "react";
import './Main.scss';
import Nav from './Nav'
import Feeds from './Feeds'
import Mainright from './Mainright'

function MainSm() {
    const [feeds, setFeed] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data/feedCommentData.json")
          .then((res) => res.json())
          .then((data) => setFeed(data));
    }, []);

    return (
        <div className="MainSm">
            <Nav />
            <main className="feeds-mainright">
                <div className="feeds">
                    {feeds.map(feed => (
                        <Feeds
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
                
                <Mainright />
            </main>
        </div>
    )

}

export default MainSm;

/*function MainSm() {
    return (
        <div className="MainSm">
            <Nav />
            <main className="feeds-mainright">
                <Feeds />
                <Mainright />
            </main>
        </div>
    )

}

export default MainSm;*/