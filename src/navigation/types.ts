import { NavigationProp } from '@react-navigation/core';

import { Routes } from './routes';

export type RootStackParamList = {
  [Routes.Search]: undefined;
  [Routes.Details]: { id: string | number };
};

export type RootStackProps = NavigationProp<RootStackParamList>;
