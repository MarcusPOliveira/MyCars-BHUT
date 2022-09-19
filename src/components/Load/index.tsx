import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

export function Load() {

  const { colors } = useTheme();

  return (
    <ActivityIndicator size="large" color={colors.success} />
  );
}
