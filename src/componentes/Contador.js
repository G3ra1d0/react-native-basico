import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import Padrao from '../estilo/Padrao';

export default ({route}) => {
  const [numero, setNumero] = useState(route.params.numero);

  return (
    <View style={Padrao.container}>
      <Text style={{fontSize: 40}}>{numero}</Text>
      <TouchableHighlight
        onPress={() => setNumero(numero + 1)}
        onLongPress={() => setNumero(0)}>
        <Text style={Padrao.ex}>Incrementar/Zerar</Text>
      </TouchableHighlight>
    </View>
  );
};
