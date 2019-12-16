import React, {useState} from 'react';
import {View, StatusBar, Dimensions} from 'react-native';;
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Item, Input, Label, Picker, Icon, Textarea} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Content,
  SText,
  StyledButton,
  colors,
} from '../../Components/styledComponents';
import {MenuIcon} from '../../Components/icons';

const Requests = props => {
  const {navigation} = props;
  const {height, width} = Dimensions.get('window');
  const [requestType, setRequestType] = useState(undefined);
  const [preferredResponse, setPreferredResponse] = useState(undefined);
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
                <Picker.Item label="Change of Name" value="key0" />
                <Picker.Item label="Account Balance" value="key1" />
                <Picker.Item label="Funds" value="key2" />
              </Picker>
            </Item>
          </Content>
          <Content width="90%" flex={0.2} justify="flex-start">
            <Textarea
              rowSpan={5}
              style={{width: '100%'}}
              bordered
              placeholder="Request"
            />
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
                <Picker.Item label="SMS" value="key0" />
                <Picker.Item label="Email" value="key1" />
                <Picker.Item label="Phone" value="key2" />
              </Picker>
            </Item>
          </Content>
          <Content width="90%" flex={0.2} justify="center" horizontal>
            <StyledButton
              bg={colors.primary}
              width="80%"
              // onPress={() => signIn('user')}
            >
              <SText size="20px" color="#ffffff">
                Calculate
              </SText>
            </StyledButton>
          </Content>
        </Content>
      </Content>
    </KeyboardAwareScrollView>
  );
};

export default Requests;
