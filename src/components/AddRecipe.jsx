import axios from "axios";
import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import { Navigate, useNavigate } from "react-router-dom";

const AddRecipe =()=>{
    const [title,setTitle] = useState('');
    const [des,setDes] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault(); //페이지 이동하지 않게 해주기 위해 사용
        
        axios.post('http://localhost:3001/addRecipe',{
            RCP_NM: title,
            RCP_PARTS_DTLS : des
        }).then(()=>{
            alert('작성되었습니다!');
            setTitle('')
            setDes('')
        })

        
    }

    useEffect(()=>{
        if(!localStorage.getItem('userData')){
            alert('로그인 후 이용해주세요!');
            navigate('/user/login');
            return;
        }
    })

    return(
        <div>
            <Header/>
            <Form>
                <Form.Group style={{margin:"30px"}} className = "mb-3">
                    <Form.Label>요리 이름</Form.Label>
                    <Form.Control style={{width:"50%"}} type="text" placeholder="요리 이름을 작성해주세요" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </Form.Group>
                <Form.Group style={{margin:"30px"}} className="mb-3">
                    <Form.Label>레시피</Form.Label>
                    <Form.Control style={{width:"50%", height:"300px",resize:"none"}} as="textarea" placeholder="레시피를 작성해주세요" onChange={(e)=>setDes(e.target.value)} value={des}/>
                </Form.Group>
                <Button style={{marginLeft:"30px",marginTop:"5px"}} type="reset" variant="primary" onClick={handleSubmit}>작성</Button>{' '}
            </Form>
        </div>
    )
}

export default AddRecipe;