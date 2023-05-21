import {SafeAreaView, ScrollView} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import ListChat from '../components/ListChat';

const ChatBoxScreen = ({navigation}: any) => {
  const [chats, setChats] = useState([]);

  const enterChat = (id: any, chatName: any) => {
    navigation.navigate('ChatScreen', {id, chatName});
  };
  return (
    <SafeAreaView style={tw`h-full bg-amber-100`}>
      <ScrollView>
      <ListChat key={'1'} id={'1'} chatName={'Bambang'} enterChat={enterChat} />
      <ListChat key={'2'} id={'3'} chatName={'Bambang'} enterChat={enterChat} />
        {
          chats.map(({id, data}: any) => (
            <ListChat key={id} id={id} chatName={data} enterChat={enterChat} />

          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatBoxScreen;
