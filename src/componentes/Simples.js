import React from 'react';
import {View, Text} from 'react-native';

import Padrao from '../estilo/Padrao';

export default ({route}) => {
  const {texto} = route.params;
  return (
    <View style={Padrao.container}>
      <Text style={Padrao.ex}>{texto}</Text>
    </View>
  );
};
