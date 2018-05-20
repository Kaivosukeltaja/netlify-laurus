import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const NavigationBar = styled.nav`
  display: flex;
  align-items: baseline;
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const NavigationItem = styled.div`
  color: #fff;
  padding: 1em;
  background-color: ${props => (props.active ? 'rgba(25,25,25,0.5)' : 'transparent')};
`;

const SiteLogo = styled.div`
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0 1em;
`;

const Navigation = props => (
  <NavigationBar>
    <Link to="/"><SiteLogo>Laurus</SiteLogo></Link>
    <Link to="/nuorisokuoro"><NavigationItem active={props.area === 'nuorisokuoro'}>Nuorisokuoro</NavigationItem></Link>
    <Link to="/kamarikuoro"><NavigationItem active={props.area === 'kamarikuoro'}>Kamarikuoro</NavigationItem></Link>
  </NavigationBar>
);

Navigation.propTypes = {
  area: PropTypes.string,
};

Navigation.defaultProps = {
  area: '',
};

export default Navigation;
