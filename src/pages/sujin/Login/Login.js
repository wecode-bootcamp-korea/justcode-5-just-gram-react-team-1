import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.scss';

function Login(){
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        identify:"",
        password: ""
    })
    const handleInputsByName = (e)=>{
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value,
        });
        checkValidation();
    }

    const checkValidation = () => {
        // console.log(`확인용 ${inputs.identify}, ${inputs.password}`);
        if( inputs.identify.includes("@") && inputs.password.length > 7){
            return true;
        }
        return false;
    };

    const handleSignUp = (event) =>{
        event.preventDefault();
        fetch("http://52.79.143.176:8000/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: inputs.identify,
                password: inputs.password,
            }),
        })
        .then((response) => response.json())
        .then((result) => console.log("결과: ", result));
    }

    const handleLogin = (event) =>{
        event.preventDefault();
        fetch("http://52.79.143.176:8000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: inputs.identify,
                password: inputs.password,
            }),
        })
        .then((response) => {
            // console.log(response.status);
            if( response.status === 200 ){
                navigate("/main-Sj");
            } else {
                alert("로그인/비밀번호를 확인해주세요");
            }
            return response.json();
        })
        .then((result) => {
            // console.log(result);
            // localStorage.getItem("token");

            if(result.message.includes("SUCCESS")){
                localStorage.setItem("token", result.token);
            } else {
                // console.log(result)
                localStorage.setItem("token", "");
            }
            // console.log(localStorage);
        });

        // hissujinc@gmail.com
        // Sujinc@1

        // "email" : "hissujinctest@gmail.com",
        // "password": "Test@test1"
    }
    
    return(
        <section id={styles["login"]}>
            <div className={styles.login_wrap}>
                <div className={styles.top}>
                    <h1 className={styles.logo}><span className={styles.txt}>Justgram</span></h1>
                    <form className={styles.login_input}>
                        <input type="text" 
                            name="identify" 
                            id="identify" 
                            placeholder="전화번호, 사용자 이름 또는 이메일" 
                            autoComplete="off" 
                            onChange={handleInputsByName} 
                        />
                        <input type="password" 
                            name="password" 
                            id="pw" 
                            placeholder="비밀번호"  
                            onChange={handleInputsByName} 
                        />
                        <div className={styles.btn_area}>
                            <button id={styles["btn_login"]} onClick={handleLogin} disabled={checkValidation() === true ? false : true }>
                                로그인
                            </button>
                            <button id={styles["btn_signIn"]} onClick={handleSignUp} >
                                회원가입
                            </button>
                        </div>
                    </form>
                </div>
                <Link to="#" onClick={e => e.preventDefault()}>비밀번호를 잊으셨나요?</Link>
            </div>
        </section>
    );
}

export default Login;