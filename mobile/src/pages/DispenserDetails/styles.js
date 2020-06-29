import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f2f5ff;
  width: 100%;
`;

export const DispenserContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 100px 20px 0;
`;

export const CoverImage = styled.Image`
  width: 100%;
  height: 260px;
  border: 6px solid #0279db;
  border-radius: 50px;
  background: #ffffff;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ComfortaaBold;
  text-align: center;
`;

export const DispenserItem = styled.TouchableOpacity`
  padding: 15px;
  margin-top: 20px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid;
  border-color: #cccccc;
`;

export const DispenserDetails = styled.View`
  flex-direction: row;
`;

export const DispenserLeft = styled.View`
  padding-right: 16px;
`;

export const DispenserLocation = styled.Text`
  font-size: 14px;
  margin: 0px auto 0 0;
  font-family: Comfortaa;
`;

export const DispenserRight = styled.View`
  flex: 1;
`;

export const DispenserStatus = styled.Text`
  font-size: 14px;
  margin: 0px auto 5px 0;
  font-family: Comfortaa;
`;

export const DispenserEmpty = styled.Text`
  font-size: 14px;
  color: #ff0000;
  font-family: ComfortaaBold;
`;

export const DispenserFull = styled.Text`
  font-size: 14px;
  color: #00ff00;
  font-family: ComfortaaBold;
`;

export const DispenserLocationDetails = styled.Text`
  font-size: 14px;
  margin: 0px auto 0 0;
  font-family: ComfortaaBold;
`;

