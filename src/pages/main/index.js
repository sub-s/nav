import React from 'react';
import {View, Text, Button} from 'react-native';

const MainIndex = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  )
};

export default MainIndex;
