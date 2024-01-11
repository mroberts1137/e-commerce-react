import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Search from './Search';
import LoginModal from './LoginModal';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);

  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand href='/' className='ms-5'>
        <img src='' alt='logo' className='float-start' />
        <h1 className='mt-1 me-5'>E-Commerce</h1>
      </NavbarBrand>

      <Search />

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/products'>
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              Contact
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink className="nav-link" to="/login">
              <i className="fa fa-right-to-bracket fa-lg" /> Login
            </NavLink>
          </NavItem> */}

          <LoginModal />

          <NavItem>
            <NavLink className='nav-link' to='/cart'>
              <i className='fa fa-cart-shopping fa-lg' /> Cart
              <div className='nav-cart-count'>0</div>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
