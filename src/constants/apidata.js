import axios from 'axios';
export const APIKEY = '419cf02bcbf849288b6f';
export const SERVICEID = 'COOKRCP01';
export const FOOD_SAFETY_KOREA_URL = `http://openapi.foodsafetykorea.go.kr/api/${APIKEY}/${SERVICEID}/json`;
const serverLink = "http://localhost:3001/";
const headerMenu = {
    "이름": "RCP_NM", //메뉴명 O
    "조리방식": "RCP_WAY2", // 조리방법 ? 찌기 끓이기
    "재료": "RCP_PARTS_DTLS", // 재료정보1  O
    "요리종류": "RCP_PAT2", // 요리종류(ex) 반찬, 국, 후식 등   O
    "태그": "HASH_TAG", // X    
    "날짜": "CHNG_DT", //(YYYYMMDD)  X
};
export const serviceDB = {
    
    getRandomData: (channel, param) => {
        // 0~ 995번째 레시피까지 랜덤값 5개 가져오기
        let randNum = Math.floor(Math.random()*995)+1;
        axios.get(`${FOOD_SAFETY_KOREA_URL}/${randNum}/${randNum+4}`).then(res => {
            if (param.callback) {
                param.callback(res.data["COOKRCP01"]);
            }
        });
    },

    findDataToSearch: (channel, param) => {
        //  ex param = val: 찌기, title: 조리방식,
        let sendVal = param.val.trim();
        let nameToSearchCode = Object.values(headerMenu)[Object.keys(headerMenu).findIndex((v) => v == param.title)]; // RCP_NM, RCP_WAY2 ...

        axios.get(`${FOOD_SAFETY_KOREA_URL}/1/1000/${nameToSearchCode}=${sendVal}`).then(res => {
            if (param.callback) {
                // 조리방식 검색으론 필터링이 안됨
                // 여기서 필터링 함
                let dataArr = res.data["COOKRCP01"];
                if (nameToSearchCode == "RCP_WAY2") {
                    dataArr.row = dataArr.row.filter(v => v["RCP_WAY2"] == sendVal);
                    dataArr["total_count"] = dataArr.row.length;
                }
                param.callback(dataArr);
            }
        });
    },

    getAllData: async (param) => {
      try {
        const response = await axios.get(`${FOOD_SAFETY_KOREA_URL}/1/1000`);

        if(param.callback)
          param.callback(response.data.COOKRCP01);

      } catch (error) {
        console.error(error);
      }
    }
};