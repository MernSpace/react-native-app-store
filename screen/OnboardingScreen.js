import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(0);

    const handleDone = () => {
        navigation.push('Home');
    };

    const backgroundColors = ['#ffffff', '#e0f7fa', '#ffe0b2']; // Customize for each page

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={backgroundColors[currentPage]}
                barStyle="dark-content"
                animated
            />
            <Onboarding
                onDone={handleDone}
                onPageChange={(index) => setCurrentPage(index)}
                pages={[
                    {
                        backgroundColor: backgroundColors[0],
                        image: (
                            <View style={styles.animationContainer}>
                                <LottieView
                                    source={require('../assets/animation/1.json')}
                                    autoPlay
                                    loop
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: 'Welcome to MyApp',
                        subtitle: 'Discover new features that improve your productivity.',
                    },
                    {
                        backgroundColor: backgroundColors[1],
                        image: (
                            <View style={styles.animationContainer}>
                                <LottieView
                                    source={require('../assets/animation/2.json')}
                                    autoPlay
                                    loop
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: 'Stay Organized',
                        subtitle: 'Keep track of your tasks and goals efficiently.',
                    },
                    {
                        backgroundColor: backgroundColors[2],
                        image: (
                            <View style={styles.animationContainer}>
                                <LottieView
                                    source={require('../assets/animation/3.json')}
                                    autoPlay
                                    loop
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: 'Let’s Get Started!',
                        subtitle: 'Join us and experience the change today.',
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    lottie: {
        width: 300,
        height: 300,
    },
});

export default OnboardingScreen;
