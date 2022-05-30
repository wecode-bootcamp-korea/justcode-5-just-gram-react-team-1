import React from "react";
import './Main.scss';
import Nav from './Nav'
import Feeds from './Feeds'
import Mainright from './Mainright'

function MainSm() {
    return (
        <div className="Main">
            <Nav />
            <main className="feeds-mainright">
                <Feeds />
                <Mainright />
            </main>
        </div>
    )

}

export default MainSm;