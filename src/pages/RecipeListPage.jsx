import { React, useState, useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Header from '../components/Header';
import { useLocation } from "react-router-dom";
import { serviceDB } from '../constants/apidata';
import { LoadingIndicator } from '../components/LoadingIndicator';

function RecipeListPage() {
  // 값 보내면 state로 들어옴.
  const props = useLocation();
  //totalRecipeDataList 라는 이름의 변수 또는 state에 음식정보 배열을 넣으면 작동합니다.
  const [totalRecipeDataList, setTotalRecipeDataList] = useState([]);
  useEffect(() => {
    console.log(props.state);
    if (props.state) {
      let data = props.state.data.row || [];
      setTotalRecipeDataList(data);
    }
  }, [props]);

  //페이지 처음 불러올 때 모든 레시피 보여주기.
  useEffect(() => {
    if(props.state) return;

    serviceDB.getAllData({
      callback: (res) => {
        const response = res.row;
        setTotalRecipeDataList(response);
      }
    });
  }, [])

  const numOfItemsPerPage = 8;
  const totalNumOfPages = Math.ceil(totalRecipeDataList.length / numOfItemsPerPage); //해당 소수보다 크거나 같은 정수 반환. ex) 1.2 -> 2

  const rangeSize = 5; //한번에 표시할 페이지 번호 범위.(1~5, 6~10, 11~15, ...)
  const totalRanges = Math.ceil(totalNumOfPages / rangeSize); //페이지 번호 범위의 전체 갯수.

  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [currentRange, setCurrentRange] = useState(1);  //현재 몇번째 범위에 있는지

  const indexOfLastItem = currentPageNum * numOfItemsPerPage - 1;
  const indexOfFirstItem = indexOfLastItem - numOfItemsPerPage + 1;
  const currentPageRecipeList = totalRecipeDataList.slice(indexOfFirstItem, indexOfLastItem + 1);

  const updatePageAndRange = (newPage) => {
    setCurrentPageNum(newPage);
    const newRange = Math.ceil(newPage / rangeSize);
    if (newRange !== currentRange) {
      setCurrentRange(newRange);
    }
  };

  const handleNextPage = () => {
    updatePageAndRange(Math.min(currentPageNum + 1, totalNumOfPages));
  };

  const handlePreviousPage = () => {
    updatePageAndRange(Math.max(currentPageNum - 1, 1));
  };

  const handleNextRange = () => {
    setCurrentRange(prev => Math.min(prev + 1, totalRanges));
  };

  const handlePreviousRange = () => {
    setCurrentRange(prev => Math.max(prev - 1, 1));
  };

  const handleRouting = () => {
    alert('레시피 상세페이지로 이동!(추후 구현)');
  }

  const items = [];
  const startPage = (currentRange - 1) * rangeSize + 1;
  const endPage = Math.min(startPage + rangeSize - 1, totalNumOfPages);

  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPageNum} onClick={() => setCurrentPageNum(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <Header />

      <p style={{ marginLeft: '20vw', marginTop: '10px' }}>
        {(() => {
          if (props.state) {
            if (parseInt(props.state.data["total_count"]) <= 0) {
              return `해당하는 레시피가 없습니다.`;
            }
          }
          return `총 ${totalRecipeDataList.length}개의 맛있는 레시피가 있습니다.`;
        })()}
      </p>
      <hr style={{ width: '60vw', margin: '0 auto', marginBottom: '50px' }} />

      {/* 음식들 ui */}
      {(() => {
        if (props.state) {
          if (parseInt(props.state.data["total_count"]) <= 0) {
            return null;
          }
        }
        return <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0px 30px', margin: '0 15vw', height: '70vh' }} >
            {
              currentPageRecipeList.map(recipeObj => {
                return (
                  <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={handleRouting} >
                    <img src={recipeObj.ATT_FILE_NO_MK} style={{ width: '200px', height: '200px' }} alt='레시피 이미지' />
                    <div style={{ color: '#555555' }}>{recipeObj.RCP_PAT2}</div>
                    <b>{recipeObj.RCP_NM}</b>
                    <div style={{ color: '#555555' }}>{recipeObj.RCP_WAY2}{' '}{recipeObj.INFO_ENG}kcal</div>
                  </div>
                )
              })
            }
          </div>

          {/* 페이지번호 ui */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination>
              <Pagination.Prev onClick={handlePreviousPage} disabled={currentPageNum === 1} />
              {currentRange > 1 && <Pagination.Item onClick={handlePreviousRange}>...</Pagination.Item>}
              {items}
              {currentRange < totalRanges && <Pagination.Item onClick={handleNextRange}>...</Pagination.Item>}
              <Pagination.Next onClick={handleNextPage} disabled={currentPageNum === totalNumOfPages} />
            </Pagination>
          </div>
        </>;
      })()}
      <LoadingIndicator/>
    </>
  )
}

export default RecipeListPage