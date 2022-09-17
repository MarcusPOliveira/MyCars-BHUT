import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import carImg from '../../assets/car.png';
import { CarDTO } from '../../dtos/CarDTO';
import {
  Container,
  ImageWrapper,
  Image,
  ButtonContent,
  VehicleName,
  VehicleBrand,
} from './styles';

type Props = TouchableOpacityProps & {
  data: CarDTO;
}

export function Card({ data, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      <ButtonContent {...rest}>
        <VehicleName>{data.title}</VehicleName>
        <VehicleBrand>{data.brand}</VehicleBrand>
        <FontAwesome5 name='chevron-down' size={20} color={colors.white} />
      </ButtonContent>
      <ImageWrapper>
        <Image
          source={carImg}
          resizeMode="contain"
        />
      </ImageWrapper>
    </Container>
  );
}
