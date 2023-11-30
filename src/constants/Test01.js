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
        for (let i = 0; i < 998; i++) {
          const foodName = response.data.COOKRCP01.row[i].RCP_PAT2;
          if (foodName === null) break;

          foodNameList.push(foodName);
          console.log(foodName);
        }

        // Remove duplicates by converting the array to a Set and then back to an array
        const cookList = [...new Set(foodNameList)];
        
        console.log(cookList);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  // 데이터 활용 부분

}
