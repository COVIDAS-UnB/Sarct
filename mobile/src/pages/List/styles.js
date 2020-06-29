import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f2f5ff;
  width: 100%;
`;

export const ListContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: Comfortaa;
  margin: 30px 40px 10px auto;
  font-size: 30px;
  color: #0279db;
`;

export const Text = styled.Text`
  font-family: Comfortaa;
  margin: 10px 30px;
  font-size: 16px;
  text-align: justify;
`;

export const DispenserItem = styled.TouchableOpacity`
  padding: 15px;
  margin: 8px 20px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid;
  border-color: #cccccc;
`;

export const DispenserList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const DispenserDetails = styled.View`
  flex-direction: row;
`;

export const DispenserLeft = styled.View`
  padding-right: 16px;
`;

export const DispenserName = styled.Text`
  font-family: ComfortaaBold;
  font-size: 14px;
  margin: 0px auto 5px 0;
  color: #12243e;
`;

export const DispenserLocation = styled.Text`
  font-family: Comfortaa;
  font-size: 14px;
  margin: 0px auto 0 0;
`;

export const DispenserRight = styled.View`
  flex: 1;
`;

export const DispenserStatus = styled.Text`
  font-family: Comfortaa;
  font-size: 14px;
  margin: 0px auto 5px 0;
`;

export const DispenserEmpty = styled.Text`
  font-family: ComfortaaBold;
  font-size: 14px;
  color: #ea3e3d;
`;

export const DispenserFull = styled.Text`
  font-family: ComfortaaBold;
  font-size: 14px;
  color: #08b62f;
`;

export const DispenserLocationDetails = styled.Text`
  font-family: ComfortaaBold;
  font-size: 14px;
  margin: 0px auto 0 0;
  color: #12243e;
`;

export const FilterDetails = styled.View`
  padding-left: 10px;
  margin: 15px 20px;
  width: 100%;
  flex-direction: row;
`;

export const FilterText = styled.Text`
  font-family: Comfortaa;
  font-size: 16px;
  margin: 0px auto 0 0;
`;

export const FilterOptions = styled.View`
  flex: 1;
  margin: 0 120px 0 10px;
  border-bottom-width: 1px;
  border-color: #000000;
`;
