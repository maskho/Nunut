import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {setDestination} from '../utils/slices/navSlice';
import {Icon} from '@rneui/themed';

const DestinationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning fellas!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={destinationInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={3}
            placeholder="Mau kemana?"
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
              navigation.navigate('RiderOptionsCard');
            }}
          />
        </View>
        {/* <NavFavourites /> */}
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RiderOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-30 px-4 rounded-full py-3 `}>
          <Icon name="directions-car" type="ionicons" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Nebeng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 rounded-full py-3`}>
          <Icon name="cases" type="ionicons" color="black" size={16} />
          <Text style={tw` text-center`}>Titip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DestinationCard;

const destinationInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {paddingHorizontal: 20, paddingBottom: 0},
});
