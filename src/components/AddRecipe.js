import axios from "axios";
import React, { useState } from "react";

const Create =()=>{
    const [title,setTitle] = useState('');
    const [des,setDes] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault(); //페이지 이동하지 않게 해주기 위해 사용
        
        axios.post('http://localhost:3001/addRecipe',{
            title: title,
            des : des
        }).then(()=>{
            console.log('생성완료')
        })
    }

    return(
        <div className="create">
            <h2>Add a new Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label for="">Recipe title:</label> 
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>

                <label for="">Recipe des:</label>
                <textarea style={{resize:"none"}} required value={des} onChange={(e)=>setDes(e.target.value) } > </textarea>
                <button>Add Recipe</button>
            </form>
        </div>
    )
}

export default Create;