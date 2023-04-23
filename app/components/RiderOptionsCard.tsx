import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectTravelTimeInfo} from '../utils/slices/navSlice';
import tw from 'twrnc';
import {Icon} from '@rneui/themed';
import {ridersData} from '../data/riders';

const RiderOptionsCard = () => {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<any>(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`}
          onPress={() => navigation.navigate('DestinationCard')}>
          <Icon name="chevron-left" type="ionicons" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Pilih Tumpangan - {travelTimeInfo?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={ridersData}
        keyExtractor={item => item.id}
        renderItem={({item: {id, title, image, multiplier}, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center px-8 ${
              id === selected?.id ? 'bg-gray-200' : ''
            }`}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'contain'}}
              source={require('./../assets/images/motor-front.png')}
            />
            <View style={[tw`flex-row items-center flex-1 justify-between`]}>
              <View>
                <Text style={tw`text-lg font-semibold`}>{title}</Text>
                <Text>{travelTimeInfo?.duration?.text}</Text>
              </View>
              <View>
                <Text style={tw`text-xs`}>Rekomendasi</Text>
                <Text style={tw`text-lg`}>
                  Rp
                  {(
                    travelTimeInfo?.duration?.value *
                    multiplier *
                    10
                  ).toLocaleString('id')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-2 m-3 ${!selected ? 'bg-gray-300' : ''}`}>
          <Text style={tw`text-center text-white text-xl`}>
            Pilih {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RiderOptionsCard;
