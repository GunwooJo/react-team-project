import React from 'react'

//메인페이지 중간에 위치할 레시 분류 슬라이드.
function RecipeCategory() {

  const foodCategoryList = [
    {
      RCP_PAT2: '반찬',
      imageUrl: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00029_1.png'
    },
    {
      RCP_PAT2: '국&찌개',
      imageUrl: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00276_1.png'
    },
    {
      RCP_PAT2: '후식',
      imageUrl: 'http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053610_1416213370153.jpg'
    },
    {
      RCP_PAT2: '일품',
      imageUrl: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00111_1.png'
    },
    {
      RCP_PAT2: '밥',
      imageUrl: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00124_1.png'
    },
    {
      RCP_PAT2: '기타',
      imageUrl: 'http://www.foodsafetykorea.go.kr/uploadimg/20210129/20210129012153_1611894113680.jpg'
    }
  ]

  // 카테고리를 클릭했을 때 작동할 기능.
  const handleRouting = () => {
    alert('해당 카테고리에 속하는 음식들 보여주는 페이지로 이동.(추후 구현)');
  }

  return (
    <div>
      <div style={{ display:'flex', justifyContent: 'center', backgroundColor: '#D9D9D9', height:'170px' }}>
      {
        foodCategoryList.map((foodCategoryObj, idx) => {
          return (
            <div style={{ marginRight: '30px', cursor: 'pointer', paddingTop: '28px' }} onClick={handleRouting} key={foodCategoryObj.RCP_PAT2}>
              {/* 음식사진과 카테고리 제목 */}
              <img src={ foodCategoryObj.imageUrl } alt='음식사진' style={{ borderRadius: '70%', width: '90px', height: '90px' }}/>
              <div style={{ textAlign: 'center', marginTop: '5px' }}>{ foodCategoryObj.RCP_PAT2 }</div>
            </div>
          )
        })
      }
      </div>
    </div>
    
  )
}

export default RecipeCategory