import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  Content,
  VehicleName,
  VehicleBrand,
  RowGroup,
  Label,
  Price,
  ExpandCard
} from './styles';

type Props = TouchableOpacityProps & {

}

export function Card({ ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      <Content>
        <VehicleName>Fusca</VehicleName>
        <VehicleBrand>Volkswagem</VehicleBrand>
        <RowGroup>
          <Label>Ano </Label>
          <Label>1980</Label>
        </RowGroup>
        <RowGroup>
          <Label>Preço: </Label>
          <Price>R$15.000,00</Price>
        </RowGroup>
      </Content>
      <ExpandCard {...rest}>
        <FontAwesome5 name="chevron-right" size={24} color={colors.white} />
      </ExpandCard>
    </Container>
  );
}
