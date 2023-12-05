import axios from 'axios';
export const APIKEY = '419cf02bcbf849288b6f';
export const SERVICEID = 'COOKRCP01';
export const FOOD_SAFETY_KOREA_URL = `http://openapi.foodsafetykorea.go.kr/api/${APIKEY}/${SERVICEID}/json`;
const serverLink = "http://localhost:3001/";
export const serviceDB = {
    findDataToSearch: (channel, param) => {
        //  ex
        //   val: 찌기,
        //   title: 조리방식,

        let menu = {
            "이름": "RCP_NM", //메뉴명 O
            "조리방식": "RCP_WAY2", // 조리방법 ? 찌기 끓이기
            "재료": "RCP_PARTS_DTLS", // 재료정보1  O
            "요리종류": "RCP_PAT2", // 요리종류(ex) 반찬, 국, 후식 등   O
            "태그": "HASH_TAG", // X    
            "날짜": "CHNG_DT", //(YYYYMMDD)  X
        };
        let sendVal = param.val.trim();
        // RCP_NM, RCP_WAY2 ...
        let nameToSearchCode = Object.values(menu)[Object.keys(menu).findIndex((v) => v == param.title)]; 

        axios.get(`${FOOD_SAFETY_KOREA_URL}/1/1000/${nameToSearchCode}=${param.val.trim()}`).then(res => {
            if (param.callback) {
                // 조리방식 검색으론 필터링이 안됨
                // 여기서 필터링 함
                let dataArr = res.data["COOKRCP01"];
                if (nameToSearchCode == "RCP_WAY2") {
                    dataArr.row = dataArr.row.filter(v => v["RCP_WAY2"] == param.val.trim());
                    dataArr["total_count"] = dataArr.row.length;
                }
                param.callback(dataArr);
            }
        });
    }
};