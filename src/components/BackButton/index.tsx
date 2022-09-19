import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Button
} from './styles';

type Props = TouchableOpacityProps & {}

export function BackButton({ ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Button {...rest}>
      <FontAwesome5 name="chevron-left" size={24} color={colors.white} />
    </Button>
  );
}
