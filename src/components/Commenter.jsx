import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';


const Commenter = ({recipeObj}) => {
    const [commentMsg, setCommentMsg] = useState('');
    const [commentList, setCommentList] = useState([]);

    const {RCP_NM, RCP_SEQ} = recipeObj;
    const elapsedTime = (date) => {
        const start = new Date(date);
        const end = new Date();

        const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
        if (seconds < 60) return '방금 전';
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)}분 전`;
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)}시간 전`;
        const days = hours / 24;
        if (days < 7) return `${Math.floor(days)}일 전`;
        return `${start.toLocaleDateString()}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let item = {
                RCP_NM,
                RCP_SEQ,
                "email": "sample email",
                "nickname": "sample nickname",
                "content": commentMsg,
                "tm": new Date().toISOString()
            };
            await axios.post('http://localhost:3001/comment', item);
            setCommentList([ ...[item], ...commentList])
            alert('입력 성공');
        } catch (error) {
            alert('입력 실패');
            console.error(error);
        }
    }

    const fetchAll = async () => {
        console.log(RCP_NM , RCP_SEQ);
        if (RCP_NM && RCP_SEQ) { 
            try {
            let cmt = await axios.get(`http://localhost:3001/comment?RCP_NM=${RCP_NM}&RCP_SEQ=${RCP_SEQ}`);
            cmt.data.sort((a,b) => new Date(b.tm).getTime() - new Date(a.tm).getTime());
            setCommentList(cmt.data);
            console.log(cmt.data);
            }
            catch (error) {
                alert('입력 실패');
                console.error(error);
            }
        }
    }

    useEffect(() => {
        fetchAll();
    }, [recipeObj]);
    return (
        <>
            {/* 댓글 입력 영역 */}
            <div style={{ padding: "20px", margin: "10px auto", width: "940px", borderRadius: "5px", textAlign: "start" }}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>댓글 입력</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setCommentMsg(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>등록</Button>
                </Form>
            </div>
            {/* 댓글 목록 영역 */}
            <div style={{ backgroundColor: "#F5F5F5", padding: "20px", margin: "0 auto", width: "940px", borderRadius: "5px", textAlign: "start" }}>
                <p>댓글 목록</p>
                <ListGroup style={{ maxWidth: "900px" }}>
                    {
                        commentList.map((v,i) => 
                            <ListGroup.Item key={i}>
                                <h5>{v.nickname}</h5>
                                <span>{elapsedTime(v.tm)}</span>
                                <p>
                                   {v.content}
                                </p>
                            </ListGroup.Item>
                        )
                    }

                </ListGroup>
            </div>
        </>
    )
}

export default Commenter