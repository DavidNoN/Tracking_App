import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';


const mainFlow  = createStackNavigator();
const bottomTab = createBottomTabNavigator();


function App() {
    return (
        <NavigationContainer>
            <mainFlow.Navigator screenOptions={ { headerShown: false } }
                                initialRouteName="SignUp">
                <mainFlow.Screen name="SignUp"
                                 component={ SignUpScreen }
                />
                <mainFlow.Screen name="SignIn"
                                 component={ SignInScreen }
                />
                <mainFlow.Screen name="Home"
                                 component={ Home }/>
                <mainFlow.Screen name="TrackDetail"
                                 component={ TrackDetailScreen }
                                 options={ { title: 'Track Detail' } }/>
            </mainFlow.Navigator>
        </NavigationContainer>
    );
}


function Home() {
    return (
        <bottomTab.Navigator initialRouteName="TrackCreate">
            <bottomTab.Screen name="TrackList"
                              component={ TrackListScreen }
                              options={ { title: 'Track List' } }/>
            <bottomTab.Screen name="TrackCreate"
                              component={ TrackCreateScreen }
                              options={ { title: 'Create Track' } }/>
            <bottomTab.Screen name="Account"
                              component={ AccountScreen }
                              options={ { title: 'My Account' } }/>
        </bottomTab.Navigator>
    );
}

export default () => {
    return (
        <AuthProvider>
            <App refs={ navigator => {
                setNavigator( navigator )
            } }/>
        </AuthProvider>
    );
};

