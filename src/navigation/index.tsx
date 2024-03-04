import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { DetailsScreen } from '../screens/Details.screen';
import { SearchScreen } from '../screens/Search.screen';
import { Routes } from './routes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = React.memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Search} component={SearchScreen} />
      <Stack.Screen name={Routes.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
});
