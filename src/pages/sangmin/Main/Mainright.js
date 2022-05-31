import React from "react";

class Mainright extends React.Component {
    render() {
        return (
            <div className="main-right">
                <div className="main-right-box">
                    <div className="user">
                        <div className="user-img-box">
                            <img className="user-img" src="images/sangmin/user.png" alt="content" />
                        </div>
                        <div className="user-info-box">
                            <div className="user-id">sangmin</div>
                            <div className="user-name">이상민</div>
                        </div>
                    </div>
                    <div className="story-box">
                        <div className="story-header">
                            <span className="story-header-left">스토리</span>
                            <span className="story-header-right">모두 보기</span>
                        </div>
                        <div className="story-content">
                            <ul>
                                <li>111</li>
                                <li>222</li>
                                <li>333</li>
                                <li>444</li>
                                <li>555</li>
                            </ul>
                        </div>
                    </div>
                    <div className="recommend-box">
                        <div className="recommend-header">
                            <span className="recommend-header-left">회원님을 위한 추천</span>
                            <span className="recommend-header-right">모두 보기</span>
                        </div>
                        <div className="recommend-content">
                            <ul>
                                <li>111</li>
                                <li>222</li>
                                <li>333</li>
                                <li>444</li>
                                <li>555</li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-right-footer">소개 · 도움말 · 홍보 센터 · API · 채용 정보 · <br />개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어<br /><br />© 2022 JUSTAGRAM
                    </div>
                </div>

            </div>
        );
    }
}

export default Mainright;