import React, {useState} from 'react';
import {View, StatusBar, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Textarea,
  Toast,
  Spinner,
} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Content,
  SText,
  StyledButton,
  colors,
} from '../../Components/styledComponents';
import {MenuIcon} from '../../Components/icons';
import {APIS, requestJwt, toastDefault} from '../../_services';

const Requests = props => {
  const {navigation, dispatch, userInfo} = props;
  const {height, width} = Dimensions.get('window');
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = useState(undefined);
  const [preferredResponse, setPreferredResponse] = useState(undefined);
  const [requestBody, setRequestBody] = useState('');

  const handleSubmit = async () => {
    const {
      baseUrl,
      createRequest: {method, path},
    } = APIS;
    console.log(path);
    const submitUrl = `${baseUrl}${path}`;

    setLoading(true);
    const data = {
      application_type: requestType,
      request: new Date().toISOString().split('T')[0],
      prefered_response: preferredResponse,
      remarks: requestBody,
      response: 'nil',
      status: 'nil',
    };
    const response = await requestJwt(
      method,
      submitUrl,
      data,
      userInfo.access_token,
    );
    console.log(response, method, submitUrl, data);
    Toast.show({
      ...toastDefault,
      text: 'You have successfully created request',
      type: 'success',
    });
    setLoading(false);
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{flexGrow: 1}}>
      <Content>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Content flex={1} justify="center" align="center">
          <Content width="90%" flex={0.2} align="center">
            <Item picker>
              <Label>Request Type</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={requestType}
                onValueChange={value => setRequestType(value)}>
                <Picker.Item label="Contributions" value="contributions" />
                <Picker.Item label="RSA Statement" value="rsa" />
              </Picker>
            </Item>
          </Content>
          <Content
            width="90%"
            flex={0.2}
            justify="center"
            align="center"
            horizontal>
            <Item picker>
              <Label>Preferred Response</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={preferredResponse}
                onValueChange={value => setPreferredResponse(value)}>
                <Picker.Item label="SMS" value="sms" />
                <Picker.Item label="Email" value="email" />
                <Picker.Item label="Phone" value="phone" />
              </Picker>
            </Item>
          </Content>
          <Content width="90%" flex={0.2} justify="flex-start">
            <Textarea
              rowSpan={5}
              style={{width: '100%'}}
              bordered
              placeholder="Request"
              value={requestBody}
              onChangeText={text => setRequestBody(text)}
            />
          </Content>
          <Content width="90%" flex={0.2} justify="center" horizontal>
            <StyledButton
              curved
              bg={colors.primary}
              width="90%"
              disabled={
                requestType === undefined || preferredResponse === undefined
              }
              onPress={() => handleSubmit()}>
              {loading ? (
                <Spinner color="#ffffff" />
              ) : (
                <SText size="20px" color="#ffffff">
                  Submit
                </SText>
              )}
            </StyledButton>
          </Content>
        </Content>
      </Content>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  // userData: state.userData,
});

export default connect(mapStateToProps)(Requests);
