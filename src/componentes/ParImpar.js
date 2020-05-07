import React from 'react';
import {View, Text} from 'react-native';

import Padrao from '../estilo/Padrao';

export default ({route}) => {
  const {numero} = route.params;
  return (
    <View style={Padrao.container}>
      {numero % 2 == 0 ? (
        <Text style={Padrao.ex}>Par</Text>
      ) : (
        <Text style={Padrao.ex}>Impar</Text>
      )}
    </View>
  );
};
