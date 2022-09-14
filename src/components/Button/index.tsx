import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Label
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Label> {title} </Label>
    </Container>
  );
}
