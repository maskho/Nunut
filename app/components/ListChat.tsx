import {View, Text} from 'react-native';
import React from 'react';
import {Avatar, ListItem} from '@rneui/themed';
import tw from 'twrnc';

const ListChat = ({id, chatName, enterChat}: any) => {
  return (
    <ListItem>
      <Avatar rounded source={require('./../assets/images/default-pp.jpeg')} />
      <ListItem.Content>
        <ListItem.Title style={tw`text-lg`}>John Doe</ListItem.Title>
        <ListItem.Subtitle
          style={tw`text-xs`}
          numberOfLines={1}
          ellipsizeMode="tail">
          Hey there! Requested but did not find extension point with identifier
          Xcode
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ListChat;
