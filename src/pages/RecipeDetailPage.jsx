import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { FOOD_SAFETY_KOREA_URL } from '../constants/apidata';
import { useParams } from 'react-router-dom';

function RecipeDetailPage() {

  const { RCP_NM } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [manualList, setManualList] = useState([]);
  const [manualImgList, setManualImgList] = useState([]);

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get(`${FOOD_SAFETY_KOREA_URL}/1/1000/RCP_NM=${RCP_NM}`);
      const recipeData = response.data.COOKRCP01.row[0];

      makeManualList(recipeData);
      makeManualImgList(recipeData);      

    } catch (error) {
      alert('오류가 발생했어요. 잠시 후 다시 시도해주세요.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  //manualList에 메뉴얼 내용 배열로 담기.
  const makeManualList = (recipeObj) => {
    if(!recipeObj) throw Error('인자 없음.');

    let newList = [];
    for(let i = 1 ; i <= 20 ; i++) {
      const num = i.toString().padStart(2, '0');
      
      if(!recipeObj[`MANUAL${num}`])  break;

      newList.push(recipeObj[`MANUAL${num}`])
    }
    setManualList(newList);
  }

  //manualImgList 메뉴얼 이미지 배열로 담기.
  const makeManualImgList = (recipeObj) => {
    if(!recipeObj) throw Error('인자 없음.');
    
    let newList = [];
    for(let i = 1 ; i <= 20 ; i++) {
      const num = i.toString().padStart(2, '0');
      
      if(!recipeObj[`MANUAL_IMG${num}`])  break;

      newList.push(recipeObj[`MANUAL_IMG${num}`])
    }
    setManualImgList(newList);
  }

  useEffect(()=>{
    fetchRecipeData();
  }, [])

  return (
    <div>
      {
        manualList.map((manual, idx) => {
          return (
            <div key={manual}>
              <img src={manualImgList[idx]} alt='메뉴얼 이미지'/>
              <p>{manual}</p>
            </div>
          )
        })
      }
    </div>  
  )
}

export default RecipeDetailPage;