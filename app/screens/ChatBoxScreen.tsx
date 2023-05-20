import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ListChat from '../components/ListChat';

const ChatBoxScreen = () => {
  return (
    <SafeAreaView style={tw`h-full bg-amber-100`}>
      <ScrollView>
        <ListChat />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatBoxScreen;
