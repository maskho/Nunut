import 'react-native-url-polyfill/auto';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {supabase} from './utils/supabase';
import {Session} from '@supabase/supabase-js';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {store} from './utils/store';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CarbonScreen from './screens/CarbonScreen';
import {Icon} from '@rneui/themed';
import HistoryScreen from './screens/HistoryScreen';
import tw from 'twrnc';
import ChatBoxScreen from './screens/ChatBoxScreen';
import CreateChatScreen from './screens/CreateChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({session}: {session: Session}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SettingsScreen" options={{headerShown: false}}>
        {() => <SettingsScreen key={session.user.id} session={session} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  const navigation = useNavigation<any>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatBoxScreen"
        component={ChatBoxScreen}
        options={{
          headerShown: true,
          headerTitle: 'Kotak Pesan',
          headerRight: () => (
            <View style={tw`flex flex-row`}>
              <Icon
                name="search"
                type="feather"
                color="black"
                size={24}
                style={tw`mr-4`}
              />
              <Icon
              onPress={() => navigation.navigate('CreateChatScreen')}
                name="edit"
                type="feather"
                color="black"
                size={24}
                style={tw`mr-0`}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="CreateChatScreen"
        component={CreateChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function App(): JSX.Element {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
            {session && session.user ? (
              <Tab.Navigator
                // tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{
                  tabBarStyle: {
                    backgroundColor: 'yellow',
                    paddingTop: 8,
                    borderTopWidth: 2,
                    borderTopColor: 'black',
                  },
                }}>
                <Tab.Screen
                  name="HomeStack"
                  options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                      <Icon
                        name="home"
                        type="feather"
                        color={color}
                        size={24}
                      />
                    ),
                  }}>
                  {() => <HomeStack session={session} />}
                </Tab.Screen>
                <Tab.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                      <Icon name="map" type="feather" color={color} size={24} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="CarbonScreen"
                  component={CarbonScreen}
                  options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarActiveTintColor: 'yellow',
                    tabBarIcon: ({color, size}) => (
                      <View style={tw`absolute bottom-0`}>
                        <View
                          style={tw`h-16 w-16 rounded-full border-2 bg-cyan-500 flex justify-center items-center`}>
                          <Icon
                            name="target"
                            type="feather"
                            color={color}
                            size={24}
                          />
                        </View>
                      </View>
                    ),
                  }}
                />
                <Tab.Screen
                  name="HistoryScreen"
                  component={HistoryScreen}
                  options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                      <Icon
                        name="file-text"
                        type="feather"
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="ChatStack"
                  component={ChatStack}
                  options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                      <Icon
                        name="message-square"
                        type="feather"
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            ) : (
              <AuthScreen />
            )}
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
