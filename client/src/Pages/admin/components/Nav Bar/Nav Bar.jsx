import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import "./Nav Bar.css";
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import Links from './Links/Links';

//npm install react-bootstrap-dropdown-menu
//npm install react-bootstrap-form
//npm install react-bootstrap-button

const NavBar = ({ Tabs, children, setTabClassName }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  const { userInfo } = useSelector((state) => state.auth);


  useEffect(() => {
    // Find the active tab based on the current location
    const foundTab = Tabs.find(tab => {
      if (Array.isArray(tab)) {
        return tab.slice(1).includes(location.pathname.slice(1));
      } else {
        return tab.toLowerCase() === location.pathname.slice(1).toLowerCase();
      }
    });
    setActiveTab(foundTab);
    // console.log(foundTab);
    // setTabClassName(foundTab);
  }, [Tabs, location.pathname, setTabClassName]);

  const renderTabs = (tabs) => {
    return tabs.map((tab, index) => {
      if (Array.isArray(tab)) {
        const dropdownTitle = tab[0];
        const dropdownItems = tab.slice(1);
        return (
          <NavDropdown key={`dropdown-${index}`} title={dropdownTitle} id={`dropdown-${index}`}>
            {dropdownItems.map((item, idx) => (
              <NavDropdown.Item 
              className={activeTab === tab ? 'navBar-tab-active' : ''}
              eventKey={idx} key={idx} as={Link} to={`${item}`}>
                {item}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link key={tab} as={Link} to={tab} className={activeTab === tab ? 'navBar-tab-active' : 'navBar-tab'}>
            {tab}
          </Nav.Link>
        );
      }
    });
  };
  

  return (
    <header className='navBarSudo'>
      <Navbar className='navBar' bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container className="navBar-1">
          <Navbar.Brand to="/">
            {children}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {renderTabs(Tabs)}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className='navBar-2'>
          <Nav className='navBar-2i'>
              <NavDropdown title={userInfo.name} id='username'>
                <NavDropdown.Item as={Link} to='/profile' className="text-black">
                  Profile
                  </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Container>
        <Container className='navBar-3 mt-2'>
          <Navbar.Collapse>
          {userInfo ? <Navbar.Text>Signed in as: <span style={{ color: 'orange' }}>{userInfo.name}</span></Navbar.Text> : <Navbar.Text><Link to="/login">Login</Link></Navbar.Text>}{/* Dev: add toggle login mutator */}
          </Navbar.Collapse>
        </Container>
        <Navbar.Collapse className='links-container'>
          {/* <Links /> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};


NavBar.propTypes = {
  Tabs: PropTypes.array.isRequired,
  gap: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  listStyleType: PropTypes.string,
  textDecoration: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  hover: PropTypes.string,
  children: PropTypes.node.isRequired,
  setTabClassName: PropTypes.func.isRequired
};

export default NavBar;
