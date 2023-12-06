import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');

  //이메일 유효성 검사.
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return email.match(emailRegex);
  }

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return password.match(passwordRegex);
  }

  const validateConfirmPassword = (password, confirmPassword) => {
    if(password === confirmPassword) return true;
    else return false;
  }

  const validateNickname = (nickname) => {
    const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
    return nickname.match(nicknameRegex);
  }

  //유효성 검사 후 표시할 메시지.
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [nicknameMsg, setNicknameMsg] = useState('');

  const onChangeEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if(validateEmail(inputEmail)) {
      setEmailMsg('올바른 이메일 형식이에요!');
    } else {
      setEmailMsg('이메일 형식에 맞게 입력해주세요.');
    }
  }

  const onChangePassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if(validatePassword(inputPassword)) {
      setPasswordMsg('사용 가능한 비밀번호예요!');
    } else {
      setPasswordMsg('비밀번호는 영문 대문자, 소문자, 숫자, 특수문자를 포함하여 8 ~ 20자로 만들어주세요.');
    }
  }

  const onChangeConfirmPassword = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);

    if(validateConfirmPassword(password, inputConfirmPassword)) {
      setConfirmPasswordMsg('비밀번호가 일치해요.');
    } else {
      setConfirmPasswordMsg('비밀번호가 일치하지 않아요.');
    }
  }

  const onChangeNickname = (e) => {
    const inputNickname = e.target.value;
    setNickname(inputNickname);

    if(validateNickname(inputNickname)) {
      setNicknameMsg('사용 가능한 닉네임이에요.');
    } else {
      setNicknameMsg('닉네임은 2 ~ 16자의 영어 또는 숫자 또는 한글로 지어주세요.');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!( validateEmail(email) && validatePassword(password) && validateConfirmPassword(password, confirmPassword) && validateNickname(nickname) )) {
      alert('내용을 형식에 맞게 입력해주세요.');
      return;
    }

    try {
      await axios.post('http://localhost:3001/user', {
        email: email,
        password: password,
        nickname: nickname
      });

      alert('회원가입 성공.');
      navigate('/');
    } catch (error) {
      alert('회원가입에 실패했어요.');
      console.error(error);
    }
    
  }

  return (
    <div>
      <Header/>
      <h4>회원가입</h4>
      <Form style={{width: '70vw'}} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="example@naver.com" onChange={onChangeEmail} />
          {emailMsg && <div>{emailMsg}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onChangePassword} />
          {passwordMsg && <div>{passwordMsg}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호 재입력</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onChangeConfirmPassword} />
          {confirmPasswordMsg && <div>{confirmPasswordMsg}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" placeholder="닉네임" onChange={onChangeNickname} />
          {nicknameMsg && <div>{nicknameMsg}</div>}
        </Form.Group>

        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </Form>
    </div>
  )
}

export default Register;