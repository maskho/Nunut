import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import styles from '../constants/styles';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
import {getCurrentWeekDateRange} from '../utils/datetime';

const CarbonScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={tw`bg-emerald-400 h-full`}>
      <LinearGradient
        colors={['rgb(52 211 153)', 'rgb(16 185 129)', 'rgb(4 120 87)']}
        style={tw`h-full`}>
        <ScrollView>
          <View style={tw`p-5`}>
            <View style={tw`flex-row justify-between my-4 items-center z-10`}>
              <View style={tw`flex-col`}>
                <Text style={tw`text-sm font-bold text-white`}>
                  Kamis, 20 Mei 2021
                </Text>
                <Text style={tw`text-xl font-bold text-white`}>
                  Selamat Pagi, Bambang!
                </Text>
              </View>

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

            <View style={tw`flex-col  items-center p-2 rounded-lg`}>
              <Text style={tw`text-2xl font-bold text-center`}>
                Emisimu lebih rendah 30% dari minggu lalu ! 🎉
              </Text>
              <Text style={tw`text-lg font-semibold mb-4`}>
                {getCurrentWeekDateRange()}
              </Text>
              <CircularProgress
                value={150}
                maxValue={150}
                duration={5000}
                strokeColorConfig={[
                  {color: '#a3e635', value: 20},
                  {color: '#84cc16', value: 70},
                  {color: 'red', value: 150}]}
                radius={120}
                progressValueColor={'#ecf0f1'}
                activeStrokeColor={'#adf538'}
                inActiveStrokeColor={'rgb(217 249 157)'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={20}
                activeStrokeWidth={32}
                title="KgCO2e"
                titleFontSize={20}
                titleColor={'#ecf0f1'}
              />
            </View>

            <View
              style={tw`flex-col justify-evenly py-2 mt-4 border-t border-gray-100`}>
              <TouchableOpacity
                style={[
                  tw`flex-row p-2 rounded-md bg-lime-400 items-center mt-4 border-2 justify-between`,
                  styles.shadow,
                ]}>
                <Text style={tw`text-lg font-semibold text-left`}>
                  Catat Tambahan Emisi
                </Text>
                <Icon name="plus" type="feather" size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  tw`flex-row p-2 rounded-md bg-yellow-400 items-center mt-4 border-2 justify-between`,
                  styles.shadow,
                ]}>
                <Text style={tw`text-lg font-semibold text-left`}>
                  Seimbangkan Emisi
                </Text>
                <Icon name="thermometer" type="feather" size={24} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={tw`flex-row p-2 rounded-lg bg-cyan-300 mt-4 border-2 justify-between`}>
              <Text style={tw`text-lg font-semibold text-left`}>
                Detail emisi karbonmu
              </Text>
              <Icon name="chevron-up" type="feather" size={32} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CarbonScreen;
