import React from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Card } from '../../components/Card';
import { NewButton } from '../../components/NewButton';
import {
  Container,
  Header,
  Title,
  Content,
  CarsQuantityWrapper,
  Subtitle,
  Quantity,
  Footer,
} from './styles';

export function Home() {

  const navigation = useNavigation();

  function handleOpenCar() {
    navigation.navigate('car');
  }

  return (
    <Container>
      <Header>
        <Title>
          Bem-vindo ao{'\n'}MyCars
        </Title>
      </Header>
      <Content>
        <CarsQuantityWrapper>
          <Subtitle>Seus carros</Subtitle>
          <Quantity>10</Quantity>
        </CarsQuantityWrapper>
        <View style={{ alignItems: 'center', }} >
          <Card onPress={handleOpenCar} />
        </View>
      </Content>
      <Footer>

      </Footer>
    </Container>
  );
}
