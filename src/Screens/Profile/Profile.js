import React, {useState} from 'react';
import {View, Button, Text, Dimensions, StatusBar} from 'react-native';
import {
  Content,
  SText,
  StyledButton,
  LogoImg,
  colors,
} from '../../Components/styledComponents';
import {Item, Input, Icon, Label} from 'native-base';
import {PersonIcon, LockIcon} from '../../Components/icons';

const {height, width} = Dimensions.get('window');
const avatar = require('../../assets/img/avatar.png');

const Profile = props => {
  const {navigation} = props;
  return (
    // <View style={{backgroundColor: 'blue', flex: 1, justifyContent:'center'}}>
    //   <Text>Login</Text>
    //   <Button onPress={() => signIn('user')} title="Login" />
    // </View>
    <Content>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Content flex={0.2} justify="space-evenly">
        <LogoImg
          source={avatar}
          width={width * 0.2}
          height={height * 0.2}
          resizeMode="contain"
        />
        <SText size="22px" weight="700" color="#444444">
          Joe Jackson
        </SText>
      </Content>
      <Content flex={0.3} width="90%">
        <Item style={{marginBottom: 15}}>
          <PersonIcon color={colors.primary} size={30} />
          <Input
            floatingLabel
            placeholder="Email/Phone"
            value="ocheben@gmail.com"
          />
        </Item>
        <Item>
          <PersonIcon color={colors.primary} size={30} />
          <Input floatingLabel placeholder="Phone" value="08034846400" />
        </Item>
      </Content>
      <Content flex={0.25} justify="space-between">
        <StyledButton curved bg={colors.primary} width="90%">
          <SText size="20px" color="#ffffff">
            Update
          </SText>
        </StyledButton>
        <StyledButton
          curved
          bg={colors.primary}
          width="90%"
          onPress={() => navigation.navigate('ChangePassword')}>
          <SText size="20px" color="#ffffff">
            Change Password
          </SText>
        </StyledButton>
      </Content>
    </Content>
  );
};

export default Profile;
