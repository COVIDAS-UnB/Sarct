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
  margin: 50px 20px 10px auto;
  font-size: 30px;
  color: #0279db;
`;

export const Text = styled.Text`
  margin: 10px 22px;
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
  font-size: 14px;
  margin: 0px auto 5px 0;
`;

export const DispenserLocation = styled.Text`
  font-size: 14px;
  margin: 0px auto 0 0;
`;

export const DispenserRight = styled.View`
  flex: 1;
`;

export const DispenserStatus = styled.Text`
  font-size: 14px;
  margin: 0px auto 5px 0;
`;

export const DispenserEmpty = styled.Text`
  font-size: 14px;
  color: #ff0000;
`;

export const DispenserFull = styled.Text`
  font-size: 14px;
  color: #00ff00;
`;

export const DispenserLocationDetails = styled.Text`
  font-size: 14px;
  margin: 0px auto 0 0;
`;

export const FilterDetails = styled.View`
  padding-left: 10px;
  margin: 15px 20px;
  flex-direction: row;
`;

export const FilterText = styled.Text`
  font-size: 16px;
  margin: 0px auto 0 0;
`;

export const FilterOptions = styled.View`
  flex: 1;
  margin: 0 120px 0 10px;
  border-bottom-width: 1px;
  border-color: #000000;
`;
