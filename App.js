import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ChatsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Status - Kama WhatsApp</Text>
    <ScrollView horizontal><View style={styles.status}><Text>+ Add Status</Text></View><View style={styles.status}><Text>Musa K.</Text></View></ScrollView>
    <Text>Chats: The Terrace, Musa K, Zainab</Text>
  </View>
);
const ScoresScreen = () => (
  <View style={[styles.screen, {backgroundColor: '#0a3d1f'}]}>
    <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>Simba 2-1 Yanga</Text>
    <Text style={{color:'red'}}>🔴 LIVE 74:12</Text>
    <View style={{backgroundColor:'white', padding:10, margin:20}}><Text>⚽ GOLI! Chama 74'</Text></View>
    <Text style={{color:'white'}}>Possession 54%-46% | Shots 11-8</Text>
  </View>
);
const PostsScreen = () => (<View style={styles.screen}><Text>Posts 🎥</Text></View>);
const ShabaniScreen = () => (<View style={styles.screen}><Text>Shabani AI 🤖</Text></View>);

const Tab = createBottomTabNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Chats" component={ChatsScreen} />
        <Tab.Screen name="Scores" component={ScoresScreen} />
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Shabani" component={ShabaniScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  screen:{flex:1, justifyContent:'center', alignItems:'center', padding:20},
  title:{fontWeight:'bold', fontSize:18},
  status:{width:60, height:60, borderRadius:30, backgroundColor:'#1B8A4D', margin:5, justifyContent:'center', alignItems:'center'}
});
