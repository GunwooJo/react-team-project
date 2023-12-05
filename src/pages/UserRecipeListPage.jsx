import axios from "axios";
import {React,useEffect,useState} from "react";   
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


function UserRecipeListPage(){
    const [recipeData,setrecipeData] = useState([]);

const fetchRecipeData=()=>{
    axios
    .get('http://localhost:3001/addRecipe')
    .then((response)=>{
        const fetchData = response.data;
        setrecipeData(fetchData);
    }).catch(console.error)
}


useEffect(()=>{
    fetchRecipeData();
},[])

    return(
        <div>
            {
                   recipeData.map((data,index)=>{
                    return(
                        <ListGroup as="ol" >
                        <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div >{data.RCP_NM}</div>
                                <pre >{data.RCP_PARTS_DTLS}</pre>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    )
                })
            }
        </div>
    )
}





export default UserRecipeListPage;