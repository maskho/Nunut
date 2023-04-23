import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../utils/slices/navSlice';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import tw from 'twrnc';
import {servicesData} from '../data/services';

const ServiceOptions = () => {
  const navigation = useNavigation<any>();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={servicesData}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}>
            <View style={tw`${!origin ? 'opacity-20' : ''}`}>
              <Image
                style={{width: 100, height: 100, resizeMode: 'contain'}}
                source={{uri: item.image}}
              />
              <Text style={tw`mt-2 text-base font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                type="ionicons"
                name="arrow-forward"
                color="white"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ServiceOptions;
