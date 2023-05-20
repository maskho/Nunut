import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {favoritesData} from '../data/favorites';
import tw from 'twrnc';
import {Icon} from '@rneui/themed';
import styles from '../constants/styles';

const NavFavorites = () => {
  return (
    <FlatList
      data={favoritesData}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]} />
      )}
      renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity
          style={[
            tw`flex-row items-center bg-green-500 border-2 rounded-md mt-2 p-4`,
            styles.shadow,
          ]}>
          <Icon
            style={tw`mr-4 rounded-full bg-black p-3`}
            name={icon}
            type="feather"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
