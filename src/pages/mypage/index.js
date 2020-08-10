import React from 'react';
import {View, Text, Button} from 'react-native';

const MyPageIndex = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MyPage Screen</Text>

      <Button
        title="X"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
};

export default MyPageIndex;
