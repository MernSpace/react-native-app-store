// import libraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';

// create a component
const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <Footer />
        </View>
    );
};

// styles (optional, can be customized)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

// make this component available to the app
export default Layout;
