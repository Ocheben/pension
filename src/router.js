import React from 'react';
import {Dimensions} from 'react-native';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Screens/AuthScreens/Login/Login';
import Dashboard from './Screens/Home/Home';
import ContributionList from './Screens/Contributions/Contributions';
import ContributionItem from './Screens/Contributions/ContributionItem';
import Sidebar from './Components/Sidebar';
import PenCalc from './Screens/PenCalc/PenCalc';
import Requests from './Screens/Requests/Requests';
import Profile from './Screens/Profile/Profile';
import Locations from './Screens/Locations/Locations';
import {LogoImg, BlockView, Content, colors, SText} from './Components/styledComponents';
import {GridIcon, MenuIcon} from './Components/icons';

const logo = require('./assets/img/logo.png');
const {height, width} = Dimensions.get('window');

const Contributions = createStackNavigator({
  ContributionList: {
    screen: ContributionList,
    navigationOptions: ({navigation}) => ({
      headerTitle: (
        <Content
          shadow
          justify="flex-start"
          hpadding={12}
          align="center"
          bg={colors.primary}
          vmargin={10}
          height={height / 10}
          horizontal>
          <TouchableOpacity
            style={{width: 40}}
            onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#ffffff" size={20} />
          </TouchableOpacity>
          {
            // <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          }
          <SText size="25px" weight="700" color="#ffffff">
            Contributions
          </SText>
          <></>
        </Content>
      ),
    }),
  },
  ContributionItem: {
    screen: ContributionItem,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Contribution',
      // headerLeft: (
      //   <TouchableOpacity
      //     style={{width: 40}}
      //     onPress={() => navigation.navigate('Contribution')}>
      //     <MenuIcon color="#ffffff" size={20} />
      //   </TouchableOpacity>
      // ),
      // headerLeftContainerStyle: {
      //   backgroundColor: colors.primary,
      // },
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ffffff',
      },
      headerTintColor: '#ffffff',
    }),
  },
});

const PenCalcStack = createStackNavigator({
  Pencalc: {
    screen: PenCalc,
    navigationOptions: ({navigation}) => ({
      headerTitle: (
        <Content
          shadow
          justify="flex-start"
          hpadding={12}
          align="center"
          bg={colors.primary}
          vmargin={10}
          height={height / 10}
          horizontal>
          <TouchableOpacity
            style={{width: 40}}
            onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#ffffff" size={20} />
          </TouchableOpacity>
          {
            // <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          }
          <SText size="25px" weight="700" color="#ffffff">
            Pension Calculator
          </SText>
          <></>
        </Content>
      ),
    }),
  },
});

const RequestsStack = createStackNavigator({
  Requests: {
    screen: Requests,
    navigationOptions: ({navigation}) => ({
      headerTitle: (
        <Content
          shadow
          justify="flex-start"
          hpadding={12}
          align="center"
          bg={colors.primary}
          vmargin={10}
          height={height / 10}
          horizontal>
          <TouchableOpacity
            style={{width: 40}}
            onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#ffffff" size={20} />
          </TouchableOpacity>
          {
            // <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          }
          <SText size="25px" weight="700" color="#ffffff">
            Requests
          </SText>
          <></>
        </Content>
      ),
    }),
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      headerTitle: (
        <Content
          shadow
          justify="flex-start"
          hpadding={12}
          align="center"
          bg={colors.primary}
          vmargin={10}
          height={height / 10}
          horizontal>
          <TouchableOpacity
            style={{width: 40}}
            onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#ffffff" size={20} />
          </TouchableOpacity>
          {
            // <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          }
          <SText size="25px" weight="700" color="#ffffff">
            Profile
          </SText>
          <></>
        </Content>
      ),
    }),
  },
});

const LocationsStack = createStackNavigator({
  Locations: {
    screen: Locations,
    navigationOptions: ({navigation}) => ({
      headerTitle: (
        <Content
          shadow
          justify="flex-start"
          hpadding={12}
          align="center"
          bg={colors.primary}
          vmargin={10}
          height={height / 10}
          horizontal>
          <TouchableOpacity
            style={{width: 40}}
            onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#ffffff" size={20} />
          </TouchableOpacity>
          {
            // <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          }
          <SText size="25px" weight="700" color="#ffffff">
            Locations
          </SText>
          <></>
        </Content>
      ),
    }),
  },
});

export const SignedIn = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    Contribution: {
      screen: Contributions,
    },
    Pencalc: {
      screen: PenCalcStack,
    },
    Requests: {
      screen: RequestsStack,
    },
    Profile: {
      screen: ProfileStack,
    },
    Locations: {
      screen: LocationsStack,
    },
  },
  {
    contentComponent: Sidebar,
    drawerWidth: 300,
  },
);

export const createRootNavigator = (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn,
        },
        SignedOut: {
          screen: Login,
        },
      },
      {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      },
    ),
  );
