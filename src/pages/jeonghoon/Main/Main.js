import React from "react";

import "./Main.scss";
import "../../../styles/variables.scss";
import Nav from "../../../components/Nav/Nav";
import Feeds from "./Feeds";
import Aside from "./Aside";

function Main() {
  return (
    <>
      <Nav />
      <main className="main">
        <Feeds />
        <Aside />
      </main>
    </>
  );
}

export default Main;
