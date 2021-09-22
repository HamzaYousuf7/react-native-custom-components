# React Native Project Structure

## Overview

In this folder Structure I have already setup axios, navigation 5, stack navigation, redux, redux thunk and redux persist with asyncStorage and follow best practices.

## Setup

### Step 1 Copy Src file

```bash
First copy the src  folder into the project root directory as shown below
```

<img src="/1-ProjectStructure/screenshot/Screenshot_1.png" height="250" />

### Step 2 Replace App.js File

```bash
Replace your app.js file with the above given app.js file
```

### Step 3 Setup Font

First add react-native.config.js file at the root of your project. (As shown in Image below)
Now run this command on CMD. This will link your fonts. (As shown in Image below)

```bash
npx react-native link
```

<img src="/1-ProjectStructure/screenshot/Screenshot_2.png" height="250" />
<img src="/1-ProjectStructure/screenshot/Screenshot_4.png" height="250" />

You can follow this article for more information:
https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4

### Step 4 Installing Dependencies

Add these dependencies in your Package.json File and run yarn istall Or npm install. (As shown in Image below)

```bash

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

```bash
Thats it.
```

## Project Overview

## src folder

Contain the whole app

## assets

Here we're going to store images, icons and fonts

## components

Here we're going to store all the components, Like Header, Input ..etc

## constant

Here we're going to store all the constant things of our application. Meaning those things which do not get change often

apiEndPoints: all the endpoint of our application
assets: Import Both Images and Icons in this file and then use this file in the whole application.
color: color scheme of the application

## navigation

Contain two files

AuthSack: all the auth screen goes here. Example Login, Sign Up, Forget Password
MainStack: all the other screen goes here (when the user is login in)

## screen

All the screen goes here

## store

redux setup

action: action creator
reducer: reducer
actionType: store all the action type here
store: setup of reducer.

## utils

All the additional files goes here

## index

We have set up our navigation in this files so all the data store in the redux is available here and we can write any logic if we want.
Example show different Stack depening upon if the user is login or not

## Appp.js Root

Entry files and setup redux here
