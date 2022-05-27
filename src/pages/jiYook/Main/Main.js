import React from 'react';
import './Main.css';

function Main() {
  return (
    <div className='main_container'>
      <nav className='nav_container'>
        <span className='nav_left'>
          <img
            className='nav_logo'
            src='/images/instagram_logo.png'
            alt='logo'
          />
          <span className='nav_title'>Justgram</span>
        </span>
        <span className='nav_center'>검색</span>
        <span className='nav_right'>
          <img
            className='nav_explore'
            src='/images/explore.png'
            alt='explore'
          />
          <img className='nav_heart' src='/images/heart.png' alt='heart' />
          <img
            className='nav_profile'
            src='/images/profile.png'
            alt='profile'
          />
        </span>
      </nav>
      <main className='main_content'>
        <div className='feeds'>
          <article className='main_article_container'>
            <div className='article_head'>
              <img className='article_profile_image' src='sdfas' alt='P' />
              <span className='article_head_nickname'>
                <span>wecode_bootcamp</span>
                <span>WeCode - 위코드</span>
              </span>
            </div>
            <div className='main_article_img_section'>
              <img
                className='main_article_img_card'
                src='https://images.unsplash.com/photo-1647762957673-aab5254feb8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302&q=80'
                alt='pic'
              />
            </div>
            <div className='article_button_group'>
              <span>하트 말풍선 내려받기</span>
              <span>북마크</span>
            </div>
            <div className='article_people_like'>~외 3명이 좋아합니다.</div>
            <div className='article_content'>
              <span>wecode_bootcamp</span>
              <span>
                위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서
                배우고 저는 총 5개의 회사에서 오퍼를 받았습니다.
              </span>
              <div>write ago</div>
            </div>
            <div>댓글 달기</div>
          </article>
        </div>
        <div className='main_right'>내용</div>
      </main>
    </div>
  );
}

export default Main;
