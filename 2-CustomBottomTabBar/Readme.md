# React Native Custom Bottom Tab Using Navigation 5

## Overview

How to create Custom bottom tab bar. Read the readme for instruction or you can find the complete code in the provided mainStack.js file **(ABOVE)**

## Resukt

<img src="/2-CustomBottomTabBar/screenshot/Screenshot_1.png" height="250" />
<img src="/2-CustomBottomTabBar/screenshot/Screenshot_2.png" height="250" />

## Steps

### Step 1 Installation

**Assuming you have already install other dependencies of Navigation 5 install this**

```bash
yarn add @react-navigation/bottom-tabs@^5.x
```

### Step 2 imports

import createBottomTabNavigator and all the screens of your bottom tab

```javascript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens imp
import RoutesScreen from "../screen/RoutesScreen";
import History from "../screen/History";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import More from "../screen/More";
```

### Step 3 Initialization

**initialize createBottomTabNavigator**

```javascript
const Tab = createBottomTabNavigator();
```

### Step 4 create the array

Create the array and in the array you have an object containing information about the single bottom tab

- 1 - ID:
  So we can pass as a key when we map the array.

- 2 - name:
  The name we're going to use when we navigate.

- 3 - barName:
  The name which is going to display on the screen

- 4 - components:
  Pass the screen name which you import above.

- 5 - active:
  Icon mean when you'r on that tab

- 6 - inActiveIcon:

```javascript
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
```

### Step 5 Tab Navigation

The function which will return the tab naivation plus tab navigation JSX

```javascript
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
    // JSX CODE TO BE ADDED
  </Tab.Navigator>
);
```

### Step 6 added the bottom tab JSX according to your design

The main thing here is if check that determine if the tab bar is active or not return the design accordingly

```javascript
// /* bottom tab arr */

{
  bottomTab.map((singleItem) => {
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
                <View
                  style={{
                    width: "80%",
                    height: "100%",
                    alignItems: "center",
                  }}
                ></View>
              );
            } else if (focused == false) {
              return (
                <View
                  style={{
                    width: "80%",
                    height: "100%",
                    alignItems: "center",
                  }}
                ></View>
              );
            }
          },
        }}
      />
    );
  });
}

// /* bottom tab arr end */
```

### Step 7 complete code

**Complete code**

```javascript
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
```

### Step 8 Add tab bar into main stack

**Now add your bottom tab bar code into your main stack or whatever your navigation structure is and you're done**

```javascript
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
```
