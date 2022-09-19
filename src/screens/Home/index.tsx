import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { Card } from '../../components/Card';
import { NewButton } from '../../components/NewButton';
import { Search } from '../../components/Search';
import {
  Container,
  Header,
  Title,
  Content,
  CarsQuantityWrapper,
  Subtitle,
  Quantity,
  FilterArea,
  List,
  Footer,
} from './styles';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const navigation = useNavigation();

  function handleOpenCar(_id: string) {
    navigation.navigate('car', { _id });
  }

  function handleNewCar(_id?: string) {
    const route = _id ? '' : ''; //'zerando' id ao clicar para criar novo carro
    navigation.navigate('car', { route });
  }

  async function fetchCars() {
    setIsLoading(true);
    try {
      const response = await api.get(`/cars/`);
      setCars(response.data);
      console.log(cars)
    } catch (error) {
      console.log("Opa, ocorreu um erro: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  //console.log("Array de carros: ", cars);

  function handleClearSearch() {
    setSearch('');
    fetchCars();
  }

  async function handleSearchByName() {
    setIsSearching(true);
    try {
      const filtered = cars.filter(value => value.title.includes(search));
      console.log("Veículo digitado: ", filtered);
      setCars(filtered);
    } catch (error) {
      console.log(error);
      Alert.alert('Opa!', 'Ocorreu um erro ao filtrar!');
    } finally {
      setIsSearching(false);
    }
  }

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
        <FilterArea>
          <Search
            onClear={handleClearSearch}
            onSearch={handleSearchByName}
            onChangeText={setSearch}
            value={search}
          />
        </FilterArea>
        {
          isSearching
            ? <Card data={cars} />
            : (
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
            )
        }
        <Footer>
          <NewButton onPress={() => handleNewCar()} />
        </Footer>
      </Content>
    </Container >
  );
}
