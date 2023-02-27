import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppTitle } from '../../model/common';
import Logo from '../../moviebox.svg';
import Container from '../container';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className='moviebox__header'>
      <Container alignItems='center'>
        <Link to={`/`} className='moviebox__logo'>
          <img alt='moviebox-logo' src={Logo} />
          <span className='moviebox__logo__title'>{AppTitle}</span>
        </Link>
        {pathname.includes('/movie') && (
          <nav className='moviebox__header__navigation'>
            <Link to={`/`} className='moviebox__header__link'>
              Home
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
