import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {StatusBar} from 'react-native';

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import DanhMucScreen from "./src/screens/DanhMucScreen";
import ChatScreen from "./src/screens/ChatScreen";
import Details from "./src/components/Details";
import Login from "./src/components/Login";

//Screen names
const homeName = "Trang chủ";
const DanhMucName = "Danh Mục";
const LuotName = "Lướt";
const ChatName = "Chat";
const CaNhanName = "Cá Nhân";
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === DanhMucName) {
              iconName = focused ? 'grid' : 'grid-outline';

            } else if (rn === LuotName) {
              iconName = focused ? 'flame' : 'flame-outline';
            }
            else if (rn === ChatName) {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            }
            else if (rn === CaNhanName) {
                iconName = focused ? 'person' : 'person-outline';
            }
            
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1e88e5',
          inactiveTintColor: 'black',
          labelStyle: { paddingBottom: 5, fontSize: 12 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={DanhMucName} component={DanhMucScreen} />
        <Tab.Screen name={LuotName} component={NotificationScreen} />
        <Tab.Screen name={ChatName} component={ChatScreen} />
        <Tab.Screen name={CaNhanName} component={ProfileScreen} />

      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}
function mystack(){
  return(
  <NavigationContainer>
    <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={MainContainer} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Login" component={Login} />
 </Stack.Navigator>
 </NavigationContainer>);
}
export default MainContainer;
