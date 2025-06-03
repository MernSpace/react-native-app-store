import Layout from 'components/Layout';
import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput, StatusBar } from 'react-native';

const featuredApps = [
    {
        id: 1,
        title: 'Productive Pro',
        subtitle: 'Your daily planner',
        image: require('../assets/app/1.png'),
    },
    {
        id: 2,
        title: 'FitTrack',
        subtitle: 'Health & Fitness',
        image: require('../assets/app/2.png'),
    },
    {
        id: 3,
        title: 'MindZen',
        subtitle: 'Meditation & Relaxation',
        image: require('../assets/app/3.png'),
    },
];

const categories = [
    { id: 1, name: 'Productivity', icon: require('../assets/app/1.png') },
    { id: 2, name: 'Health', icon: require('../assets/app/2.png') },
    { id: 3, name: 'Education', icon: require('../assets/app/2.png') },
    { id: 4, name: 'Finance', icon: require('../assets/app/3.png') },
];

const HomeScreen = () => {
    return (
        <Layout>
            <ScrollView className="flex-1 bg-white px-4 pt-2">
                <StatusBar backgroundColor="dark-content" />
                {/* Header */}
                <View className='flex-row justify-between items-center'>
                    <Text className="text-3xl font-bold text-gray-900 mb-1">Today</Text>
                    <Text className="text-sm text-gray-500 mb-6">
                        {new Date().toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </Text>
                </View>

                {/* Search Bar */}
                <View className="bg-gray-100 flex-row items-center px-4 py-2 rounded-xl mb-6">
                    <Text className="text-gray-400 mr-2">🔍</Text>
                    <TextInput
                        placeholder="Search apps & games"
                        className="flex-1 text-base text-gray-800"
                    />
                </View>

                {/* Featured */}
                <Text className="text-lg font-semibold text-gray-800 mb-2">Featured Apps</Text>
                {featuredApps.map((app) => (
                    <View
                        key={app.id}
                        className="bg-gray-100 rounded-2xl p-4 mb-4 flex-row items-center shadow-sm"
                    >
                        <Image source={app.image} className="w-16 h-16 rounded-xl mr-4" />
                        <View className="flex-1">
                            <Text className="text-base font-semibold text-gray-900">{app.title}</Text>
                            <Text className="text-sm text-gray-600">{app.subtitle}</Text>
                        </View>
                        <TouchableOpacity className="bg-blue-600 px-4 py-1.5 rounded-xl">
                            <Text className="text-white text-sm font-medium">GET</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                {/* Top Charts */}
                <Text className="text-lg font-semibold text-gray-800 mt-6 mb-2">Top Charts</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-6">
                    {featuredApps.map((app, i) => (
                        <View key={i} className="w-40 bg-white rounded-xl mr-4 shadow p-3">
                            <Image source={app.image} className="w-full h-24 rounded-lg mb-2" />
                            <Text className="text-sm font-semibold text-gray-900">{app.title}</Text>
                            <Text className="text-xs text-gray-500">{app.subtitle}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Categories */}
                <Text className="text-lg font-semibold text-gray-800 mb-2">Top Categories</Text>
                <View className="flex-row flex-wrap justify-between mb-6">
                    {categories.map((cat) => (
                        <View
                            key={cat.id}
                            className="w-[48%] bg-gray-100 rounded-2xl p-4 mb-4 flex-row items-center"
                        >
                            <Image source={cat.icon} className="w-10 h-10 mr-3" />
                            <Text className="text-sm font-medium text-gray-700">{cat.name}</Text>
                        </View>
                    ))}
                </View>

                {/* Premium Picks */}
                <Text className="text-lg font-semibold text-gray-800 mb-2">Premium Picks</Text>
                <View className="bg-yellow-100 rounded-2xl p-4 mb-6 flex-row items-center shadow-sm">
                    <Image source={require('../assets/app/1.png')} className="w-20 h-20 rounded-xl mr-4" />
                    <View className="flex-1">
                        <Text className="text-base font-bold text-yellow-800">Productive Pro</Text>
                        <Text className="text-sm text-yellow-700">Get the most from your day</Text>
                    </View>
                    <TouchableOpacity className="bg-yellow-600 px-4 py-1.5 rounded-xl">
                        <Text className="text-white text-sm font-medium">TRY</Text>
                    </TouchableOpacity>
                </View>

                {/* Dev Spotlight */}
                <Text className="text-lg font-semibold text-gray-800 mb-2">Developer Spotlight</Text>
                <View className="bg-purple-100 rounded-2xl p-4 mb-6 shadow-sm">
                    <Text className="text-base font-bold text-purple-800 mb-1">Indie Dev: Saharul</Text>
                    <Text className="text-sm text-purple-700 mb-2">
                        Full-stack developer making beautiful, secure apps.
                    </Text>
                    <TouchableOpacity className="bg-purple-600 w-24 py-1.5 rounded-xl">
                        <Text className="text-white text-center text-sm font-medium">Explore</Text>
                    </TouchableOpacity>
                </View>

                {/* Try Something New */}
                <Text className="text-lg font-semibold text-gray-800 mb-2">Try Something New</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-16">
                    {featuredApps.map((app, i) => (
                        <View key={i} className="w-40 bg-white rounded-xl mr-4 shadow p-3">
                            <Image source={app.image} className="w-full h-24 rounded-lg mb-2" />
                            <Text className="text-sm font-semibold text-gray-900">{app.title}</Text>
                            <Text className="text-xs text-gray-500">{app.subtitle}</Text>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
        </Layout>
    );
};

export default HomeScreen;
