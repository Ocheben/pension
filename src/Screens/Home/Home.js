import React from 'react';
import {View, Button, Text, Dimensions, TouchableOpacity, StatusBar} from 'react-native';
import {onSignOut} from '../../_services';
import {
  SText,
  Content,
  StyledButton,
  colors,
  LogoImg,
} from '../../Components/styledComponents';
import {MenuIcon} from '../../Components/icons';

const {height, width} = Dimensions.get('window');
const logo = require('../../assets/img/logo.png');

const Home = props => {
  const {navigation} = props;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  return (
    <Content>
    <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Content width="100%" bg={colors.primary} flex={4}>
        <Content
          justify="space-between"
          hpadding={12}
          align="center"
          bg={colors.primary}
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
        <Content flex={2} align="center" justify="center">
          <Content horizontal>
            <SText size="25px" color="#ffffff">
              Hello{' '}
            </SText>
            <SText size="25px" weight="700" color="#ffffff">
              Oche Onoja
            </SText>
          </Content>
          <Content horizontal>
            <SText size="20px" color="#ffffff">
              RSA
            </SText>
            <SText size="20px" weight="600" color="#ffffff">
              102748393729
            </SText>
          </Content>
        </Content>
      </Content>
      <Content justify="space-evenly" flex={6}>
        <Content
          bg="#363636"
          shadow
          flex={0.4}
          borderR={10}
          width="90%"
          align="flex-start"
          hpadding={width / 20}
          justify="space-around">
          <SText size="20px" color="#ffffff">
            Total Contribution
          </SText>
          <SText size="30px" weight="600" color="#ffffff">
            NGN 675,000.00
          </SText>
        </Content>
        <Content
          bg="#363636"
          shadow
          flex={0.4}
          borderR={10}
          width="90%"
          align="flex-start"
          hpadding={width / 20}
          justify="space-around">
          <SText size="20px" color="#ffffff">
            Last Contribution (June 2019)
          </SText>
          <SText size="30px" weight="600" color="#ffffff">
            NGN 7,500.00
          </SText>
        </Content>
      </Content>
      <Content
        align="flex-start"
        justify="space-around"
        hpadding={width / 20}
        flex={4}>
        <SText size="17px" color="#999999">
          Quick Links
        </SText>
        <StyledButton bg="#777777" height={height / 20} curved width="100%">
          <SText size="20px" color="#ffffff">
            Check Benefit Status
          </SText>
        </StyledButton>
        <StyledButton bg="#777777" height={height / 20} curved width="100%">
          <SText size="20px" color="#ffffff">
            Search Office Locations
          </SText>
        </StyledButton>
        <StyledButton bg="#777777" height={height / 20} curved width="100%">
          <SText size="20px" color="#ffffff">
            Request RSA Statement
          </SText>
        </StyledButton>
      </Content>
    </Content>
  );
};

export default Home;
