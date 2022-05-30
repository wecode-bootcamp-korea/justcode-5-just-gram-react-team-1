import { Link } from "react-router-dom";
import './Aside.scss'

const FOOTER_INFO = [
    { id: 1, content: "instagram 정보" },
    { id: 2, content: "지원"},
    { id: 3, content: "홍보 센터"},
    { id: 4, content: "API" },
    { id: 5, content: "채용 정보" },
    { id: 6, content: "개인정보처리방침" },
    { id: 7, content: "약관" },
    { id: 8, content: "디렉터리" },
    { id: 9, content: "프로필" },
    { id: 10, content: "해시태그" },
    { id: 11, content: "언어" },
];

export default function Aside() {
    return(
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
                    {FOOTER_INFO.map((info) => {
                        return(
                            <Link key={info.id} to="#"onClick={e => e.preventDefault()}>{info.content}</Link>
                        )
                    })}
                </div>
                <p>&copy; 2019 INSTAGRAM</p>
            </div>
        </div>
    )
}