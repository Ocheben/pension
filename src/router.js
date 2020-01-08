import React from 'react';
import {Dimensions, View} from 'react-native';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Screens/AuthScreens/Login/Login';
import Dashboard from './Screens/Home/Home';
import Fund from './Screens/Home/Fund';
import ContributionList from './Screens/Contributions/Contributions';
import ContributionItem from './Screens/Contributions/ContributionItem';
import Sidebar from './Components/Sidebar';
import PenCalc from './Screens/PenCalc/PenCalc';
import Requests from './Screens/Requests/Requests';
import Profile from './Screens/Profile/Profile';
import {
  AccountOfficer,
  AccountBalance,
  Enquiries,
  LastContribution,
  MissingContribution,
  RsaStatement,
} from './Screens/Enquiries';
import ChangePassword from './Screens/Profile/ChangePassword';
import Locations from './Screens/Locations/Locations';
import {
  LogoImg,
  BlockView,
  Content,
  colors,
  SText,
} from './Components/styledComponents';
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
const HomeStack = createStackNavigator({
  Home: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => ({
      headerTitle: (
        <Content
          justify="space-between"
          hpadding={12}
          align="center"
          vmargin={10}
          bg={colors.primary}
          height={height / 10}
          horizontal>
          <TouchableOpacity
            style={{width: 40}}
            onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#ffffff" size={20} />
          </TouchableOpacity>
          <LogoImg
            source={logo}
            width={width * 0.3}
            resizeMode="contain"
            style={{alignSelf: 'center'}}
          />
          <View style={{width: 40}} />
        </Content>
      ),
    }),
  },
  Fund: {
    screen: Fund,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Fund',
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

const EnquiryStack = createStackNavigator({
  Enquiry: {
    screen: Enquiries,
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
            Enquiry
          </SText>
          <></>
        </Content>
      ),
    }),
  },
  AccountBalance: {
    screen: AccountBalance,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Account Balance',
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
  AccountOfficer: {
    screen: AccountOfficer,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Account Officer',
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
  LastContribution: {
    screen: LastContribution,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Last Contribution',
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
  MissingContribution: {
    screen: MissingContribution,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Missing Contribution',
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
  RsaStatement: {
    screen: RsaStatement,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'RSA Statement',
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
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Change Password',
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
      screen: HomeStack,
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
    Enquiry: {
      screen: EnquiryStack,
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
