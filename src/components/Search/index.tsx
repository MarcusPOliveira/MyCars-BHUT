import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  InputArea,
  Input,
  ButtonClear,
  Button
} from './styles';

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
}

export function Search({ onSearch, onClear, ...rest }: Props) {

  const theme = useTheme();

  return (
    <Container>
      <InputArea>
        <Input
          placeholder='Nome do veículo...'
          {...rest}
        />
        <ButtonClear onPress={onClear}>
          <Feather name='x' size={16} color={theme.colors.text} />
        </ButtonClear>
      </InputArea>
      <Button onPress={onSearch}>
        <Feather name='search' size={16} color={theme.colors.white} />
      </Button>
    </Container>
  );
}
