import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function NavBar() {
  return (
    <Container>
      <div>
        <Link to="/list">Ver pontos</Link>
        <Link to="/map">Ver mapa</Link>
        <Link to="/NewPoint">Criar novo ponto</Link>
      </div>
    </Container>
  );
}

export default NavBar;
