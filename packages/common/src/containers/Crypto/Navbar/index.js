import React, { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavbarWrapper from '../../../../../reusecore/src/elements/Navbar';
import Drawer from '../../../../../reusecore/src/elements/Drawer';
import Button from '../../../../../reusecore/src/elements/Button';
import Logo from '../../../../../reusecore/src/elements/UI/Logo';
import Box from '../../../../../reusecore/src/elements/Box';
import HamburgMenu from '../../../components/HamburgMenu';
import Container from '../../../components/UI/Container';
import { DrawerContext } from '../../../contexts/DrawerContext';
//import { NavLink } from 'react-router-dom';


//import { MENU_ITEMS } from '../../../data/Crypto';
import { MENU_ITEMS } from '../../../data/Saas';

import ScrollSpyMenu from '../../../components/ScrollSpyMenu';

import LogoImage from '../../../assets/image/saas/TokenProp_Logo.png';
import LogoImageAlt from '../../../assets/image/saas/TokenProp_Logo.png';

const Navbar = ({ navbarStyle, logoStyle, button, button2, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            <Link href="/developers">
              <a className="navbar_button">
                <Button {...button} title="GET STARTED" />
              </a>
            </Link>
            <Link href="/developers">
              <a className="navbar_button2">
                <Button {...button2} title="LOGIN" />
              </a>
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <Link href="#">
                <a className="navbar_drawer_button">
                  <Button {...button} title="GET STARTED" />
                </a>
              </Link>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  button2: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '30px',
    pr: '30px',
    ml: '30px',
    mr: '30px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
