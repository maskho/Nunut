import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
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
import CircularProgress, {CircularProgressBase} from 'react-native-circular-progress-indicator';
import ComingSoonModal from '../components/ComingSoonModal';

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 22,
  inActiveStrokeOpacity: 0.2,
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const getCurrentWeekDate = () => {
    const currentDate = new Date();

    const currentDayOfWeek = currentDate.getDay();

    // Calculate the date of the first day of the week by subtracting the difference from the current date
    const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDayOfWeek);

    const sunday =  firstDayOfWeek.toLocaleDateString('id-ID', { month: 'long', day: 'numeric' });
  // };

    const dayOfWeek = currentDate.toLocaleDateString('id-ID', {
      month: 'long', day: 'numeric', year: 'numeric'
    });

    return `${sunday} - ${dayOfWeek}`;
  };

  return (
    <SafeAreaView style={tw`bg-amber-100 h-full`}>
      <ScrollView>
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

        <View style={tw`items-center bg-emerald-200 border-4 p-2 rounded-lg`}>
          <Text style={tw`text-2xl font-bold`}>Tingkat Emisi Karbonmu</Text>
          <Text style={tw`text-lg font-semibold mb-4`}>
            {getCurrentWeekDate()}
          </Text>
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
              <CircularProgress
                {...props}
                value={27}
                radius={75}
                title='KgCO2e'
                titleFontSize={16}
                activeStrokeColor={'rgb(15 118 110)'}
                inActiveStrokeColor={'rgb(20 184 166)'}
              />
            </CircularProgressBase>
          </CircularProgressBase>
          <Icon name="edit-3" type="feather" style={tw`text-6xl mt-4`} />
        </View>

        <ServiceOptions openModal={openModal} />
        <View style={tw`pt-4 mt-auto self-stretch`}></View>
      </View>
      <ComingSoonModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
      /></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
