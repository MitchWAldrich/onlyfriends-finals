import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StateContext } from '../../StateProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Login from './Login';

import ForYouPage from '../../src/components/ForYouPage';
import Profile from '../../src/components/Profile'
import ProfileEdit from '../../src/components/ProfileEdit';
import Messages from '../../src/components/Messages.js';
import ChatMessages from '../../src/components/ChatMessages.js';
// import ChatMessagesPartTwo from '../../src/components/ChatMessagesPartTwo.js';
import SwipeCards from '../components/MatchCards/SwipeCards.js';
import Cards from '../components/MatchCards/index.js';
import SignUp from './Signup';



export default function AppStack() {
  const { auth } = useContext(StateContext);

  function ProfileScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Profile/>
      </SafeAreaView>
    );
  }

  function ProfileEditScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProfileEdit/>
      </SafeAreaView>
    );
  }

  function MainScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Cards />
      </SafeAreaView>
    );
  }

  function MessagesScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Messages/>
      </SafeAreaView>
    );
  }

  function ChatScreen(id) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ChatMessages id = {id}/>
        {/* <ChatMessagesPartTwo/> */}
      </SafeAreaView>
    );
  }

  function FYPScreen() {

    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ForYouPage />
      </SafeAreaView>
    );
  }
  
const Stack = createStackNavigator();

  const MessageStack = ({navigation}) => (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>
      <Stack.Screen name="Messages" component={MessagesScreen}/>
      <Stack.Screen
        name="Chat"
        component={({route}) => ChatScreen(route.params.id)}
        options={({route}) => ({
          title: route.params.userName,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  );

  const ProfileStack = ({navigation}) => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen}  />
      <Stack.Screen
        name="Edit Profile"
        component={ProfileEditScreen}
      />
    </Stack.Navigator>
  );

const Tab = createBottomTabNavigator();

 const MyTabs = ({navigation}) => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}>
        <Tab.Screen 
          name="Profile" // THIS IS WHAT SHOWS UP ON TOP, we need the onlyFriends logo to replace this
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{
            tabBarLabel: 'Main',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessageStack}
          options={{
            tabBarLabel: 'Messages',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="For You"
          component={FYPScreen}
          options={{
            tabBarLabel: 'For You',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-circle-outline" color={color} size={size} />
            ),
          }}
        />
        </Tab.Navigator>
    );
}

 
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {auth ? (
        // Screens for logged in users
        <Stack.Group>
          <Stack.Screen name="MyTabs" component={MyTabs} />
        </Stack.Group>
      ) : (
        // Auth screens
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={SignUp}/>
        </Stack.Group>
      )}
      {/* <Stack.Screen name="MyTabs" component={MyTabs}/> */}
    </Stack.Navigator>   
  )
}