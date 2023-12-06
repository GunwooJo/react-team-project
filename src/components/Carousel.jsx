import { React, useState, useRef, useEffect } from 'react'
import { Card, Row } from 'react-bootstrap'
import { serviceDB } from '../constants/apidata';

function Carousel() {
    useEffect(v => {
        //localStorage에 저장
        let data = JSON.parse(localStorage.getItem('carouselData'));
        if (!data) {
            serviceDB.getRandomData("Carousel", {
                callback: (res) => {
                    console.log(res);
                    if (res) {
                        data = res.row || [];
                        localStorage.setItem('carouselData', JSON.stringify(res));
                        setCardData(data);
                    }
                }
            });
        } else {
            setCardData(data.row);
        }
    }, []);

    const [cardData, setCardData] = useState([
        {
            "RCP_PARTS_DTLS": "단호박작은것 125g, 잔새우살다진것 20g, 두부 20g, 건표고버섯 10g, 청피망다진것 10g, 홍피망다진것 10g, 실파 5g, 밀가루 8g, 마늘 3g, 깨소금 1g, 참기름 1g, 소금 1g, 흰후춧가루 1g",
            "RCP_WAY2": "찌기",
            "MANUAL_IMG20": "",
            "MANUAL20": "",
            "RCP_SEQ": "959",
            "INFO_NA": "395",
            "INFO_WGT": "",
            "INFO_PRO": "11.1",
            "MANUAL_IMG13": "",
            "MANUAL_IMG14": "",
            "MANUAL_IMG15": "",
            "MANUAL_IMG16": "",
            "MANUAL_IMG10": "",
            "MANUAL_IMG11": "",
            "MANUAL_IMG12": "",
            "MANUAL_IMG17": "",
            "MANUAL_IMG18": "",
            "MANUAL_IMG19": "",
            "INFO_FAT": "3.5",
            "HASH_TAG": "",
            "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/959-2.jpg",
            "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/959-3.jpg",
            "RCP_PAT2": "반찬",
            "MANUAL_IMG04": "http://www.foodsafetykorea.go.kr/uploadimg/cook/959-4.jpg",
            "MANUAL_IMG05": "http://www.foodsafetykorea.go.kr/uploadimg/cook/959-5.jpg",
            "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/959-1.jpg",
            "MANUAL01": "1. 단호박은 표면을 깨끗하게 씻어 물기를 제거하고 꼭지 부분의 윗면을 자르고 수저로 속을 파낸 후 소금을 뿌려 놓는다.",
            "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053650_1416213410481.jpg",
            "MANUAL_IMG06": "http://www.foodsafetykorea.go.kr/uploadimg/cook/959-6.jpg",
            "MANUAL_IMG07": "",
            "MANUAL_IMG08": "",
            "MANUAL_IMG09": "",
            "MANUAL08": "",
            "MANUAL09": "",
            "MANUAL06": "6. 준비된 소를 채운 후 잘라둔 꼭지 부분의 뚜껑을 덮어 김 오른 찜통에 20분가량 찐 뒤 4~6등분 하여 낸다.",
            "MANUAL07": "",
            "MANUAL04": "4. 1의 내부에 수분을 제거한다.",
            "MANUAL05": "5. 4의 안쪽에 밀가루를 살짝 뿌리고 밀가루가 골고루 잘 묻도록 한다.",
            "MANUAL02": "2. 새우살은 다지고 두부는 면보로 싸서 물기를 제거하고 곱게 으깨고 불린 건표고버섯과 청, 홍피망은 곱게 다지고 실파는 송송 썬다.",
            "MANUAL03": "3. 2의 재료를 한 데 섞고 소금, 다진 마늘, 깨소금, 참기름, 흰 후춧가루를 넣고 양념하여 소를 만든다.",
            "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053650_1416213410481.jpg",
            "MANUAL11": "",
            "MANUAL12": "",
            "MANUAL10": "",
            "INFO_CAR": "38.6",
            "MANUAL19": "",
            "RCP_NA_TIP": "단호박 속에 쌀과 견과류를 함께 넣어 만들어도 좋다.",
            "INFO_ENG": "202",
            "MANUAL17": "",
            "MANUAL18": "",
            "RCP_NM": "단호박 새우찜",
            "MANUAL15": "",
            "MANUAL16": "",
            "MANUAL13": "",
            "MANUAL14": ""
        },
        {
            "RCP_PARTS_DTLS": "두부 80g, 키위 20g, 오렌지 20g, 토마토 20g, 바나나 20g, 사과 20g, 꿀 10g, 소금적당량, 식용유 5g",
            "RCP_WAY2": "굽기",
            "MANUAL_IMG20": "",
            "MANUAL20": "",
            "RCP_SEQ": "960",
            "INFO_NA": "8",
            "INFO_WGT": "",
            "INFO_PRO": "8.3",
            "MANUAL_IMG13": "",
            "MANUAL_IMG14": "",
            "MANUAL_IMG15": "",
            "MANUAL_IMG16": "",
            "MANUAL_IMG10": "",
            "MANUAL_IMG11": "",
            "MANUAL_IMG12": "",
            "MANUAL_IMG17": "",
            "MANUAL_IMG18": "",
            "MANUAL_IMG19": "",
            "INFO_FAT": "9.6",
            "HASH_TAG": "",
            "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/960-2.jpg",
            "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/960-3.jpg",
            "RCP_PAT2": "반찬",
            "MANUAL_IMG04": "http://www.foodsafetykorea.go.kr/uploadimg/cook/960-4.jpg",
            "MANUAL_IMG05": "http://www.foodsafetykorea.go.kr/uploadimg/cook/960-5.jpg",
            "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/960-1.jpg",
            "MANUAL01": "1. 두부는 3cm 주사위모양으로 썰고 소금을 뿌려 간을 한다.",
            "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053651_1416213411605.jpg",
            "MANUAL_IMG06": "http://www.foodsafetykorea.go.kr/uploadimg/cook/960-6.jpg",
            "MANUAL_IMG07": "",
            "MANUAL_IMG08": "",
            "MANUAL_IMG09": "",
            "MANUAL08": "",
            "MANUAL09": "",
            "MANUAL06": "6. 민트로 장식한다",
            "MANUAL07": "",
            "MANUAL04": "4. 3의 지지지 않은 한 쪽 면을 숟가락을 이용해 뚫리지 않게 조심스럼게 파낸다.",
            "MANUAL05": "5. 속을 파낸 두부에 2를 채워 넣는다.",
            "MANUAL02": "2. 과일은 5mm 주사위모양으로 썬 뒤 꿀을 넣고 버무린다.",
            "MANUAL03": "3. 기름을 두른 팬에 1을 넣고 5면을 노릇하게 지진 뒤 종이타월로 기름기를 제거한다.",
            "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053651_1416213411605.jpg",
            "MANUAL11": "",
            "MANUAL12": "",
            "MANUAL10": "",
            "INFO_CAR": "22.3",
            "MANUAL19": "",
            "RCP_NA_TIP": "두부는 가능하면 단단한 것을 구입한다.",
            "INFO_ENG": "190",
            "MANUAL17": "",
            "MANUAL18": "",
            "RCP_NM": "두부 샌드위치",
            "MANUAL15": "",
            "MANUAL16": "",
            "MANUAL13": "",
            "MANUAL14": ""
        },
        {
            "RCP_PARTS_DTLS": "새우 20g, 홍피망 5g, 팽이버섯 5g, 숙주 15g, 무순 3g, 상추 5g, 차이브 5g, 쌀국수가는것 15g, 라이스페이퍼 20g[새콤 달콤 소스] 양파 5g, 마늘 1g, 홍고추 1g, 청고추 1g, 물전분 약간, 물 약간, 식초 3g, 설탕 1g, 고추기름 약간",
            "RCP_WAY2": "끓이기",
            "MANUAL_IMG20": "",
            "MANUAL20": "",
            "RCP_SEQ": "961",
            "INFO_NA": "86",
            "INFO_WGT": "",
            "INFO_PRO": "7.2",
            "MANUAL_IMG13": "",
            "MANUAL_IMG14": "",
            "MANUAL_IMG15": "",
            "MANUAL_IMG16": "",
            "MANUAL_IMG10": "",
            "MANUAL_IMG11": "",
            "MANUAL_IMG12": "",
            "MANUAL_IMG17": "",
            "MANUAL_IMG18": "",
            "MANUAL_IMG19": "",
            "INFO_FAT": "2.4",
            "HASH_TAG": "라이스페이퍼",
            "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/961-2.jpg",
            "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/961-3.jpg",
            "RCP_PAT2": "반찬",
            "MANUAL_IMG04": "http://www.foodsafetykorea.go.kr/uploadimg/cook/961-4.jpg",
            "MANUAL_IMG05": "http://www.foodsafetykorea.go.kr/uploadimg/cook/961-5.jpg",
            "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/961-1.jpg",
            "MANUAL01": "1. 새우는 끓는 물에 대친 뒤 찬물에 담궈 식히고 껍질을 벗긴다.",
            "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053652_1416213412573.jpg",
            "MANUAL_IMG06": "http://www.foodsafetykorea.go.kr/uploadimg/cook/961-6.jpg",
            "MANUAL_IMG07": "",
            "MANUAL_IMG08": "",
            "MANUAL_IMG09": "",
            "MANUAL08": "",
            "MANUAL09": "",
            "MANUAL06": "6. 팬에 고추기름을 두르고 다진 마늘을 볶다가 양파를 넣고 청, 홍고추를 넣어 살짝 볶은 뒤 물, 식초, 설탕을 넣고 물전분으로 농도를 맞춘다.",
            "MANUAL07": "",
            "MANUAL04": "4. 따뜻한 물에 라이스페이퍼를 담궜다가 꺼내 면보 위에 놓고 물기를 살짝 제거하고 1, 2, 3을 올리고 조심스럽게 말아준다.",
            "MANUAL05": "5. 마늘은 다지고 양파, 홍고추, 청고추는 0.3mm로 잘게 썬다.",
            "MANUAL02": "2. 홍피망은 얇게 채 썰고 팽이버섯은 밑동을 잘라 준비하고 숙주는 거두절미하여 끓는 물에 데친 뒤 찬물에 식혀서 물기를 빼고 상추는 채 썬다.",
            "MANUAL03": "3. 쌀국수를 물에 불렸다가 끓는 물에 데친 뒤 찬물에 식혀 물기를 제거한다.",
            "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053652_1416213412573.jpg",
            "MANUAL11": "",
            "MANUAL12": "",
            "MANUAL10": "",
            "INFO_CAR": "22.9",
            "MANUAL19": "",
            "RCP_NA_TIP": "모든 재료를 준비 하여 아이들에게 롤을 말도록 하는 것도 재미를 주는 방법이다.",
            "INFO_ENG": "141.6",
            "MANUAL17": "",
            "MANUAL18": "",
            "RCP_NM": "라이스페이퍼 새우롤",
            "MANUAL15": "",
            "MANUAL16": "",
            "MANUAL13": "",
            "MANUAL14": ""
        },
        {
            "RCP_PARTS_DTLS": "도미 40g, 마늘다진것 2g, 빵가루 10g, 버터 1g, 레몬주스 3g, 레몬제스트 2g, 파슬리다진것 2g, 소금적당량, 후추적당량",
            "RCP_WAY2": "굽기",
            "MANUAL_IMG20": "",
            "MANUAL20": "",
            "RCP_SEQ": "962",
            "INFO_NA": "62",
            "INFO_WGT": "",
            "INFO_PRO": "10",
            "MANUAL_IMG13": "",
            "MANUAL_IMG14": "",
            "MANUAL_IMG15": "",
            "MANUAL_IMG16": "",
            "MANUAL_IMG10": "",
            "MANUAL_IMG11": "",
            "MANUAL_IMG12": "",
            "MANUAL_IMG17": "",
            "MANUAL_IMG18": "",
            "MANUAL_IMG19": "",
            "INFO_FAT": "1.7",
            "HASH_TAG": "",
            "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/962-2.jpg",
            "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/962-3.jpg",
            "RCP_PAT2": "반찬",
            "MANUAL_IMG04": "http://www.foodsafetykorea.go.kr/uploadimg/cook/962-4.jpg",
            "MANUAL_IMG05": "http://www.foodsafetykorea.go.kr/uploadimg/cook/962-5.jpg",
            "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/962-1.jpg",
            "MANUAL01": "1. 도미에는 소금과 후추로 밑간을 하고 마늘, 파슬리는 다진다.",
            "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053653_1416213413557.jpg",
            "MANUAL_IMG06": "http://www.foodsafetykorea.go.kr/uploadimg/cook/962-6.jpg",
            "MANUAL_IMG07": "",
            "MANUAL_IMG08": "",
            "MANUAL_IMG09": "",
            "MANUAL08": "",
            "MANUAL09": "",
            "MANUAL06": "6. 5를 오븐에 굽는다.",
            "MANUAL07": "",
            "MANUAL04": "4. 3에 다진 파슬리, 레몬주스, 레몬제스트, 소금, 후추를 넣고 고무주걱으로 잘 섞는다.",
            "MANUAL05": "5. 도미를 양념하고 도미위에 4을 얹는다.",
            "MANUAL02": "2. 버터를 두른 팬에 다진 마늘을 넣고 마늘 향을 낸 버터물을 만든다.",
            "MANUAL03": "3. 2에 빵가루를 섞어 믹싱볼로 옮겨 담는다.",
            "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053653_1416213413557.jpg",
            "MANUAL11": "",
            "MANUAL12": "",
            "MANUAL10": "",
            "INFO_CAR": "8.4",
            "MANUAL19": "",
            "RCP_NA_TIP": "제스트:레몬, 오렌지 등의 껍질을 가늘게 잘라 다진 것을 말한다.",
            "INFO_ENG": "88",
            "MANUAL17": "",
            "MANUAL18": "",
            "RCP_NM": "레몬, 파슬리 빵가루를 입힌 도미",
            "MANUAL15": "",
            "MANUAL16": "",
            "MANUAL13": "",
            "MANUAL14": ""
        },
        {
            "RCP_PARTS_DTLS": "밀가루중력분 80g, 이스트 2g, 따뜻한물 20g, 소금 1g, 올리브오일 1g, 청피망 10g, 홍피망 10g, 베이컨 5g, 양파 10g, 양송이 5g, 토마토소스 5g, 모짜렐라 치즈 12g, 바질 1g, 오레가노 1g, 파마산치즈 2g",
            "RCP_WAY2": "굽기",
            "MANUAL_IMG20": "",
            "MANUAL20": "",
            "RCP_SEQ": "964",
            "INFO_NA": "524",
            "INFO_WGT": "",
            "INFO_PRO": "13.9",
            "MANUAL_IMG13": "",
            "MANUAL_IMG14": "",
            "MANUAL_IMG15": "",
            "MANUAL_IMG16": "",
            "MANUAL_IMG10": "",
            "MANUAL_IMG11": "",
            "MANUAL_IMG12": "",
            "MANUAL_IMG17": "",
            "MANUAL_IMG18": "",
            "MANUAL_IMG19": "",
            "INFO_FAT": "5",
            "HASH_TAG": "",
            "MANUAL_IMG02": "http://www.foodsafetykorea.go.kr/uploadimg/cook/964-2.jpg",
            "MANUAL_IMG03": "http://www.foodsafetykorea.go.kr/uploadimg/cook/964-3.jpg",
            "RCP_PAT2": "후식",
            "MANUAL_IMG04": "http://www.foodsafetykorea.go.kr/uploadimg/cook/964-4.jpg",
            "MANUAL_IMG05": "http://www.foodsafetykorea.go.kr/uploadimg/cook/964-5.jpg",
            "MANUAL_IMG01": "http://www.foodsafetykorea.go.kr/uploadimg/cook/964-1.jpg",
            "MANUAL01": "1. 볼에 밀가루를 담고 가운데에 웅덩이를 만들어 따뜻한 물과 이스트를 넣어 녹인 후 소금을 넣고 밀가루를 조금씩 섞으며 반죽을 한다.",
            "ATT_FILE_NO_MK": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053655_1416213415836.jpg",
            "MANUAL_IMG06": "http://www.foodsafetykorea.go.kr/uploadimg/cook/964-6.jpg",
            "MANUAL_IMG07": "",
            "MANUAL_IMG08": "",
            "MANUAL_IMG09": "",
            "MANUAL08": "",
            "MANUAL09": "",
            "MANUAL06": "6. 반죽을 말아서 윗부분에 칼집을 넣은 뒤 175℃로 예열된 오븐에 굽는다.",
            "MANUAL07": "",
            "MANUAL04": "4. 청, 홍피망은 꼭지부분을 썰어내고 링 모양으로 썰어 심지를 제거하고 베이컨, 양파, 양송이는 슬라이스 한다.",
            "MANUAL05": "5. 3을 오븐용 팬에 옮긴 뒤 토마토소스를 바르고 준비된 재료들과 피자치즈를 올린다.",
            "MANUAL02": "2. 반죽이 하나로 뭉쳐지면 랩으로 싸서 따뜻한 곳에서 30분 정도 발효시킨다.",
            "MANUAL03": "3. 발효된 반죽을 밀대를 이용하여 넓게 편다.",
            "ATT_FILE_NO_MAIN": "http://www.foodsafetykorea.go.kr/uploadimg/20141117/20141117053655_1416213415836.jpg",
            "MANUAL11": "",
            "MANUAL12": "",
            "MANUAL10": "",
            "INFO_CAR": "63.8",
            "MANUAL19": "",
            "RCP_NA_TIP": "피자 반죽을 발효시키기 어려울 때에는 또띠아나 바게트 빵을 이용해도 좋다.",
            "INFO_ENG": "374",
            "MANUAL17": "",
            "MANUAL18": "",
            "RCP_NM": "롤피자",
            "MANUAL15": "",
            "MANUAL16": "",
            "MANUAL13": "",
            "MANUAL14": ""
        }
    ]);

    const [leftVal, setLeftVal] = useState([10, 30, 50, 70, 90]);
    const [topVal, setTopVal] = useState([0, 30, 60, 30, 0]);
    const listRef = useRef();

    const shiftToLeft = (arr) => {
        let tempArr = Object.assign([], arr);
        let item = tempArr.splice(tempArr.length - 1, 1)[0];
        tempArr.unshift(item);
        return tempArr;
    }

    const shiftToRight = (arr) => {
        let tempArr = Object.assign([], arr);
        let item = tempArr.splice(0, 1)[0];
        tempArr.push(item);
        return tempArr;
    }

    const moveCard = (arrowNom) => {
        if (arrowNom == 0) {
            [...listRef.current.children].forEach((v, i) => {
                v.style.transition = "1s";
                v.style.left = leftVal[(i + 1) == 5 ? 0 : i + 1] + "%";
                v.style.top = topVal[(i - 1) == -1 ? 4 : i - 1] + "px";
                v.style["z-index"] = topVal[(i - 1) == -1 ? 4 : i - 1];
            });

            setLeftVal(shiftToLeft(leftVal));
            setTopVal(shiftToLeft(topVal));
        } else {
            [...listRef.current.children].forEach((v, i) => {
                v.style.transition = "1s";
                v.style.left = leftVal[(i - 1) == -1 ? 4 : i - 1] + "%";
                v.style.top = topVal[(i + 1) == 5 ? 0 : i + 1] + "px";
                v.style["z-index"] = topVal[(i + 1) == 5 ? 0 : i + 1];
            });
            setLeftVal(shiftToRight(leftVal));
            setTopVal(shiftToRight(topVal));
        }
    }

    return (
        <div style={{ position: "relative", width: "1024px", margin: " 30px auto", height: "395px" }}>
            <div onClick={() => moveCard(0)}
                style={{ fontSize: "50px", position: "absolute", zIndex: 10, left: "-85px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}>〈</div>
            <div ref={listRef}>
                {
                    cardData.map((v, i) =>
                        <Card style={{
                            width: '18rem', position: 'absolute', zIndex: ((i < 2) ? i : 2 + (2 - i)),
                            height: "318px",
                            left: leftVal[i] + "%",
                            top: topVal[i] + "px",
                            transform: "translateX(-50%)"
                        }}>
                            <div
                                style={{
                                    width: "286px", height: "180px",
                                    backgroundImage: `url(${v["ATT_FILE_NO_MAIN"] || "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18c1b001389%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18c1b001389%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.24835968017578%22%20y%3D%2297.5%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            />
                            <Card.Body>
                                <Card.Title style={{
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                }}>{v["RCP_NM"]}</Card.Title>
                                <Card.Text style={{
                                    textOverflow: "ellipsis",
                                    wordBreak: "breakWord",
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    "-webkit-line-clamp": "3",
                                    "-webkit-box-orient": "vertical"
                                }}>{v["RCP_NA_TIP"]}</Card.Text>
                            </Card.Body>
                        </Card>)
                }
            </div>

            <div onClick={() => moveCard(1)}
                style={{ fontSize: "50px", position: "absolute", zIndex: 10, right: "-85px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}>〉</div>
        </div>

    )
}

export default Carousel