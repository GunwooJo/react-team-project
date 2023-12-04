import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { FOOD_SAFETY_KOREA_URL } from '../constants/apidata';
import { useParams } from 'react-router-dom';

function RecipeDetailPage() {

  const { RCP_NM } = useParams();
  const [recipeObj, setRecipeObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [numOfManual, setNumOfManual] = useState(0);

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get(`${FOOD_SAFETY_KOREA_URL}/1/1000/RCP_NM=${RCP_NM}`);
      setRecipeObj(response.data.COOKRCP01.row[0]);

      if(recipeObj) {
        const num = checkHowManyManual(recipeObj);
        setNumOfManual(num);
      }

    } catch (error) {
      alert('axios 요청에러.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  //메뉴얼이 몇개 등록되어있는지 확인.
  const checkHowManyManual = (recipeObj) => {
    if(!recipeObj) throw Error('인자 없음.');
    
    for(let i = 1 ; i <= 20 ; i++) {
      const num = i.toString().padStart(2, '0');
      
      if(!recipeObj[`MANUAL${num}`])
        return i-1;
    }
  }

  useEffect(()=>{
    fetchRecipeData();
  }, [])

  const num = 1;
  return (
    <div>
      <h1>{recipeObj.RCP_NM}</h1> {/* Recipe Title */}
      <img src={recipeObj.ATT_FILE_NO_MAIN} alt="Main" /> {/* Main Image */}
      <p>Cooking Method: {recipeObj.RCP_WAY2}</p>
      <p>Type of Dish: {recipeObj.RCP_PAT2}</p>
      <p>Ingredients: {recipeObj.RCP_PARTS_DTLS}</p>
      <p>Nutritional Info: Calories - {recipeObj.INFO_ENG}, Carbs - {recipeObj.INFO_CAR}, Protein - {recipeObj.INFO_PRO}, Fat - {recipeObj.INFO_FAT}, Sodium - {recipeObj.INFO_NA}</p>
      <div>
        메뉴얼: {recipeObj[`MANUAL${'0' + num}`]}
      </div>
      <p>Tip: {recipeObj.RCP_NA_TIP}</p>
      <p>메뉴얼 갯수: {numOfManual}</p>
    </div>  
  )
}

export default RecipeDetailPage;