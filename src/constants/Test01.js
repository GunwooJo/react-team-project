import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { APIKEY } from "./apidata";

export default function Test01() {
  const [cookBoil, setCookBoil] = useState([]);

  useEffect(() => {
    const getData = async () => {
      //비동기 안하면 데이터가 로딩되기 전에 렌더링이 완료되기 때문에 사용해줘야함
      await axios
        .get(
          "https://openapi.foodsafetykorea.go.kr/api/419cf02bcbf849288b6f/COOKRCP01/json/1/565/RCP_PAT2=반찬"
        )
        .then((response) => {
          let foodNameList = new Array();
          for (let i = 0; i < 564; i++) {
            const foodName = response.data.COOKRCP01.row[i];
            if (foodName === null) break;

            foodNameList.push(foodName);
            console.log(foodName);
          }
          setCookBoil(foodNameList);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData(); // 비동기 작업을 수행하기 위해서 호출, useEffect 안에서 비동기 작업을 수행하면서 업데이트
  }, []);


  //데이터 활용 부분
  return <div>{cookBoil[5].RCP_NM}</div>;
}
