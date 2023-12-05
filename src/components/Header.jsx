import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { InputGroup } from 'react-bootstrap';

function Header() {
  const [dropdownTitle, setDropdownTitle] = useState('이름');

  //검색칸 옆의 드랍다운 버튼을 눌렀을 때 일어날 동작.
  const handleSelectDropdown = (eventKey) => {
    setDropdownTitle(eventKey);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>

        <Navbar.Brand href="/" style={{ display: 'flex' }}>
          <img src="free_icon_recipe_book.png" style={{ width: '30px', marginRight: '5px' }} alt='메인로고' />
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
            <Nav.Link href="#action2">레시피</Nav.Link>
            <Nav.Link href="#action3">키친가이드</Nav.Link>
            <Nav.Link href="/recipe/addUserRecipe">레시피등록</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                aria-label="Text input with dropdown button"
                type="search"
                placeholder="레시피 검색"
                htmlSize={80} />

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
            <Button style={{marginLeft: '8px'}} variant="outline-info">Search</Button>
          </Form>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header