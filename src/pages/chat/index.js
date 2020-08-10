import React from 'react';
import {View, Text, Button} from 'react-native';

const ChatIndex = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Chat Item Screen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('MyPageIndex')}
      />
      <Button
        title="ChatDetails"
        onPress={() => navigation.navigate('ChatDetails')}
      />


    </View>
  )
};

export default ChatIndex;
