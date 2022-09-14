import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Button
} from './styles';

export function BackButton() {

  const { colors } = useTheme();

  return (
    <Button>
      <FontAwesome5 name="chevron-left" size={24} color={colors.white} />
    </Button>
  );
}
