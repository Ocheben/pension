import React from 'react';
import {View, Button, Text, Dimensions, StatusBar} from 'react-native';
import {onSignIn} from '../../../_services';
import {
  Content,
  SText,
  StyledButton,
  LogoImg,
  colors,
} from '../../../Components/styledComponents';
import {Item, Input, Icon, Label} from 'native-base';
import {PersonIcon, LockIcon} from '../../../Components/icons';

const {height, width} = Dimensions.get('window');
const logo = require('../../../assets/img/logo.png');

const Login = props => {
  const {navigation} = props;
  const signIn = async user => {
    await onSignIn(user);
    navigation.navigate('SignedIn');
  };

  return (
    // <View style={{backgroundColor: 'blue', flex: 1, justifyContent:'center'}}>
    //   <Text>Login</Text>
    //   <Button onPress={() => signIn('user')} title="Login" />
    // </View>
    <Content bg="#363636">
    <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Content flex={0.3} justify="space-evenly">
        <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
        <SText size="18px" color="#ffffff">
          Login to your account
        </SText>
      </Content>
      <Content flex={0.3} width="90%">
        <Item style={{marginBottom: 15}}>
          <PersonIcon color="#37bf86" size={30} />
          <Input floatingLabel placeholder="Email/Phone" />
        </Item>
        <Item>
          <LockIcon color="#37bf86" size={30} />
          <Input floatingLabel placeholder="Password" />
        </Item>
      </Content>
      <Content flex={0.3}>
        <StyledButton bg="#37c087" width="90%" onPress={() => signIn('user')}>
          <SText size="20px" color="#ffffff">
            Login
          </SText>
        </StyledButton>
      </Content>
    </Content>
  );
};

export default Login;
