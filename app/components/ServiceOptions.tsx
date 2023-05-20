import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../utils/slices/navSlice';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import tw from 'twrnc';
import {servicesData} from '../data/services';
import styles from '../constants/styles';

const ServiceOptions = () => {
  const navigation = useNavigation<any>();
  const origin = useSelector(selectOrigin);

  return (
    <>
      <View style={tw`flex flex-row flex-wrap justify-between mt-4`}>
        <TouchableOpacity
          style={[
            tw`flex flex-col justify-center rounded-md border-2 bg-yellow-500 p-2.5 items-center mr-2`,
            styles.shadow,
          ]}>
          <Icon name="map-pin" type="feather" color="black" size={24} />
          <Text style={tw` text-lg font-bold ml-2`}>Nebeng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-1 flex-row justify-center rounded-md border-2 bg-lime-500 p-2.5 items-center`,
            styles.shadow,
          ]}>
          <Icon name="map" type="feather" color="black" size={24} />
          <Text style={tw` text-lg font-bold ml-2`}>Beri tumpangan</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row flex-wrap justify-between mt-2`}>
        <TouchableOpacity
          style={[
            tw`flex-1 flex-row justify-center rounded-md border-2 bg-fuchsia-500 p-2.5 items-center mr-2`,
            styles.shadow,
          ]}>
          <Icon name="package" type="feather" color="black" size={24} />
          <Text style={tw` text-lg font-bold ml-2`}>Titipin barang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-col justify-center rounded-md border-2 bg-cyan-500 p-2.5 items-center w-1/3`,
            styles.shadow,
          ]}>
          <Icon name="star" type="feather" color="black" size={24} />
          <Text style={tw` text-lg font-bold ml-2`}>Favorit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ServiceOptions;
