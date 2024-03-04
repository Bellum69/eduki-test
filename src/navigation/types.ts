import { NavigationProp } from '@react-navigation/core';

import { ResponseItem } from '../types';
import { Routes } from './routes';

export type RootStackParamList = {
  [Routes.Search]: undefined;
  [Routes.Details]: { item: ResponseItem };
};

export type RootStackProps = NavigationProp<RootStackParamList>;
