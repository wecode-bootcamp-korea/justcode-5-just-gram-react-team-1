import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.scss';

export default function Login(){
    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/main-Sj");
    };

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const handleIdInput = (e) => {
        setUserId(e.target.value); 
        checkValidation();
    }

    const handlePwInput = (e) => {
        setUserPw(e.target.value); 
        checkValidation();
    }

    const checkValidation = () => {
        // console.log(`확인용 ${userId}, ${userPw}`);
        if( userId.includes("@") && userPw.length > 7){
            return true;
        }
        return false;
    }

    return(
        <section id="login">
            <div className="login_wrap">
                <div className="top">
                    <h1 className="logo"><span className="txt">Justgram</span></h1>
                    <div className="login_input">
                        <input type="text" name="identify" id="identify" placeholder="전화번호, 사용자 이름 또는 이메일" autoComplete="off" onChange={handleIdInput} />
                        <input type="password" name="password" id="pw" placeholder="비밀번호"  onChange={handlePwInput} />
                        <button id="btn_login" onClick={goToMain} disabled={checkValidation() === true ? false : true }>
                            로그인
                        </button>
                    </div>
                </div>
                <Link to="#" onClick={e => e.preventDefault()}>비밀번호를 잊으셨나요?</Link>
            </div>
        </section>
    );
}