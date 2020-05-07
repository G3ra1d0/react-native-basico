import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Simples">
        <Drawer.Screen
          name="Simples"
          component={Simples}
          initialParams={{texto: 'Hello Word!'}}
        />
        <Drawer.Screen
          name="ParImpar"
          component={ParImpar}
          initialParams={{numero: 32}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
