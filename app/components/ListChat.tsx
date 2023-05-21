import {View, Text} from 'react-native';
import React from 'react';
import {Avatar, ListItem} from '@rneui/themed';
import tw from 'twrnc';

const ListChat = ({id, chatName, enterChat}: any) => {
  return (
    <ListItem
      onPress={() => enterChat(id, chatName)}
      key={id}
      style={tw`border-b`}>
      <Avatar rounded source={require('./../assets/images/default-pp.jpeg')} />
      <ListItem.Content>
        <View style={tw`flex-1`}>
          <View style={tw`flex-row justify-between items-center`}>
            <ListItem.Title style={tw`text-lg`}>John Doe</ListItem.Title>
            <Text style={tw`text-xs text-gray-500`}>12:34 PM</Text>
          </View>
          <ListItem.Subtitle
            style={tw`text-xs`}
            numberOfLines={1}
            ellipsizeMode="tail">
            Hey there! Requested but did not find extension point with
            identifier Xcode
          </ListItem.Subtitle>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

export default ListChat;
