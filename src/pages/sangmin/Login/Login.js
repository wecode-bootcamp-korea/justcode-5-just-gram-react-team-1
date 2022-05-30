import React, {useState} from "react";
import './Login.scss';
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [identify, setIdentify] = useState('');
    const [password, setPassword] = useState('');
    const validation = (idText, pwText) => {
        if (!idText.includes('@')) {
          return false;
        }
        if (pwText.length < 7) {
          return false;
        }
    
        return true;
    };

    const buttonOnClick = () => {
        if (validation(identify, password)) {
            alert('로그인 되었습니다.');
            navigate('/main');
        }
    }

    
    const valid = validation(identify, password);

    return (
        <div className="Login">
            <div className="login-background">
                <div className="logo-box">
                    <span className="logo" >Justgram</span>
                </div>
                <div className="login-box">
                    <div className="id-box">
                        <input id="id" type="email" placeholder="전화번호, 사용자 이름 또는 이메일" value={identify} onChange={(e) => {
                            setIdentify(e.target.value);
                        }} />
                    </div>
                    <div className="pw-box">
                        <input id="password" type="password" placeholder="비밀번호" minLength={5} disabled={!valid} value={password} onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                    </div>
                    <div className="loginButton-box">
                        <button className={valid ? 'button-login active' : 'button-login inactive'}  onClick={buttonOnClick}>로그인</button>
                    </div>
                </div>
                <div className="prob-box">
                    <a className="prob" href="www.naver.com">비밀번호를 잊으셨나요?</a>
                </div>
            </div>
        </div>
    )

}

export default Login;