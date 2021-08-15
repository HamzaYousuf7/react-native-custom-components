import "react-native-gesture-handler";
import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

// imp
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// screens imp
import RoutesScreen from "../screen/RoutesScreen";
import History from "../screen/History";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import More from "../screen/More";

// other imp
//set path import { icons } from "../constant/assets";

// Dimenstion API
const { width, height } = Dimensions.get("window");

//
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// array
const bottomTab = [
  {
    id: 1,
    name: "RoutesScreen",
    barName: "ROUTES",
    component: RoutesScreen,
    acitveIcon: icons.routesActive, // 1 - 4  icon
    inActiveIcon: icons.routesInActive, // 1 - 5  icon
  },
  {
    id: 2,
    name: "History",
    barName: "HISTORY",
    component: History,
    acitveIcon: icons.historyActive,
    inActiveIcon: icons.historyInActive,
  },
  {
    id: 3,
    name: "Home",
    barName: "OFFLINE",
    component: Home,
    acitveIcon: icons.locationActive,
    inActiveIcon: icons.locationInActive,
  },
  {
    id: 2,
    name: "Profile",
    barName: "PROFILE",
    component: Profile,
    acitveIcon: icons.userActive,
    inActiveIcon: icons.userInActive,
  },
  {
    id: 2,
    name: "More",
    barName: "MORE",
    component: More,
    acitveIcon: icons.moreActive,
    inActiveIcon: icons.moreInActive,
  },
];

const BottomTabJSX = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      style: {
        backgroundColor: "white",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
      },
    }}
  >
    {/* bottom tab arr */}
    {bottomTab.map((singleItem) => {
      return (
        <Tab.Screen
          name={singleItem.name}
          component={singleItem.component}
          key={singleItem.id}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              if (focused == true) {
                return (
                  <>
                    <View
                      style={{
                        width: "80%",
                        height: "100%",
                        // justifyContent: 'center',
                        alignItems: "center",
                        // backgroundColor: 'blue',
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: "65%",
                          justifyContent: "center",
                          alignItems: "center",
                          // backgroundColor: 'purple',
                        }}
                      >
                        <Image
                          source={singleItem.acitveIcon}
                          resizeMode="contain"
                          style={{ width: "65%", height: "65%" }}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: width * 0.03,
                          color: "#3BB67B",
                          marginTop: height * 0.005,
                        }}
                      >
                        {singleItem.barName}
                      </Text>
                    </View>
                  </>
                );
              } else if (focused == false) {
                return (
                  <>
                    <View
                      style={{
                        width: "80%",
                        height: "100%",
                        // justifyContent: 'center',
                        alignItems: "center",
                        // backgroundColor: 'blue',
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: "65%",
                          justifyContent: "center",
                          alignItems: "center",
                          // backgroundColor: 'purple',
                        }}
                      >
                        <Image
                          source={singleItem.inActiveIcon}
                          resizeMode="contain"
                          style={{ width: "65%", height: "65%" }}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: width * 0.03,
                          color: "#C8C8C8",
                          marginTop: height * 0.005,
                        }}
                      >
                        {singleItem.barName}
                      </Text>
                    </View>
                  </>
                );
              }
            },
          }}
        />
      );
    })}
    {/* bottom tab arr end */}
  </Tab.Navigator>
);

const MainStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="BottomTabJSX"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTabJSX" component={BottomTabJSX} />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
