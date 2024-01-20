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
import LoginModal from './LoginModal';
import './Header.css';
import logo from '../app/assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);

  return (
    <Navbar dark sticky='top' expand='md' className='navbar'>
      <NavbarBrand href='/' className='ms-1'>
        <img src={logo} alt='logo' className='float-start nav-logo' />
        <h1 className='mt-1 nav-title'>One Stop Shop</h1>
      </NavbarBrand>

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
