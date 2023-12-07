import { React, useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { InputGroup } from 'react-bootstrap';
import free_icon_recipe_book from '../assets/free_icon_recipe_book.png';
import { serviceDB } from '../constants/apidata';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [dropdownTitle, setDropdownTitle] = useState('이름');
  const inpRef = useRef();
  //검색칸 옆의 드랍다운 버튼을 눌렀을 때 일어날 동작.
  const handleSelectDropdown = (eventKey) => {
    setDropdownTitle(eventKey);
  }

  const searchEvent = () => {
    let text = inpRef.current.value;
    serviceDB.findDataToSearch("Header", {
      val: text,
      title: dropdownTitle,
      callback: (res) => {
        console.log(res);
        navigate('/recipe/list', {state: { data: res }});
    }});
  }

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      searchEvent(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>

        <Navbar.Brand href="/" style={{ display: 'flex' }}>
          <img src={free_icon_recipe_book} style={{ width: '30px', marginRight: '5px' }} alt='메인로고' />
          <span>오늘의 레시피</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/recipe/list">둘러보기</Nav.Link>
            <Nav.Link href="/recipe/addUserRecipe">레시피등록</Nav.Link>
            <Nav.Link href="/recipe/UserRecipeList">유저들의 레시피</Nav.Link>
          </Nav>

          <Form className="d-flex">
            {/* 엔터 이벤트에서 새로고침 발생 
             => form에 input 하나만 존재해서 => 한개더 추가 후 안보이게*/}
            <input type="text" style={{display:"none"}}/>
            <InputGroup>
              <Form.Control
                aria-label="Text input with dropdown button"
                type="search"
                placeholder="레시피 검색"
                ref={inpRef}
                htmlSize={80} 
                onKeyPress={handleOnKeyPress}/>

              <DropdownButton
                variant="outline-secondary"
                title={dropdownTitle}
                id="dropdown-basic-button"
                align="end"
                onSelect={(eventKey) => handleSelectDropdown(eventKey)}>
                <Dropdown.Item eventKey='이름'>이름</Dropdown.Item>
                <Dropdown.Item eventKey='조리방식'>조리방식</Dropdown.Item>
                <Dropdown.Item eventKey='재료'>재료</Dropdown.Item>
                <Dropdown.Item eventKey='요리종류'>요리종류</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
            <Button style={{marginLeft: '8px'}} variant="outline-info" onClick={() => searchEvent()}>Search</Button>
          </Form>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header;