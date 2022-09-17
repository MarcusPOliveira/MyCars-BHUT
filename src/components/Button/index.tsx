import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Load } from '../Load';
import {
  Container,
  Label
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading: boolean;
}

export function Button({ title, isLoading, ...rest }: Props) {
  return (
    <Container {...rest}>
      {
        isLoading
          ? <Load />
          : <Label> {title} </Label>
      }
    </Container>
  );
}
