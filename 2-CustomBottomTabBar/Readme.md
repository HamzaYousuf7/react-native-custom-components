# React Native Custom Bottom Tab Using Navigation 5

## Overview

How to create Custom bottom tab bar.

## Steps

### Step 1 install

```sh
Assuming you have already install other dependencies of Navigation 5 install this
yarn add @react-navigation/bottom-tabs@^5.x
```

### Step 2 imports

```sh
import createBottomTabNavigator and all the screens of your bottom tab
```

```javascript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens imp
import RoutesScreen from "../screen/RoutesScreen";
import History from "../screen/History";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import More from "../screen/More";
```

### Step 3 initialize

```sh
initialize createBottomTabNavigator
```

```javascript
const Tab = createBottomTabNavigator();
```

### Step 4 create the array

```sh
Create the array and in the array you have an object containing information about the single bottom tab
1 - ID so we can pass as a key when we map it.
2 - name the name we're going to use when we navigate
3 - comonent pass the screen name which you import above
4 - active icon mean when you'r on that tab
5 - inActiveIcon: mean when your not on that tab
```

```javascript
const bottomTab = [
  {
    id: 1,
    name: "RoutesScreen", // - 1 The routes name
    barName: "ROUTES", //2 -  tab Name
    component: RoutesScreen, //  3 - actual component
    acitveIcon: icons.routesActive, // 4 - active icon
    inActiveIcon: icons.routesInActive, // 4 - inactive icon
  },
  {
    id: 2,
    name: "History",
    barName: "HISTORY",
    component: History,
    acitveIcon: icons.historyActive,
    inActiveIcon: icons.historyInActive,
  },
];
```
