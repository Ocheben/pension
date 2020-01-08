import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, StatusBar} from 'react-native';
import {
  Content,
  SText,
  StyledButton,
  SNInput,
  LogoImg,
  colors,
} from '../../Components/styledComponents';
import {Item, Input, Icon, Label, Toast, Spinner} from 'native-base';
import {PersonIcon, LockIcon} from '../../Components/icons';
import {APIS, request, toastDefault} from '../../_services';

const {height, width} = Dimensions.get('window');
const avatar = require('../../assets/img/avatar.png');

const ChangePassword = props => {
  const {navigation, userData, userInfo} = props;
  const {
    dashboard: {
      user: {email},
    },
  } = userData;
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {

  })

  const getToken = async () => {
    const {
      baseUrl,
      changePassword: {method, path},
    } = APIS;
    console.log(path);
    const submitUrl = `${baseUrl}${path}`;

    setLoading(true);
    const data = {
      email,
      password: newPassword,
      password_confirmation: confirmPassword,
      token: userInfo.access_token,
    };
    const response = await request(method, submitUrl, data);
    console.log(response, method, submitUrl, data);
    if (typeof response !== 'object') {
      // Toast.show({
      //   ...toastDefault,
      //   text: 'You have successfully changed your Password',
      //   type: 'success',
      // });
      setLoading(false);
    } else if (typeof response === 'object') {
      Toast.show({
        ...toastDefault,
        text: response.error,
        type: 'danger',
      });
    } else {
      console.log(response);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    const {
      baseUrl,
      changePassword: {method, path},
    } = APIS;
    console.log(path);
    const submitUrl = `${baseUrl}${path}`;

    setLoading(true);
    const data = {
      email,
      password: newPassword,
      password_confirmation: confirmPassword,
      token: userInfo.access_token,
    };
    const response = await request(method, submitUrl, data);
    console.log(response, method, submitUrl, data);
    if (typeof response !== 'object') {
      Toast.show({
        ...toastDefault,
        text: 'You have successfully changed your Password',
        type: 'success',
      });
      setLoading(false);
    } else if (typeof response === 'object') {
      Toast.show({
        ...toastDefault,
        text: response.error,
        type: 'danger',
      });
    } else {
      console.log(response);
    }
    setLoading(false);
  };
  return (
    // <View style={{backgroundColor: 'blue', flex: 1, justifyContent:'center'}}>
    //   <Text>Login</Text>
    //   <Button onPress={() => signIn('user')} title="Login" />
    // </View>
    <Content>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Content flex={1} justify="center">
        <Content flex={1} width="90%">
          <Item style={{marginBottom: 15}}>
            <LockIcon color={colors.primary} size={30} />
            <SNInput
              floatingLabel
              placeholder="Old Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </Item>
          <Item>
            <LockIcon color={colors.primary} size={30} />
            <SNInput
              floatingLabel
              placeholder="New Password"
              value={newPassword}
              onChangeText={text => setNewPassword(text)}
            />
          </Item>
          <Item style={{marginBottom: 15}}>
            <LockIcon color={colors.primary} size={30} />
            <SNInput
              floatingLabel
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </Item>
        </Content>
        <Content vmargin={10} flex={1} justify="space-between">
          <StyledButton
            bg={colors.primary}
            curved
            width="90%"
            disabled={newPassword === '' || newPassword !== confirmPassword}
            onPress={() => handleSubmit()}>
            {loading ? (
              <Spinner color="#ffffff" />
            ) : (
              <SText size="20px" color="#ffffff">
                Change Password
              </SText>
            )}
          </StyledButton>
        </Content>
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(ChangePassword);
