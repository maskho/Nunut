import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {Icon} from '@rneui/themed';
import Map from '../components/Map';
import DestinationCard from '../components/DestinationCard';
import RiderOptionsCard from '../components/RiderOptionsCard';
import styles from '../constants/styles';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation<any>();

  return (
    <View>
      <View style={tw`h-3/5`}>
        <Map />
      </View>
      <View style={tw`h-2/5 border-t-4`}>
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
