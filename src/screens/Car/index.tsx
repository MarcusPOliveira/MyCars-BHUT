import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import carImg from '../../assets/car.png';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
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
        <Subtitle>Sobre o carro</Subtitle>
        <Button title="Cadastrar" />
      </Content>
    </Container>
  );
}
