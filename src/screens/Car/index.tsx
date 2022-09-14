import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import carImg from '../../assets/car.png';
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

type Props = TouchableOpacityProps & {

}

export function Car({ ...rest }: Props) {
  return (
    <Container>
      <Header>
        <RowGroup>
          <BackButton />
          <DeleteButton {...rest}>
            <DeleteLabel>
              Deletar
            </DeleteLabel>
          </DeleteButton>
        </RowGroup>
        <ImageWrapper>
          <CarImage source={carImg} />
        </ImageWrapper>
      </Header>
      <Content>
        <Wrapper>
          <Subtitle>Sobre o carro</Subtitle>
          <InputLabel>Modelo</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='car-side'
            placeholder='Digite o modelo do veículo...'
          />
        </InputGroup>
        <Wrapper>
          <InputLabel>Marca</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='bimobject'
            placeholder='Digite a marca do veículo...'
          />
        </InputGroup>
        <Wrapper>
          <InputLabel>Ano</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='calendar'
            placeholder='Digite o ano do veículo...'
          />
        </InputGroup>
        <Wrapper>
          <InputLabel>Preço</InputLabel>
        </Wrapper>
        <InputGroup>
          <Input
            iconName='dollar-sign'
            placeholder='Digite o valor do veículo...'
          />
        </InputGroup>
        <Footer>
          <Button title="Cadastrar" />
        </Footer>
      </Content>
    </Container>
  );
}
