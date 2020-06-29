import React, { useState } from 'react';
import { Picker } from 'react-native';

import {
  Container,
  ListContainer,
  Title,
  Text,
  DispenserItem,
  DispenserList,
  DispenserDetails,
  DispenserName,
  DispenserLocation,
  DispenserLeft,
  DispenserRight,
  DispenserStatus,
  DispenserEmpty,
  DispenserFull,
  DispenserLocationDetails,
  FilterDetails,
  FilterText,
  FilterOptions,
} from './styles';

export default function List() {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <Container>
      <ListContainer>
        <Title>AquiGel</Title>
        <Text>
          Aqui, você pode ver todos os dispenser registrados ou filtra-los de
          acordo com a sua área de atuação.
        </Text>

        <FilterDetails>
          <FilterText>Filtrar por:</FilterText>
          <FilterOptions>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 28 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Todos" value="all" />
              <Picker.Item label="ICC Sul" value="iccs" />
              <Picker.Item label="ICC Centro" value="iccc" />
              <Picker.Item label="ICC Norte" value="iccn" />
            </Picker>
          </FilterOptions>
        </FilterDetails>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
              <DispenserName>B11</DispenserName>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserStatus>
                Estado atual: <DispenserFull>CHEIO</DispenserFull>
              </DispenserStatus>
              <DispenserLocationDetails>
                Ao lado esquerdo do Anfiteatro 11
              </DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
              <DispenserName>B12</DispenserName>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserStatus>
                Estado atual: <DispenserFull>CHEIO</DispenserFull>
              </DispenserStatus>
              <DispenserLocationDetails>
                Ao lado esquerdo do Anfiteatro 12
              </DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
              <DispenserName>B13</DispenserName>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserStatus>
                Estado atual: <DispenserEmpty>VAZIO</DispenserEmpty>
              </DispenserStatus>
              <DispenserLocationDetails>
                Ao lado esquerdo do Anfiteatro 13
              </DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
              <DispenserName>B14</DispenserName>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserStatus>
                Estado atual: <DispenserEmpty>VAZIO</DispenserEmpty>
              </DispenserStatus>
              <DispenserLocationDetails>
                Ao lado esquerdo do Anfiteatro 14
              </DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
              <DispenserName>B15</DispenserName>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserStatus>
                Estado atual: <DispenserEmpty>VAZIO</DispenserEmpty>
              </DispenserStatus>
              <DispenserLocationDetails>
                Ao lado esquerdo do Anfiteatro 15
              </DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
              <DispenserName>B15</DispenserName>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserStatus>
                Estado atual: <DispenserEmpty>VAZIO</DispenserEmpty>
              </DispenserStatus>
              <DispenserLocationDetails>
                Ao lado esquerdo do Anfiteatro 15
              </DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>

        <DispenserItem>
          <DispenserDetails>
            <DispenserLeft>
              <DispenserName>B15</DispenserName>
              <DispenserLocation>Localização:</DispenserLocation>
            </DispenserLeft>
            <DispenserRight>
              <DispenserStatus>
                Estado atual: <DispenserEmpty>VAZIO</DispenserEmpty>
              </DispenserStatus>
              <DispenserLocationDetails>
                Ao lado esquerdo do Anfiteatro 15
              </DispenserLocationDetails>
            </DispenserRight>
          </DispenserDetails>
        </DispenserItem>
      </ListContainer>
    </Container>
  );
}
