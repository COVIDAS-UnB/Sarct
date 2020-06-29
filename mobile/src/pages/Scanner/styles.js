import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f2f5ff;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ComfortaaBold;
  font-size: 24px;
  color: #12243e;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: Comfortaa;
  font-size: 14px;
  color: #999999;
  padding: 0 10px;
  text-align: center;
`;

export const Info = styled.Text`
  font-family: Comfortaa;
  font-size: 18px;
  color: #12243e;
  padding: 0 10px;
  margin: 10px;
  text-align: center;
`;

export const ScannerContainer = styled.View`
  height: 470px;
  width: 100%;
  justify-content: center;
  border-color: transparent;
`;

export const ScannerFrame = styled.View`
  height: 100%;
  width: 100%;
  background: transparent;
  position: absolute;
  border-top-width: 100px;
  border-bottom-width: 100px;
  border-left-width: 50px;
  border-right-width: 50px;
  border-color: rgba(0, 0, 0, 0.3);
`;

export const ScanButton = styled.TouchableOpacity`
  align-self: center;
  background: #0279db;
  padding: 6px 20px;
  border-radius: 4px;
`;

export const ScanButtonText = styled.Text`
  color: #f2f5ff;
  font-family: Comfortaa;
`;
