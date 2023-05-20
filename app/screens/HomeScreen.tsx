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
import styles from '../constants/styles';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2,
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={tw`bg-amber-100 h-full`}>
      <View style={tw`p-5`}>
        <View style={tw`flex-row justify-between my-4 items-center z-10`}>
          <GooglePlacesAutocomplete
            placeholder="Pagi! Hari ini nunut kemana?"
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
                setDestination({
                  location: details?.geometry?.location,
                  description: data.description,
                }),
              );

              dispatch(setOrigin(null));
            }}
            enablePoweredByContainer={false}
            minLength={3}
            styles={{
              container: {
                flex: 0,
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 6,
                width: '75%',
                position: 'relative',
              },
              listView: {
                position: 'absolute',
                top: 60,
                width: '135%',
                borderWidth: 2,
                borderRadius: 6,
                backgroundColor: 'white',
              },
              textInput: {
                fontSize: 18,
              },
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsScreen')}
            style={[tw`rounded-md`, styles.shadow]}>
            <Icon
              name="menu"
              type="feather"
              style={tw`p-3 bg-yellow-500 rounded-md w-15 border-2`}
            />
          </TouchableOpacity>
        </View>

        <View style={tw`items-center bg-white border-4 p-8 rounded-lg`}>
          <CircularProgressBase
            {...props}
            value={80}
            radius={125}
            activeStrokeColor={'#e84118'}
            inActiveStrokeColor={'#e84118'}>
            <CircularProgressBase
              {...props}
              value={87}
              radius={100}
              activeStrokeColor={'#badc58'}
              inActiveStrokeColor={'#badc58'}>
              <CircularProgressBase
                {...props}
                value={62}
                radius={75}
                activeStrokeColor={'#18dcff'}
                inActiveStrokeColor={'#18dcff'}
              />
            </CircularProgressBase>
          </CircularProgressBase>
        </View>

        <ServiceOptions />
        {/* <NavFavorites /> */}
        <View style={tw`pt-4 mt-auto self-stretch`}></View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
