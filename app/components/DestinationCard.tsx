import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {
  selectDestination,
  selectOrigin,
  setDestination,
  setOrigin,
} from '../utils/slices/navSlice';
import {Icon} from '@rneui/themed';
import NavFavorites from './NavFavorites';
import styles from '../constants/styles';

const DestinationCard = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={tw`bg-amber-100 flex-1`}>
      <View style={tw`border-t border-gray-200 flex-shrink z-10`}>

          <GooglePlacesAutocomplete
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={3}
            placeholder="Mau dijemput dimana?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            GooglePlacesDetailsQuery={{fields: 'geometry'}}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'id',
            }}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details?.geometry?.location,
                  description: data.description,
                }),
              );
            }}
            styles={{
              container: {
                flex: 0,
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 6,
                position: 'relative',
                marginHorizontal: 20,
                marginTop: 20,
              },
              textInput: {
                fontSize: 18,
              },
              textInputContainer: {paddingHorizontal: 10},
            }}
          />
          {origin && !destination && (
            <GooglePlacesAutocomplete
              fetchDetails={true}
              enablePoweredByContainer={false}
              minLength={3}
              placeholder="Mau nunut kemana?"
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              GooglePlacesDetailsQuery={{fields: 'geometry'}}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'id',
              }}
              onPress={(data, details = null) => {
                dispatch(
                  setDestination({
                    location: details?.geometry?.location,
                    description: data.description,
                  }),
                );
              }}
              styles={{
                container: {
                  flex: 0,
                  backgroundColor: 'white',
                  borderWidth: 2,
                  borderRadius: 6,
                  position: 'relative',
                  marginHorizontal: 20,
                  marginTop: 20,
                },
                textInput: {
                  fontSize: 18,
                },
                textInputContainer: {paddingHorizontal: 10},
              }}
            />
          )}
      </View>
      <View
        style={tw`flex-row justify-evenly py-2 mt-4 border-t border-gray-100`}>
        {/* <TouchableOpacity
            onPress={() => navigation.navigate('RiderOptionsCard')}
            style={[
              tw`h-12 bg-lime-500 rounded-md flex flex-row justify-center items-center border-2 px-6 ${
                loading ? 'bg-gray-300' : ''
              }`,
              styles.shadow,
            ]}>
            <Text style={tw`text-center text-xl`}>Hubungi CS</Text>
          </TouchableOpacity> */}
        <TouchableOpacity
          disabled={!origin && !destination}
          onPress={() => navigation.navigate('RiderOptionsCard')}
          style={[
            tw`flex-1 mx-5 flex-row justify-center rounded-md border-2 bg-lime-500 p-2.5 items-center`,
            styles.shadow,
          ]}>
          <Icon name="map-pin" type="feather" color="black" size={24} />
          <Text style={tw` text-lg font-bold ml-2`}>Nebeng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!origin && !destination}
          style={[
            tw`flex-1 mx-5 flex-row justify-center rounded-md border-2 bg-cyan-500 p-2.5 items-center`,
            styles.shadow,
          ]}>
          <Icon name="package" type="feather" color="black" size={24} />
          <Text style={tw` text-lg font-bold ml-2`}>Nitip</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('RiderOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-30 px-4 rounded-full py-3 `}>
          <Icon name="directions-car" type="ionicons" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Nebeng</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 rounded-full py-3`}>
          <Icon name="cases" type="ionicons" color="black" size={16} />
          <Text style={tw` text-center`}>Titip</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default DestinationCard;