import {React, useState} from 'react'
import Pagination from 'react-bootstrap/Pagination';

function RecipeListPage() {
  //totalRecipeDataList 라는 이름의 변수 또는 state에 음식정보 배열을 넣으면 작동합니다.
  const totalRecipeDataList = [
    {
      name: '짜장면1',
      category: '중식'
    },
    {
      name: '토마토파스타2',
      category: '양식'
    },
    {
      name: '토마토파스타3',
      category: '양식'
    }
  ]

  const numOfItemsPerPage = 8;
  const totalNumOfPages = Math.ceil(totalRecipeDataList.length / numOfItemsPerPage); //해당 소수보다 크거나 같은 정수 반환. ex) 1.2 -> 2

  const rangeSize = 5; //한번에 표시할 페이지 번호 범위.(1~5, 6~10, 11~15, ...)
  const totalRanges = Math.ceil(totalNumOfPages / rangeSize); //페이지 번호 범위의 전체 갯수.

  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [currentRange, setCurrentRange] = useState(1);  //현재 몇번째 범위에 있는지

  const indexOfLastItem = currentPageNum * numOfItemsPerPage - 1;
  const indexOfFirstItem = indexOfLastItem - numOfItemsPerPage + 1;
  const currentPageRecipeList = totalRecipeDataList.slice(indexOfFirstItem, indexOfLastItem+1);

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
  
  
  const items = [];
  const startPage = (currentRange - 1) * rangeSize + 1;
  const endPage = Math.min(startPage + rangeSize - 1, totalNumOfPages);

  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPageNum} onClick={()=>setCurrentPageNum(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      {
        currentPageRecipeList.map(obj => <div>{obj.name}</div>)
      }
      <Pagination>
        <Pagination.Prev onClick={handlePreviousPage} disabled={currentPageNum === 1} />
        {currentRange > 1 && <Pagination.Item onClick={handlePreviousRange}>...</Pagination.Item>}
        {items}
        {currentRange < totalRanges && <Pagination.Item onClick={handleNextRange}>...</Pagination.Item>}
        <Pagination.Next onClick={handleNextPage} disabled={currentPageNum === totalNumOfPages} />
      </Pagination>
    </div>
  )  
}

export default RecipeListPage