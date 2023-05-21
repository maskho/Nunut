import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {Avatar, Icon} from '@rneui/themed';
import tw from 'twrnc';
import styles from '../constants/styles';

const ChatScreen = ({navigation, route}: any) => {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={tw`flex flex-row items-center`}>
          <Avatar
            rounded
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
          />
          <Text style={tw`ml-2 text-black`}>{route.params.chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="chevron-left" type="feather" color="black" size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={tw`flex flex-row`}>
          <Icon name="phone" type="feather" color="black" size={24} />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={tw`flex-1 bg-amber-100`}>
        <ScrollView>
         <View
            style={[tw`flex-col p-2 bg-yellow-300 self-start rounded-md my-2 mt-2 ml-4 max-w-4/5 relative border-2`,styles.shadow]}>
           <Text style={tw`ml-2 text-green-700 text-xs font-bold`}>
            Bambang Pacul
            </Text>
            <Text style={tw`mx-2 text-black`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod quos
              </Text>
          </View>
          <View
            style={[tw` flex-col p-2 bg-green-300 self-end rounded-md my-2 mr-4 mt-2 max-w-4/5 relative border-2`,styles.shadow]}>
            <Text style={tw`mx-2 text-black`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam elit. Quisquam awakw
              </Text>
            
          </View>
        </ScrollView>
        <View
          style={tw`flex flex-row items-center justify-between p-4 absolute bottom-4`}>
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            style={tw`flex-1 h-11 bg-white border-2 rounded-md px-4`}
          />
          <TouchableOpacity
            // onPress={() => navigation.navigate('SettingsScreen')}
            style={[tw`rounded-md ml-2`, styles.shadow]}>
            <Icon
              name="send"
              type="feather"
              color="black"
              size={24}
              style={tw`p-2 bg-cyan-500 rounded-md w-12 border-2`}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ChatScreen;
