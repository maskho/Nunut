import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Animated,
  processColor,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {supabase} from '../utils/supabase';
import {SafeAreaView} from 'react-native';
import tw from 'twrnc';
import {Icon, Input} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../constants/styles';

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

  return (
    <SafeAreaView style={tw`h-full bg-amber-100`}>
      <View
        style={[tw`flex-1 items-center justify-center p-8 w-full max-w-sm`]}>
        <View style={tw`flex flex-col items-center`}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('./../assets/images/nunut-black.png')}
          />
        </View>
        <View
          style={tw`flex flex-row mb-4 w-full bg-gray-50 rounded-md border-2 h-12 px-6 items-center`}>
          <Icon name="mail" type="feather" size={24} color="#9CA3AF" />
          <TextInput
            style={tw`text-lg text-gray-800 ml-2 pb-2 h-full`}
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize='none'
          />
        </View>
        <View
          style={tw`flex flex-row mb-4 w-full bg-gray-50 rounded-md border-2 h-12 px-6 items-center`}>
          <Icon name="lock" type="feather" size={24} color="#9CA3AF" />
          <TextInput
            style={tw`text-lg text-gray-800 ml-2 pb-2 h-full`}
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <View style={tw`mt-4 pt-4 pb-4 self-stretch`}>
          <TouchableOpacity
            onPress={() => signInWithEmail()}
            disabled={loading}
            style={[
              tw`h-12 border-2 rounded-md flex flex-row justify-center items-center px-6 bg-yellow-500 ${
                loading ? 'bg-gray-300' : ''
              }`,
              styles.shadow,
            ]}>
            <Text style={tw`text-center text-xl`}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`pt-4 pb-4 self-stretch`}>
          <TouchableOpacity
            disabled={loading}
            onPress={() => signUpWithEmail()}
            style={[
              tw`h-12 border-2 rounded-md flex flex-row justify-center items-center px-6 bg-green-500 ${
                loading ? 'bg-gray-300' : ''
              }`,
              styles.shadow,
            ]}>
            <Text style={tw`text-center text-xl`}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
