import React from 'react';

import {
  Container,
  DispenserContainer,
  Title,
  DispenserItem,
  DispenserDetails,
  DispenserLocation,
  DispenserLeft,
  DispenserRight,
  DispenserStatus,
  DispenserEmpty,
  DispenserFull,
  DispenserLocationDetails,
  CoverImage,
} from './styles';
import location from '~/assets/images/terreoFtCorte.png';

export default function List() {
  return (
    <Container>
      <DispenserContainer>
        <CoverImage source={location}/>

        <Title>B11</Title>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
            <DispenserStatus>Estado atual:</DispenserStatus>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserEmpty>VAZIO</DispenserEmpty>
              <DispenserLocationDetails>Ao lado esquerdo do Anfiteatro 11</DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>

      </DispenserContainer>
    </Container>
  );
}
