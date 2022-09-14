import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText
} from './styles';

type Props = TextInputProps & {
  iconName?: React.ComponentProps<typeof FontAwesome5>['name'];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { colors } = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused} >
        <FontAwesome5
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? colors.primary : colors.primary}
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </Container>
  );
}
