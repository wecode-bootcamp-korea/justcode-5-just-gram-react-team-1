import React from "react";
import './Main.scss';
import Nav from './Nav'
import Feeds from './Feeds'
import Mainright from './Mainright'

function Main() {
    return (
        <div className="Main">
            <Nav />
            <main>
                <Feeds />
                <Mainright />
            </main>
        </div>
    )

}

export default Main;