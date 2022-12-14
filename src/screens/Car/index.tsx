import React, { useState, useEffect } from 'react';
import { Alert, ToastAndroid, TouchableOpacityProps } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import carImg from '../../assets/car.png';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {
  Container,
  Header,
  RowGroup,
  DeleteButton,
  DeleteLabel,
  ImageWrapper,
  Content,
  CarImage,
  Subtitle,
  Wrapper,
  InputLabel,
  InputGroup,
  Footer,
} from './styles';

type RouteParams = {
  _id: string;
}

type Props = TouchableOpacityProps & {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { _id } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleAddNewCar() {
    if (!title || !brand || !age || !price) {
      Alert.alert('Opa!', 'Todas as informações devem ser preenchidas!');
    } else {
      setIsLoading(true);
      try {
        await api.post('/cars', {
          id: new Date().toString(),
          title,
          brand,
          age: parseInt(age),
          price
        }).then((response) => {
          console.log(response.data);
          Alert.alert('Parabéns!', 'Seu carro foi cadastrado com sucesso!');
          navigation.navigate('home');
        }).catch((error) => {
          Alert.alert('Opa!', 'Algo deu errado!');
          console.log("Erro: ", error);
        })
      } catch (error) {
        Alert.alert('Opa!', 'Algo deu errado!');
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
  }

  async function handleUpdateCar() {
    setIsLoading(true);
    try {
      await api.put(`/cars/${_id}`, {
        title,
        brand,
        age,
        price
      }).then((response) => {
        if (response.status === 200) {
          console.log(response.status);
          Alert.alert('Parabéns!', 'Dados alterados com sucesso!');
          navigation.navigate('home');
        }
      })
    } catch (error) {
      console.log(error);
      Alert.alert('Opa!', 'Erro ao atualizar carro!');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteCar() {
    setIsLoading(true);
    try {
      await api.delete(`/cars/${_id}`)
        .then((response) => {
          console.log("Carro deletado: ", response.data);
          Alert.alert('Parabéns!', 'Seu carro foi deletado com sucesso!');
          navigation.navigate('home');
        }).catch((error) => {
          console.log(error);
          Alert.alert('Opaa!', 'Erro ao deletar carro!');
        })
    } catch (error) {
      console.log(error);
      Alert.alert('Opa!', 'Erro ao deletar carro!');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchSelectedCar() {
      try {
        if (_id) {
          console.log('Id do carro: ', _id)
          const response = await api.get(`/cars/${_id}`);
          const car = response.data as CarDTO;
          setTitle(car.title);
          setBrand(car.brand);
          setAge(car.age.toString());
          setPrice(car.price.toString());
          ToastAndroid.show('Carro selecionado', ToastAndroid.LONG);
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Opa!', 'Algo deu errado!');
      }
    }
    fetchSelectedCar();
  }, []);

  return (
    <Container>
      <Header>
        <RowGroup>
          <BackButton onPress={handleGoBack} />
          <DeleteButton
            onPress={handleDeleteCar}
            {...rest}
          >
            {
              isLoading
                ? <Load />
                : <DeleteLabel>
                  Deletar
                </DeleteLabel>
            }
          </DeleteButton>
        </RowGroup>
        <ImageWrapper>
          <CarImage source={carImg} />
        </ImageWrapper>
      </Header>
      <Content>
        <Wrapper>
          <Subtitle>
            {
              _id ? "Editar dados do carro" : "Sobre o carro"
            }
          </Subtitle>
          <InputLabel>Modelo</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='car-side'
            placeholder='Digite o modelo do veículo...'
            autoCapitalize='words'
            value={title}
            onChangeText={setTitle}
          />
        </InputGroup>
        <Wrapper>
          <InputLabel>Marca</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='bimobject'
            placeholder='Digite a marca do veículo...'
            autoCapitalize='words'
            value={brand}
            onChangeText={setBrand}
          />
        </InputGroup>
        <Wrapper>
          <InputLabel>Ano</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='calendar'
            placeholder='Digite o ano do veículo...'
            keyboardType='number-pad'
            value={age}
            onChangeText={setAge}
          />
        </InputGroup>
        <Wrapper>
          <InputLabel>Preço</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='dollar-sign'
            placeholder='R$0000,00'
            keyboardType='numeric'
            value={price}
            mask="price"
            inputMaskChange={(text: string) => setPrice(text)}
          />
        </InputGroup>
        <Footer>
          <Button
            title={_id ? "Salvar Alterações" : "Cadastrar"}
            isLoading={isLoading}
            onPress={_id ? handleUpdateCar : handleAddNewCar}
          />
        </Footer>
      </Content>
    </Container>
  );
}
