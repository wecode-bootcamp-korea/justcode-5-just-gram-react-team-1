/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useRef, useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import './Nav.scss';

export default function Nav(){

    const [serachInputActive, setSerachInputActive] = useState("false");
    const serachInputToggle = () => {
        setSerachInputActive(!serachInputActive); 
    };

    const searchInput = useRef(null);
    useLayoutEffect(()=>{
        if (searchInput.current !== null) searchInput.current.focus();
    })
    const inputClear = (() => {
        searchInput.current.value = '';
    });

    return(
        <nav>
            <div className="cont">
                <h1 className="logo">
                    <Link to="/main">
                        <span className="ico_logo">
                            <img src="images/sujin/ico_instagram.png" />
                        </span>
                        <span className="txt">Justgram</span>
                    </Link>
                </h1>

                <div className={serachInputActive ? 'search_cont off': "search_cont on"} >
                    <button type="button" className="btn_innerSrh" onClick={serachInputToggle}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span>검색</span>
                    </button>
                    <div className="input_cont">
                        <i className="fa fa-search"></i>
                        <input type="text" 
                            id="search_input" 
                            className="search_input" 
                            ref={searchInput} 
                            autoComplete="off"
                            placeholder="검색" />
                        <button  type="button"
                            className="btn_closeSrh"
                            onClick={()=> {
                                serachInputToggle()
                                inputClear()
                            }}
                        >
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </div>
                </div>

                <div className="nav_btns">
                    <button type="button" id="btn_explore">
                        <img src="images/sujin/ico_explore.png" alt="explore icon" />
                    </button>
                    <button type="button" id="btn_heart" className="on">
                        <img src="images/sujin/ico_heart.png" />
                    </button>
                    <div className="btn_profile_cont">
                        <button type="button" id="btn_profile">
                            <img src="images/sujin/ico_profile.png" />
                        </button>
                        <div className="profile_cont off">
                            <div className="area_click"></div>
                            <div className="rect"></div>
                            <div className="profile_cnt">
                                <ul>
                                    <li>
                                        <Link to="#" onClick={e => e.preventDefault()}>
                                            <i className="fa-regular fa-circle-user"></i>
                                            <span>프로필</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={e => e.preventDefault()}>
                                            <i className="fa-regular fa-bookmark"></i>
                                            <span>저장됨</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={e => e.preventDefault()}>
                                            <i className="fa-solid fa-gear"></i>
                                            <span>설정</span>
                                        </Link>
                                    </li>
                                </ul>
                                <button type="button">로그아웃</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}