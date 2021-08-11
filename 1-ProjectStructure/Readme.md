# React Native Project Structure

## Overview

In this folder Structure I have already setup axios, navigation 5, stack navigation, redux, redux thunk and redux persist with asyncStorage and some best practice files for color images import and much more.

## Setup

### Step 1 Copy Src file

```sh
First copy the src  folder into your root directory as shown below
```

<img src="/1-ProjectStructure/screenshot/Screenshot_1.png" height="250" />

### Step 2 Replace App.js File

```sh
Replace your app.js file with the given app.js file
```

### Step 3 Font

```sh
Add react-native.config.js file at the root of your project
npx react-native link Run this command for linking in CMD
Follow this link for more detail https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4
```

<img src="/1-ProjectStructure/screenshot/Screenshot_2.png" height="250" />
<img src="/1-ProjectStructure/screenshot/Screenshot_4.png" height="250" />

### Step 4 Installing Dependencies

```sh
Add these dependencies in your Package.json File and run yarn istall Or npm install
    "@react-native-async-storage/async-storage": "^1.15.5",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "5.x",
    "@react-navigation/stack": "5.x",
    "axios": "^0.21.1",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-reanimated": "^2.2.0",
    "react-native-safe-area-context": "^3.3.0",
    "react-native-screens": "^3.5.0",
    "react-redux": "^7.2.4",
    "redux": "^4.1.1",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0"
```

<img src="/1-ProjectStructure/screenshot/Screenshot_3.png" height="250" />

### Step 5 Done

```sh
Thats it.
```

## Project Overview

## src folder

```sh
Contain the whole app
```

## assets

```sh
Here we're going to store images, icons and fonts
```

## components

```sh
Here we're going to store all the components, Like Header, Input ..etc
```

## constant

```sh
Here we're going to store all the constant things of our application. Meaning those things which do not get change often

apiEndPoints: all the endpoint of our application
assets: Import Both Images and Icons in this file and then use this file in the whole application.
color: color scheme of the application
```

## navigation

```sh
Contain two files

AuthSack: all the auth screen goes here. Example Login, Sign Up, Forget Password
MainStack: all the other screen goes here (when the user is login in)
```

## screen

```sh
All the screen goes here
```

## store

```sh
redux setup

action: action creator
reducer: reducer
actionType: store all the action type here
store: setup of reducer.
```

## utils

```sh
All the additional files goes here
```

## index

```sh
We have set up our navigation in this files so all the data store in the redux is available here and we can write any logic if we want.
Example show different Stack depening upon if the user is login or not
```

## Appp.js Root

```sh
Entry files and setup redux here
```
