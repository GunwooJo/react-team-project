import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { FOOD_SAFETY_KOREA_URL } from '../constants/apidata';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Button, Form, ListGroup } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../components/Footer';
import Commenter from '../components/Commenter';

function RecipeDetailPage() {
  // 값 보내면 state로 들어옴.
  const props = useLocation();
  const navigate = useNavigate();
  const { RCP_NM } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [manualList, setManualList] = useState([]);
  const [manualImgList, setManualImgList] = useState([]);
  const [recipeObj, setRecipeObj] = useState({});

  const fetchRecipeData = async () => {
    try {
      let recipeData = null;
      if (props.state) {
        recipeData = props.state.data || {};
        console.log(recipeData);
      } else {
        const response = await axios.get(`${FOOD_SAFETY_KOREA_URL}/1/1000/RCP_NM=${RCP_NM}`);
        recipeData = response.data.COOKRCP01.row[0];
      }
      
      console.log(recipeData);

      makeManualList(recipeData);
      makeManualImgList(recipeData);
      setRecipeObj(recipeData);
    

    } catch (error) {
      alert('오류가 발생했어요. 잠시 후 다시 시도해주세요.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

 
  //manualList에 메뉴얼 내용 배열로 담기.
  const makeManualList = (recipeObj) => {
    if (!recipeObj) throw Error('인자 없음.');

    let newList = [];
    for (let i = 1; i <= 20; i++) {
      const num = i.toString().padStart(2, '0');

      if (!recipeObj[`MANUAL${num}`]) break;

      newList.push(recipeObj[`MANUAL${num}`])
    }
    setManualList(newList);
  }

  //manualImgList 메뉴얼 이미지 배열로 담기.
  const makeManualImgList = (recipeObj) => {
    if (!recipeObj) throw Error('인자 없음.');

    let newList = [];
    for (let i = 1; i <= 20; i++) {
      const num = i.toString().padStart(2, '0');

      if (!recipeObj[`MANUAL_IMG${num}`]) break;

      newList.push(recipeObj[`MANUAL_IMG${num}`])
    }
    setManualImgList(newList);
  }

  useEffect(() => {
    fetchRecipeData();
  }, [])

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>

        <img src={recipeObj.ATT_FILE_NO_MK} style={{ width: '400px', marginTop: '40px', marginBottom: '20px' }} alt='레시피 대표 이미지' />
        <div style={{ marginBottom: '30px' }}>
          <div style={{ color: '#555555', fontSize: '1.2rem' }}>{recipeObj.RCP_PAT2}</div>
          <b style={{ fontSize: '1.2rem' }}>{recipeObj.RCP_NM}</b>
        </div>


        <div>
          <b style={{ color: '#555555', margin: 'auto 10px' }}>{recipeObj.RCP_WAY2}</b>
          <b style={{ color: '#555555', margin: 'auto 10px' }}>{recipeObj.INFO_ENG} kcal</b>
          <b style={{ margin: 'auto 3px' }}>탄수화물: {recipeObj.INFO_CAR}</b>
          <b style={{ margin: 'auto 3px' }}>단백질: {recipeObj.INFO_PRO}</b>
          <b style={{ margin: 'auto 3px' }}>지방: {recipeObj.INFO_FAT}</b>
          <b style={{ margin: 'auto 3px' }}>나트륨: {recipeObj.INFO_NA}</b>
        </div>

        <hr style={{ width: '60vw', margin: '20px auto', marginBottom: '50px' }} />
        <div style={{ marginTop: '40px', marginBottom: '80px' }}><b>{recipeObj.RCP_PARTS_DTLS}</b></div>


        {
          manualList.map((manual, idx) => {
            return (
              <div style={{ marginBottom: '70px' }} key={manual}>
                <img style={{ marginBottom: '20px', width: '300px' }} src={manualImgList[idx]} alt='레시피 단계 이미지' />
                <br />
                <b>{manual}</b>
              </div>
            )
          })
        }

        <Commenter recipeObj={recipeObj}/>
      </div>
      <Footer />
    </>
  )
}

export default RecipeDetailPage;