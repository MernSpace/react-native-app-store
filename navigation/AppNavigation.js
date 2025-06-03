import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen'
import OnboardingScreen from 'screen/OnboardingScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='onboarding'>
                <Stack.Screen name='onboarding' component={OnboardingScreen} options={{headerShown:false}}/>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerShown:false}}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

