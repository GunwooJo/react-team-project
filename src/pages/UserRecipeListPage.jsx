import axios from "axios";
import { React, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

function UserRecipeListPage() {
    const [recipeData, setrecipeData] = useState([]);
    const navigate=useNavigate();
    const deleteHandle=(id)=>{
        axios
        .delete('http://localhost:3001/addRecipe/'+id)
        .then(()=>{
            fetchRecipeData();
            alert('삭제 완료!')
        })
        .catch(console.error);
    }

    const fetchRecipeData = () => {
        axios
            .get('http://localhost:3001/addRecipe')
            .then((response) => {
                const fetchData = response.data;
                setrecipeData(fetchData);
            })
            .catch(console.error);
    }

    useEffect(() => {
        if(!localStorage.getItem('userData')){
            alert('로그인 후 이용해주세요!');
            navigate('/user/login');
            return;
        }
        fetchRecipeData();
    }, [])

    return (
        <div>
            <Header />
            {
                recipeData.map((data, index) => {
                    return (
                        <ListGroup key={data.id} as="ol">
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div>{data.RCP_NM}</div>
                                    <pre>{data.RCP_PARTS_DTLS}</pre>
                                </div>
                                <Button style={{ alignSelf: "center" }} variant="danger" onClick={()=>deleteHandle(data.id)} > 삭제하기 </Button>{' '}
                            </ListGroup.Item>
                        </ListGroup>
                    )
                })
            }
        </div>
    )
}

export default UserRecipeListPage;
