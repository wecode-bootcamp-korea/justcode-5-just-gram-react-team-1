import React from "react";
import Nav from "../../../components/sujin/Nav";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import './Main.scss';

function Main(){
    return(
        <section id="mainSj">
            <Nav />
            <main>
                <Feed />
                <Aside />
            </main>
        </section>
    );
}

export default Main;