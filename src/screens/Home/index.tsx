import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
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
  List,
  Footer,
} from './styles';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState<CarDTO[]>([]);

  const navigation = useNavigation();

  function handleOpenCar(_id: string) {
    navigation.navigate('car', { _id });
  }

  function handleNewCar() {
    navigation.navigate('car');
  }

  async function fetchCars() {
    setIsLoading(true);
    try {
      const response = await api.get(`/cars`);
      setCars(response.data);
    } catch (error) {
      console.log("Opa, ocorreu um erro: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  console.log("Array de carros: ", cars);

  useFocusEffect(
    useCallback(() => {
      fetchCars();
    }, []));

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
          <Quantity>{cars.length}</Quantity>
        </CarsQuantityWrapper>
        <List>
          {
            isLoading
              ? <Load />
              : (
                <FlatList
                  data={cars}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => (
                    <Card data={item} onPress={() => handleOpenCar(item._id)} />
                  )}
                />
              )
          }
        </List>
        <Footer>
          <NewButton onPress={handleNewCar} />
        </Footer>
      </Content>
    </Container >
  );
}
