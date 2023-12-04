import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { FOOD_SAFETY_KOREA_URL } from '../constants/apidata';
import { useParams } from 'react-router-dom';

function RecipeDetailPage() {

  const { RCP_NM } = useParams();
  const [recipeObj, setRecipeObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [numOfManual, setNumOfManual] = useState(0);
  const [numOfManualImg, setNumOfManualImg] = useState(0);

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get(`${FOOD_SAFETY_KOREA_URL}/1/1000/RCP_NM=${RCP_NM}`);
      setRecipeObj(response.data.COOKRCP01.row[0]);

      if(recipeObj) {
        const manualNum = checkHowManyManual(recipeObj);
        setNumOfManual(manualNum);

        const manualImgNum = checkHowManyManualImg(recipeObj);
        setNumOfManualImg(manualImgNum);
      }

    } catch (error) {
      alert('오류가 발생했어요. 잠시 후 다시 시도해주세요.');
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

  //메뉴얼 이미지가 몇개 등록되어있는지 확인.
  const checkHowManyManualImg = (recipeObj) => {
    if(!recipeObj) throw Error('인자 없음.');
    
    for(let i = 1 ; i <= 20 ; i++) {
      const num = i.toString().padStart(2, '0');
      
      if(!recipeObj[`MANUAL_IMG${num}`])
        return i-1;
    }
  }

  useEffect(()=>{
    fetchRecipeData();
  }, [])

  return (
    <div>
      test
    </div>  
  )
}

export default RecipeDetailPage;