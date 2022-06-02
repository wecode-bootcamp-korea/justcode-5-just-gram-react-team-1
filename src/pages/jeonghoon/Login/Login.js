import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [identify, setIdentify] = useState("");
  const [password, setPassword] = useState("");

  const validation = (idText, pwText) => {
    if (!idText.includes("@")) {
      return false;
    }
    if (pwText.length < 7) {
      return false;
    }

    return true;
  };

  const buttonOnClick = (event) => {
    event.preventDefault();
    
    fetch("http://13.125.249.241/user/login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            email: identify,
            password: password,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
            if(result.message.includes("SUCCESS")){
                alert('로그인 되었습니다.');
                
                navigate('/main-Jh');
            }
            else{
                alert('아이디나 패스워드를 확인해주세요!');
            }
        });
}
  
  const valid = validation(identify, password);

  return (
    <div className="login_container-Jh">
      <div className="login_logo">JUSTGRAM</div>
      <form onSubmit={buttonOnClick} className="login_form">
        <input
          className="login_input"
          name="identify"
          type="email"
          placeholder="전화번호,사용자 이름 또는 이메일"
          value={identify}
          onChange={(event) => {
            setIdentify(event.target.value);
          }}
        />
        <input
          className="login_input"
          name="password"
          type="password"
          minLength={5}
          placeholder="비밀번호"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className={valid ? "login_button active" : "login_button inactive"}
          disabled={!valid}
        >
          로그인
        </button>
      </form>
      <div>
        <div className="divider "></div>
      </div>
      <div href="" className="forget_password">
        비밀번호를 잊으셨나요?
      </div>
    </div>
  );
}

export default Login;
