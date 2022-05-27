import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div className='main-container'>
      <div className='nav-box'>
        <div className='nav'>
          <div className='nav-logo-box'>
            <i className='fa-brands fa-instagram nav-icons'></i>
            <span className='nav-logo-text'>Justgram</span>
          </div>
          <div className='nav-serch-box'>
            <input type='text' placeholder='검색' />
          </div>
          <div className='nav-right-box'>
            <i className='fa-regular fa-compass nav-right-icons'></i>
            <i className='fa-regular fa-heart nav-right-icons'></i>
            <i className='fa-regular fa-user nav-right-icons'></i>
          </div>
        </div>
      </div>

      <div className='main'>
        <div className='feeds'>
          <div className='article'>
            <div className='article-header'>
              <div className='article-header-user'>
                <span
                  className='header-user'
                  id='header-user-img-box'
                  alt='user image'
                >
                  <img
                    id='user-img'
                    src='images/jiYook/zhan-zhang-e5thHbI70uw-unsplash.jpg'
                  />
                </span>
                <span className='header-user' id='header-use-text'>
                  user id
                </span>
              </div>
              <div className='elipsis'>
                <i className='fa-solid fa-ellipsis'></i>
              </div>
            </div>
            <div className='article-img-box'>
              <img
                className='article-img'
                src='images/jiYook/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
                alt='feedimage'
              />
            </div>
            <div className='article-icons'>
              <div className='article-icons-left'>
                <i className='fa-regular fa-heart article-icons-items'></i>
                <i className='fa-regular fa-comment article-icons-items'></i>
                <i className='fa-regular fa-paper-plane article-icons-items'></i>
              </div>
              <div className='article-icons-right'>
                <i className='fa-regular fa-bookmark'></i>
              </div>
            </div>
            <div className='article-likes'>
              <div className='article-likes-profile'>
                <img
                  className='likes-profile'
                  src='images/jiYook/shifaaz-shamoon-9K9ipjhDdks-unsplash.jpg'
                  alt='user photo'
                />
              </div>
              <p>
                <span className='bold-text'>user id</span>님
                <span className='bold-text'>외 n명</span>이 좋아합니다
              </p>
            </div>
            <div className='article-contents'>
              <span className='bold-text user-id'>user id</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <span className='more'>더 보기..</span>
            </div>
            <div className='article-comment'>
              <span className='bold-text user-id'>user id</span>
              <p>댓글 내용입니다!!!!!!!!!</p>
            </div>
            <div className='article-input-comments'>
              <i className='fa-regular fa-face-smile'></i>
              <form className='comment-form'>
                <input
                  className='comment-input'
                  type='text'
                  placeholder='댓글 달기...'
                  id='comment_input'
                />
                <button className='comment-submit' type='submit'>
                  <span className=''>게시</span>
                </button>
              </form>
            </div>
          </div>
          <div className='main-right'>
            <div className='main-right-user'></div>
            <div className='main-right-story'></div>
            <div className='main-right-recommend'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
