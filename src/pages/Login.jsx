import {React, useState} from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import axios from 'axios';
import bcrypt from "bcryptjs-react";
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/user?email=${email}`);
      const passwordFromDB = response.data[0].password;
      const emailFromDB = response.data[0].email;
      const nicknameFromDB = response.data[0].nickname;
      const idFromDB = response.data[0].id;

      bcrypt.compare(password, passwordFromDB)
      .then((res) => {
        if(res === true) {
          alert('로그인 성공');
          navigate('/');
          localStorage.setItem('userData', JSON.stringify({
            email: emailFromDB,
            nickname: nicknameFromDB,
            id: idFromDB
          }));
        } else {
          alert('아이디나 비밀번호가 틀렸어요.');
        }
      })
      .catch((error)=>{
        console.error(error);
        alert('로그인 실패');
      });
      
    } catch (error) {
      alert('로그인 실패');
      console.error(error);
    }
    
  }

  return (
    <div>
    <Header/>
    <div style={{width: '70vw', margin: '0 auto'}}>
      <h4 style={{textAlign: 'center', margin: '50px 0'}}>로그인</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor='id'>이메일</Form.Label>
          <Form.Control id="id" type="email" placeholder="example@naver.com" value={email} onChange={(e)=>{setEmail(e.target.value);}} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='password'>비밀번호</Form.Label>
          <Form.Control id='password' type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>

        <Button style={{marginRight: '5px'}} variant="primary" type="submit">
          로그인
        </Button>
        <Button variant="primary" type="button" onClick={()=>navigate('/user/register')}>
          회원가입
        </Button>
      </Form>
    </div>
    <div style={{width:"100%",position:"absolute", bottom:"0"}}><Footer/></div>
    </div>
  )
}

export default Login;