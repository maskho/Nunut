import {View, Text, SafeAreaView} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import tw from 'twrnc';
import {Icon, Input} from '@rneui/themed';

const CreateChatScreen = ({navigation}: any) => {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Create a new chat',
      headerBackTitle: 'Chats',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Input
        leftIcon={
          <Icon name="message-circle" type="feather" color="black" size={24} />
        }
        placeholder="Cari kotak pesan"
        value={input}
        onChangeText={text => setInput(text)}
        onSubmitEditing={() => {}}
      />
    </SafeAreaView>
  );
};

export default CreateChatScreen;
