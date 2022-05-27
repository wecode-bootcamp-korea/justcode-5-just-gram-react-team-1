/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useRef, useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import './Main.scss';

export default function Main(){
    const [text, setText] = useState("");
    const [tags, setTags] = useState([]);

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


    const commentInput = useRef(null);
    function handleCommentFocus(){
        commentInput.current.focus();
    }

    const handleChange = (e) =>{
        setText(e.target.value);
        checkValue();   
    }
    const checkValue = () =>{
        if( text !==  "" ){
            return true;
        }
        return false;
    }

    const handelKeyDown = (e) => {
        if ( e.target.value.length !== 0 && e.key === 'Enter') {
            setTags([...tags, text]);
            setText("");
        }
    }

    const commentClickBtn = () => {
        setTags([...tags, text]);
        setText("");
        handleCommentFocus();
    }

    return(
        <section id="main">
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
            <main>
                <div className="feeds_stn">
                    <article>
                        <div className="feeds_header">
                            <div className="feeds_profile">
                                <Link to="#" onClick={e => e.preventDefault()}>
                                    <img src="images/sujin/bg01.jpg" alt="feed img" />
                                    <span className="name">canon_mj</span>
                                </Link>
                            </div>
                            <button type="button" className="menu">
                                <i className="fa-solid fa-ellipsis"></i>
                            </button>
                        </div>
                        <div className="feeds_imgs">
                            <img src="images/sujin/bg022.jpg" alt="bg02s" />
                        </div>
                        <div className="feeds_cont">
                            <div className="btn_area">
                                <div className="btn_left">
                                    <button type="button" className="btn_feedLike">
                                        <i className="fa-solid fa-heart"></i>
                                    </button>
                                    <button type="button">
                                        <i className="fa-regular fa-comment"></i>
                                    </button>
                                    <button type="button">
                                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                    </button>
                                </div>
                                <button type="button"><i className="fa-regular fa-bookmark"></i></button>
                            </div>
                            <div className="feeds_cnt">
                                <p className="like_nums">
                                    <img src="images/sujin/bg02.jpg" alt="bg02" />
                                    <span  className="like_name">aineword</span>님&nbsp;<b>외 <span>10</span>명</b>이 좋아합니다
                                </p>
                                <div className="desc_cont">
                                    <div className="desc_cnt">
                                        <p className="profile_name">canon_mj</p>
                                        <p className="desc">위워크에서 진행한 베이킹 클래스 너무 좋은걸 두줄 이상입니다.</p>
                                        <button type="button" className="color_darkGray">더 보기</button>
                                    </div>
                                    <div className="comments">
                                        <div>
                                            <p>
                                                <b className="profile_name">neceosecius</b>
                                                <span>거봐 좋았잖아~~~~~</span>
                                            </p>
                                            <button type="button" className="btn_commDelete">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                            <button type="button" className="btn_like">
                                                <i className="fa-regular fa-heart "></i>
                                            </button>
                                        </div>
                                        <div>
                                            <p>
                                                <b className="profile_name">neceosecius</b>
                                                <span>어땠어??</span>
                                            </p>
                                            <button type="button" className="btn_commDelete">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                            <button type="button" className="btn_like">
                                                <i className="fa-regular fa-heart "></i>
                                            </button>
                                        </div>
                                        { tags.map((tag,index) => (
                                            <Comments key={index} tag={tag} />
                                        )) }
                                        {/* { tags.map((tag,index) => (
                                            <div key={index}>
                                                <p>
                                                    <b className="profile_name">sujinChoi</b>
                                                    <span>{tag}</span>
                                                </p>
                                                <button type="button" className="btn_commDelete">
                                                    <i className="fas fa-times-circle"></i>
                                                </button>
                                                <button type="button" className="btn_like">
                                                    <i className="fa-regular fa-heart "></i>
                                                </button>
                                            </div>
                                        )) } */}
                                    </div>
                                    <p className="color_darkGray">42분 전</p>
                                </div>
                            </div>
                            <div className="feeds_comments">
                                <input className="comment_input" 
                                    type="text" 
                                    placeholder="댓글 달기" 
                                    onChange={handleChange} 
                                    onKeyPress={handelKeyDown}
                                    value={text}
                                    ref={commentInput}
                                />
                                <button type="button" 
                                    className="btn_addComment" 
                                    onClick={commentClickBtn} 
                                    disabled={checkValue() === true ? false : true}
                                >게시</button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="feeds_header">
                            <div className="feeds_profile">
                                <Link to="#" onClick={e => e.preventDefault()}>
                                    <img src="images/sujin/bg03.jpg" alt="feed img" />
                                    <span className="name">_mj</span>            
                                </Link>
                            </div>
                            <button type="button" className="menu">
                                <i className="fa-solid fa-ellipsis"></i>
                            </button>
                        </div>
                        <div className="feeds_imgs">
                            <img src="images/sujin/bg03.jpg" alt="bg03" />
                        </div>
                        <div className="feeds_cont">
                            <div className="btn_area">
                                <div className="btn_left">
                                    <button type="button" className="btn_feedLike">
                                        <i className="fa-regular fa-heart"></i> 
                                    </button>
                                    <button type="button">
                                        <i className="fa-regular fa-comment"></i>
                                    </button>
                                    <button type="button">
                                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                    </button>
                                </div>
                                <button type="button"><i className="fa-regular fa-bookmark"></i></button>
                            </div>
                            <div className="feeds_cnt">
                                <p className="like_nums">
                                    <img src="images/sujin/bg04.jpg" alt="bg04" />
                                    <span  className="like_name">aineword</span>님&nbsp;<b>외 <span>10</span>명</b>이 좋아합니다
                                </p>
                                <div className="desc_cont">
                                    <div className="desc_cnt">
                                        <p className="profile_name">canon_mj</p>
                                        <p className="desc">위워크에서 진행한 베이킹 클래스 너무 좋은걸 두줄 이상입니다.</p>
                                        <button type="button" className="color_darkGray">더 보기</button>
                                    </div>
                                    <div className="comments">
                                        <div>
                                            <p>
                                                <b className="profile_name">neceosecius</b>
                                                <span>어땠어??</span>
                                            </p>
                                            <button type="button" className="btn_commDelete">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                            <button type="button" className="btn_like">
                                                <i className="fa-regular fa-heart "></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="color_darkGray">42분 전</p>
                                </div>
                            </div>
                            <div className="feeds_comments">
                                <input className="comment_input" type="text" placeholder="댓글 달기...." />
                                <button type="button" className="btn_addComment" disabled>게시</button>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="main_right">
                    <div className="profile_cont">
                        <img  className="profile_img" src="images/sujin/bg04.jpg" alt="bg04" />
                        <p>
                            <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>wecode_bootcamp</Link>
                            <span className="user_name">WeCode | 위코드</span>
                        </p>
                    </div>
                    <div className="stn story_cont">
                        <div className="cont_top">
                            <p>스토리</p>
                            <Link to="#" onClick={e => e.preventDefault()}>모두 보기</Link>
                        </div>
                        <div className="story_cnt">
                            <div className="story_box">
                                <button type="button" className="gradient_img">
                                    <img src="images/sujin/story01.jpg" alt="story01" />
                                </button>
                                <div className="desc">
                                    <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>_yum</Link>
                                    <span className="times">16분전</span>
                                </div>
                            </div>
                            <div className="story_box">
                                <button type="button" className="gradient_img">
                                    <img src="images/sujin/story02.jpg" alt="story02" />
                                </button>
                                <div className="desc">
                                    <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>drink_drink</Link>
                                    <span className="times">3시간전</span>
                                </div>
                            </div>
                            <div className="story_box">
                                <button type="button" className="gradient_img">
                                    <img src="images/sujin/story03.jpg" alt="story03" />
                                </button>
                                <div className="desc">
                                    <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>hhhhh_</Link>
                                    <span className="times">20시간전</span>
                                </div>
                            </div>
                            <div className="story_box">
                                <button type="button" className="gradient_img">
                                    <img src="images/sujin/story04.jpg" alt="story04" />
                                </button>
                                <div className="desc">
                                    <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>sssss_</Link>
                                    <span className="times">22시간전</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stn recommend_cont">
                        <div className="cont_top">
                            <p>회원님을 위한 추천</p>
                            <Link to="#" onClick={e => e.preventDefault()}>모두 보기</Link>
                        </div>
                        <div className="recommend_cnt">
                            <div className="recommend_box">
                                <Link to="#" className="profile_img" onClick={e => e.preventDefault()}>
                                    <img src="images/sujin/story05.jpg" alt="story05" />
                                </Link>
                                <div className="desc">
                                    <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>ddddddqwe</Link>
                                    <span className="following_txt">_dsdddd님 외 2명이 팔로우합니다ssssssssSSSSSㄴ</span>
                                </div>
                                <button type="button" className="btn_follow">팔로우</button>
                            </div>
                            <div className="recommend_box">
                                <Link to="#" className="profile_img" onClick={e => e.preventDefault()}>
                                    <img src="images/sujin/story06.jpg" alt="story06" />
                                </Link>
                                <div className="desc">
                                    <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>joassssseye</Link>
                                    <span className="following_txt">_aaddddd님 외 2명이 팔로우합니다ssssssssSSSSSㄴ</span>
                                </div>
                                <button type="button" className="btn_follow">팔로우</button>
                            </div>
                            <div className="recommend_box">
                                <Link to="#" className="profile_img" onClick={e => e.preventDefault()}>
                                    <img src="images/sujin/story07.jpg" alt="story07" />
                                </Link>
                                <div className="desc">
                                    <Link to="#" className="profile_name" onClick={e => e.preventDefault()}>cccccc__</Link>
                                    <span className="following_txt">_bb11_님 외 1명이 팔로우합니다ssssssssSSSSSㄴ</span>
                                </div>
                                <button type="button" className="btn_follow">팔로우</button>
                            </div>
                        </div>
                    </div>
                    <div className="info_stn">
                        <div className="info_cont">
                            <Link to="#"onClick={e => e.preventDefault()}>instagram 정보</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>지원</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>홍보 센터</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>API</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>채용 정보</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>개인정보처리방침</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>약관</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>디렉터리</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>프로필</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>해시태그</Link>
                            <Link to="#"onClick={e => e.preventDefault()}>언어</Link>
                        </div>
                        <p>@copy; 2019 INSTAGRAM</p>
                    </div>
                </div>
            </main>
        </section>
    );
}