import React from 'react'

//메인페이지 중간에 위치할 레시 분류 슬라이드.
function RecipeCategory() {

  const foodCategoryList = [
    {
      title: '샘플',
      imageUrl: 'https://www.casenews.co.kr/news/photo/202205/11152_23355_5126.jpg'
    },
    {
      title: '샘플',
      imageUrl: 'https://www.casenews.co.kr/news/photo/202205/11152_23355_5126.jpg'
    },
    {
      title: '샘플',
      imageUrl: 'https://www.casenews.co.kr/news/photo/202205/11152_23355_5126.jpg'
    },
    {
      title: '샘플',
      imageUrl: 'https://www.bhc.co.kr/upload/bhc/menu/%ED%95%AB%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%BD%A4%EB%B3%B4_410x271.png'
    },
    {
      title: '샘플',
      imageUrl: 'https://www.bhc.co.kr/upload/bhc/menu/%ED%95%AB%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%BD%A4%EB%B3%B4_410x271.png'
    }
  ]

  // 카테고리를 클릭했을 때 작동할 기능.
  const handleRouting = () => {
    alert('해당 카테고리에 속하는 음식들 보여주는 페이지로 이동.(추후 구현)');
  }

  return (
    <div>
      <div style={{ display:'flex' }}>
      {
        foodCategoryList.map((foodCategoryObj, idx) => {
          return (
            <div style={{ marginRight: '30px', cursor: 'pointer' }} onClick={handleRouting}>
              {/* 음식사진과 카테고리 제목 */}
              <img src={ foodCategoryObj.imageUrl } alt='음식사진' style={{ borderRadius: '70%', width: '90px', height: '90px' }}/>
              <p style={{ textAlign: 'center', marginTop: '5px' }}>{ foodCategoryObj.title }</p>
            </div>
          )
        })
      }
      </div>
    </div>
    
  )
}

export default RecipeCategory