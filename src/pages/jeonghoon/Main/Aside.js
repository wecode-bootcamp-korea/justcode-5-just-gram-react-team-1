import "./Aside.scss";

function Aside() {
  return (
    <aside className="aside">
      <div className="side-titlebox">
        <div className="side-titlelogo">JH</div>
        <div className="side-title">
          <div className="title-name">Jeonghoon</div>
          <div className="title-author">Jeonghoon</div>
        </div>
      </div>

      <div className="side-storiesbox">
        <div className="side-storiestitle">
          <span className="blur">스토리</span>
          <span>모두 보기</span>
        </div>
        <ul className="side-storieslist">
          <li className="side-story">
            <div className="story-profile" />
            <div className="story-title">
              <div className="story-name">kor_stedia</div>
              <div className="story-time">2시간 전</div>
            </div>
          </li>
          <li className="side-story">
            <div className="story-profile" />
            <div className="story-title">
              <div className="story-name">park_jisu</div>
              <div className="story-time">1시간 전</div>
            </div>
          </li>
          <li className="side-story">
            <div className="story-profile" />
            <div className="story-title">
              <div className="story-name">jeong_23</div>
              <div className="story-time">49분 전</div>
            </div>
          </li>
          <li className="side-story">
            <div className="story-profile" />
            <div className="story-title">
              <div className="story-name">kaede_jp</div>
              <div className="story-time">24분 전</div>
            </div>
          </li>
          <li className="side-story">
            <div className="story-profile" />
            <div className="story-title">
              <div className="story-name">brian4583</div>
              <div className="story-time">11분 전</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="side-recommandsbox">
        <div className="side-recommandstitle">
          <span className="blur">회원님을 위한 추천</span>{" "}
          <span>모두 보기</span>
        </div>
        <ul className="side-recommandslist">
          <li className="side-recommand">
            <div className="recommand-profile" />
            <div className="recommand-title">
              <div className="recommand-name">alice</div>
              <div className="recommand-follower">회원님을 팔로우합니다</div>
            </div>
            <button className="recommand-follow">팔로우</button>
          </li>
          <li className="side-recommand">
            <div className="recommand-profile" />
            <div className="recommand-title">
              <div className="recommand-name">brand07</div>
              <div className="recommand-follower">회원님을 팔로우합니다</div>
            </div>
            <button className="recommand-follow">팔로우</button>
          </li>
          <li className="side-recommand">
            <div className="recommand-profile" />
            <div className="recommand-title">
              <div className="recommand-name">netw0rk23</div>
              <div className="recommand-follower">회원님을 팔로우합니다</div>
            </div>
            <button className="recommand-follow">팔로우</button>
          </li>
          <li className="side-recommand">
            <div className="recommand-profile" />
            <div className="recommand-title">
              <div className="recommand-name">hello_9499</div>
              <div className="recommand-follower">회원님을 팔로우합니다</div>
            </div>
            <button className="recommand-follow">팔로우</button>
          </li>
          <li className="side-recommand">
            <div className="recommand-profile" />
            <div className="recommand-title">
              <div className="recommand-name">Kellen1</div>
              <div className="recommand-follower">회원님을 팔로우합니다</div>
            </div>
            <button className="recommand-follow">팔로우</button>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <div className="side-information">
          Justgram · 정보 · 지원 · 홍보센터 · API · 채용 · 정보 ·
          개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
        </div>
        <div className="side-company">© 2022 Justgram</div>
      </footer>
    </aside>
  );
}

export default Aside;
