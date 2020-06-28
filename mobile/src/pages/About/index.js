import React from 'react';

import { Container, Inform, Title, Text, Developers, Name } from './styles';

const About = () => {
  return (
    <Container>
      <Inform>
        <Title>Sobre o AquiGel</Title>
        <Text>
          {' '}
          O AquiGel é uma solução voltada para auxiliar a reposição de alcool em
          gel nos{' '}
        </Text>
      </Inform>

      <Inform>
        <Title>Como usar?</Title>
        <Text>
          {' '}
          Na aba mapas existe um mapa com marcações dos lugares onde está
          disponível o álcool em gel e seu codigo. Na aba lista, são listados
          todos os reservatorios e quais estão precisando ser reabastecidos,
          caso o reservatori oesteja vazio, basta ver seu código e olhar no mapa
          a localização para reabastece-lo
        </Text>
      </Inform>

      <Inform>
        <Title>Quem somos?</Title>
        <Text>
          {' '}
          Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando
          Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando
          Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando
          Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando
          Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando Sarrando
          Sarrando Sarrando Sarrando Sarrando Sarrando{' '}
        </Text>
      </Inform>

      <Developers>
        <Name>Israel</Name>
        <Name>João Victor</Name>
        <Name>Matheus Santos</Name>
        <Name>Richard Junio</Name>
        <Name>Robson Ramon</Name>
      </Developers>
    </Container>
  );
};

export default About;
