import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../../styles/reset.scss';

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
      navigate('/main-Jy');
    } else {
      alert('로그인에 실패하였습니다.');
      setIdentify('');
      setPassword('');
    }
  };

  const valid = validation(identify, password);

  return (
    <div className='loginWindow'>
      <form className='login-container'>
        <h1 className='logo'>Justgram</h1>
        <input
          id='id'
          className='input'
          name='identify'
          type='text'
          placeholder='전화번호, 사용자 이름 또는 이메일'
          value={identify}
          onChange={(event) => {
            setIdentify(event.target.value);
          }}
        />
        <input
          id='pw'
          className='input'
          name='password'
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className={valid ? 'login_button active' : 'login_button inactive'}
          disabled={!valid}
          onClick={buttonOnClick}
        >
          로그인
        </button>

        <Link className='forgotPassword' to='/login-Jy'>
          비밀번호를 잊으셨나요?
        </Link>
      </form>
    </div>
  );
}

export default Login;
