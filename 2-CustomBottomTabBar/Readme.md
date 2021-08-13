# React Native Custom Bottom Tab Using Navigation 5

## Overview

How to create Custom bottom tab bar.

## Steps

### Step 1 install

```sh
Assuming you have already install other dependencies of Navigation 5 install this
yarn add @react-navigation/bottom-tabs@^5.x
```

### Step 2 import and initialize

```javascript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
```

### Step 3 create the array

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
