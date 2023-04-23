import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {Icon} from '@rneui/themed';
import Map from '../components/Map';
import DestinationCard from '../components/DestinationCard';
import RiderOptionsCard from '../components/RiderOptionsCard';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation<any>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SettingsScreen')}
        style={tw`bg-gray-100 absolute z-50 p-3 rounded-full shadow-lg top-15 right-8`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="DestinationCard"
            component={DestinationCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RiderOptionsCard"
            component={RiderOptionsCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
