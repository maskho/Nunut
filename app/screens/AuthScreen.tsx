import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Animated,
  processColor,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {supabase} from '../utils/supabase';
import {SafeAreaView} from 'react-native';
import tw from 'twrnc';
import {Input} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  //   const animatedValue = useRef(new Animated.Value(0)).current;

  //   useEffect(() => {
  //     Animated.timing(animatedValue, {
  //       toValue: 1,
  //       duration: 2000,
  //       useNativeDriver: false,
  //     }).start();
  //   }, [animatedValue]);

  //   const backgroundColor =
  //     animatedValue.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: ['#FFA500', '#FFFF00'],
  //     }) || processColor('#FFA500');

  return (
    <SafeAreaView style={tw`h-full bg-black`}>
      <View
        style={[tw`flex-1 items-center justify-center p-8 w-full max-w-sm`]}>
        <View style={tw`flex flex-col items-center`}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('./../assets/images/nunut-white.png')}
          />
        </View>
        <View style={tw`mb-4 w-full bg-white rounded-md h-12 px-6 text-black`}>
          <Input
            leftIcon={{type: 'ionicons', name: 'mail-outline'}}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email"
            autoCapitalize={'none'}
          />
        </View>
        <View style={tw`mb-8 w-full bg-white rounded-md h-12 px-6 text-black`}>
          <Input
            leftIcon={{type: 'ionicons', name: 'lock-outline'}}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
          />
        </View>
        <View style={tw`mt-20 pt-4 pb-4 self-stretch`}>
          <TouchableOpacity
            onPress={() => signInWithEmail()}
            disabled={loading}
            style={tw`h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6 ${
              loading ? 'bg-gray-300' : ''
            }`}>
            <Text style={tw`text-center text-white text-xl`}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`pt-4 pb-4 self-stretch`}>
          <TouchableOpacity
            disabled={loading}
            onPress={() => signUpWithEmail()}
            style={tw`h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6 ${
              loading ? 'bg-gray-300' : ''
            }`}>
            <Text style={tw`text-center text-white text-xl`}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default AuthScreen;
