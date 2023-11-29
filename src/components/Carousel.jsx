import { React, useState } from 'react'
import { Card, Row } from 'react-bootstrap'

function Carousel() {
    const data = [{ title: "title1", readme: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "title2", readme: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "title3", readme: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "title4", readme: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "title5", readme: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }];
    let leftVal = [50, 30, 70, 10, 90];
    let topVal = [60, 30, 30, 0, 0];
    return (
        <div style={{position:"relative", width: "1024px", margin:" 30px auto", height: "395px"}}>
            {
                data.map((v, i) => 
                <Card style={{ width: '18rem', position: 'absolute', zIndex: (5-i),
                 left: leftVal[i]+"%",
                 top: topVal[i] + "px",
                transform: "translateX(-50%)"}}>
                    <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18c1b001389%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18c1b001389%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.24835968017578%22%20y%3D%2297.5%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                    <Card.Body>
                        <Card.Title>{v.title}</Card.Title>
                        <Card.Text>{v.readme}</Card.Text>
                    </Card.Body>
                </Card>)
            }
        </div>

    )
}

export default Carousel