import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

export default function Footer() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: 'home', label: 'Home', color: '#3B82F6' },
    { icon: 'search', label: 'Search', color: '#10B981' },
    { icon: 'plus', label: 'Add', color: '#F59E0B', isSpecial: true },
    { icon: 'heart', label: 'Likes', color: '#EF4444' },
    { icon: 'user', label: 'Profile', color: '#8B5CF6' }
  ];

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
  

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <View style={styles.tabContainer}>
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleTabPress(index)}
                style={styles.tabButton}
                activeOpacity={0.7}
              >
                {/* Special button background */}
                {tab.isSpecial && (
                  <View style={styles.specialButtonContainer}>
                    <LinearGradient
                      colors={['#F59E0B', '#F97316']}
                      style={[
                        styles.specialButton,
                        {
                          shadowColor: tab.color,
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: isActive ? 0.3 : 0.2,
                          shadowRadius: isActive ? 8 : 4,
                          elevation: isActive ? 8 : 4,
                        }
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    />
                  </View>
                )}

                {/* Tab content */}
                <View style={styles.tabContent}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name={tab.icon}
                      size={tab.isSpecial ? 28 : 24}
                      color={
                        tab.isSpecial 
                          ? 'white' 
                          : isActive 
                            ? tab.color 
                            : '#9CA3AF'
                      }
                    />

                    {/* Active indicator dot */}
                    {isActive && !tab.isSpecial && (
                      <View style={[styles.activeIndicator, { backgroundColor: tab.color }]} />
                    )}
                  </View>

                  <Text
                    style={[
                      styles.tabLabel,
                      {
                        color: tab.isSpecial
                          ? 'white'
                          : isActive
                            ? tab.color
                            : '#9CA3AF',
                        fontWeight: isActive ? '600' : '500',
                      },
                    ]}
                  >
                    {tab.label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
    bottom:0
  },
  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  contentContainer: {
    alignItems: 'center',
  },
  contentIcon: {
    marginBottom: 16,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  contentDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    paddingHorizontal: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    position: 'relative',
  },
  specialButtonContainer: {
    position: 'absolute',
    top: 4,
    left: 8,
    right: 8,
    bottom: 4,
  },
  specialButton: {
    flex: 1,
    borderRadius: 16,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    top: -8,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});