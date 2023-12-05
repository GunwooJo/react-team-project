import axios from "axios";
import {React,useState} from "react";   

const UserRecipeListPage=()=>{
    const [title,setTitle] = useState('');
    const [des,setDes] = useState('');
    const ary= [];
    axios
    .get('http://localhost:3001/addRecipe')
    .then((response)=>{
        
        setTitle(JSON.stringify(response.data))
        console.log(ary.RCP_NM)
       
    })
    .catch(console.log)

    return(
        <div>
            {title}
         
        </div>
    )

}



export default UserRecipeListPage;