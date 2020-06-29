import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Alert } from 'react-native';

import {
  Container,
  SubTitle,
  Title,
  ScannerContainer,
  ScanButton,
  ScanButtonText,
  ScannerFrame,
  Info,
} from './styles';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  async function requestPermissions() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  useEffect(() => {
    requestPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('Reabastecimento Confirmado!', 'Obrigado por ajudar');
  };

  if (hasPermission === null) {
    return (
      <Container style={{ justifyContent: 'center' }}>
        <Info>Requisitando permissão para usar a câmera!</Info>
        <ActivityIndicator size="large" color="#0279DB" />
      </Container>
    );
  }
  if (hasPermission === false) {
    return (
      <Container style={{ justifyContent: 'center' }}>
        <Info>Sem acesso à câmera</Info>
        <ScanButton style={{ margin: 0 }} onPress={requestPermissions}>
          <ScanButtonText>Permitir uso</ScanButtonText>
        </ScanButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Confirmar Abastecimento</Title>
      <SubTitle>
        Para confirmar o reabastecimento do dispenser, aponte a câmera para o qr
        code
      </SubTitle>
      <ScannerContainer>
        <BarCodeScanner
          barCodeTypes={['qr']}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <ScannerFrame />
        {scanned && (
          <ScanButton onPress={() => setScanned(false)}>
            <ScanButtonText>Ler Qrcode novamente</ScanButtonText>
          </ScanButton>
        )}
      </ScannerContainer>
    </Container>
  );
};

export default Scanner;
