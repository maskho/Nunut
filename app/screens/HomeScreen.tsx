import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import tw from 'twrnc';
import {Icon} from '@rneui/themed';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {setDestination, setOrigin} from '../utils/slices/navSlice';
import ServiceOptions from '../components/ServiceOptions';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={tw`bg-gray-100 absolute z-50 p-3 rounded-full shadow-lg top-13 right-8`}>
          <Icon name="menu" />
        </TouchableOpacity>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={require('./../assets/images/nunut-black.png')}
        />
        <GooglePlacesAutocomplete
          placeholder="Dari mana anda?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'id',
          }}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data.description,
              }),
            );

            dispatch(setDestination(null));
          }}
          enablePoweredByContainer={true}
          minLength={3}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <ServiceOptions />
        <NavFavorites />
        <View style={tw`pt-4 mt-auto self-stretch`}>
          <TouchableOpacity
            style={tw`h-12 bg-black rounded-md flex flex-row justify-center items-center px-6`}>
            <Text style={tw`text-center text-white text-xl`}>
              Beri tumpangan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
