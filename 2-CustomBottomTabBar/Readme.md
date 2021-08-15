# React Native Custom Bottom Tab Using Navigation 5

## Overview

```sh
How to create Custom bottom tab bar.
```

<img src="/2-CustomBottomTabBar/screenshot/Screenshot_1.png" height="250" />
<img src="/2-CustomBottomTabBar/screenshot/Screenshot_2.png" height="250" />

## Steps

### Step 1 Installation

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

### Step 3 Initialization

```sh
initialize createBottomTabNavigator
```

```javascript
const Tab = createBottomTabNavigator();
```

### Step 4 create the array

```sh
Create the array and in the array you have an object containing information about the single bottom tab
1 - ID:
      So we can pass as a key when we map it.

2 - name:
      The name we're going to use when we navigate.
3 - barName:
      The name which is going to display on the screen

4 - components:
       Pass the screen name which you import above.

5 - active:
      Icon mean when you'r on that tab

6 - inActiveIcon:
      Mean when your not on that tab
```

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
