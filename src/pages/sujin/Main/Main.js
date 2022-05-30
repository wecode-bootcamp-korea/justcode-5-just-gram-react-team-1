import React from "react";
import Nav from "../../../components/sujin/Nav";
import Feed from "./Feed/Feed";
import Aside from "./Aside/Aside";
import './Main.scss';

export default function Main(){
    return(
        <section id="main">
            <Nav />
            <main>
                <Feed />
                <Aside />
            </main>
        </section>
    );
}