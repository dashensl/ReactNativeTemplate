import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import SamplePage from '../components/SamplePage';

const iosTabBarOptions = { 
    labelStyle: { 
        paddingBottom: 4 
    }, 
    style: { 
        paddingTop: 7 
    },
    header: {
        style: {
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
        }
    } 
};

const androidTabBarOptions = {
    upperCaseLabel: false,
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    style: {
        backgroundColor: 'white',
        height: 55,
    },
    labelStyle: {
        fontSize: 10
    },
    indicatorStyle: {
        backgroundColor: 'transparent'
    },
    showIcon: true
};


const MyTabNavigator = TabNavigator(
    {
        Home: {
            screen: ({ navigation }) => <SamplePage text={'page 1'} navigation={navigation} />,
            navigationOptions: {
                tabBarLabel: 'Page 1',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-home-outline' size={30} color={tintColor} />
                )
            }
        },
        Chat: {
            screen: ({ navigation }) => <SamplePage text={'page 2'} navigation={navigation} />,
            navigationOptions: {
                tabBarLabel: 'Page 2',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name='ios-chatbubbles-outline' size={30} color={tintColor} />
                ),
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        lazy: true,
        swipeEnabled: true,
        animationEnabled: false,
        initialRouteName: 'Home',
        lazyLoad: false,
        backBehavior: 'none',
        tabBarOptions: Platform.OS === 'ios' ? iosTabBarOptions : androidTabBarOptions
    }
);

export default MyTabNavigator;
