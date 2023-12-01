import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Test01() {
  const [cookBoil, setCookBoil] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://openapi.foodsafetykorea.go.kr/api/419cf02bcbf849288b6f/COOKRCP01/json/1/999/"
        );

        let foodNameList = [];

        //음식 인덱스 범위 조정
        for (let i = 0; i < 998; i++) {
          const foodName = response.data.COOKRCP01.row[i].HASH_TAG;
          if (foodName === null) break;

          foodNameList.push(foodName);
        }

        //중복 제거 기능
        const cookList = [...new Set(foodNameList)];

        //특정 글자수만 나타내기
        const filter = cookList.map((foodName) => {
          const nameFilter = foodName.substring(0, 20);
          return nameFilter;
        });

        //결과값 확인용
        console.log(filter);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  // 데이터 활용 부분
}
