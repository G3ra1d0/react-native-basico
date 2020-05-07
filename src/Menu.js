import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Cont from './componentes/Contador';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Contador"
          component={Cont}
          initialParams={{numero: 0}}
        />
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
