/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onSignOut} from '../_services';
import {BlockView, SText, LogoImg} from './styledComponents';

const avatar = require('../assets/img/avatar.png');

const {height, width} = Dimensions.get('window');

const Sidebar = props => {
  // const [userInfo, setUserInfo] = useState({});
  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = await AsyncStorage.getItem('user');
  //     setUserInfo(JSON.parse(user).user);
  //   };
  //   getUser();
  // }, []);
  const {navigation} = props;
  const signOut = () => {
    const {navigation} = props;
    onSignOut();
    navigation.navigate('SignedOut');
  };

  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    props.navigation.dispatch(navigateAction);
  };
  return (
    <View style={{backgroundColor: '#37bf86', height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: height * 0.1,
          marginBottom: height * 0.05,
          marginLeft: width / 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: width * 0.075,
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}>
          <LogoImg
            source={avatar}
            width={width * 0.15}
            height={width * 0.15}
            resizeMode="contain"
          />
        </View>
        <BlockView hmargin={width / 30}>
          <SText color="#333333" size="27px" weight="600">
            Oche Onoja
          </SText>
        </BlockView>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Dashboard
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contribution')}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Contributions
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Requests')}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Requests
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Enquiry
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Profile
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Pencalc')}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Pen Calc
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Locations')}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Office Locations
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" uppercase fontWeight="400">
              Funds
            </SText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signOut()}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <SText color="#ffffff" size="22px" fontWeight="400" uppercase>
              Logout
            </SText>
          </BlockView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Sidebar;
