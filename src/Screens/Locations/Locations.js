import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Dimensions, StatusBar} from 'react-native';
import {
  Content,
  SText,
  StyledButton,
  LogoImg,
  colors,
} from '../../Components/styledComponents';
import {Item, Icon, Label, List, ListItem, Text, Picker} from 'native-base';
import {PersonIcon, LockIcon} from '../../Components/icons';
import {getLocations} from '../../_store/actions/userActions';

const {height, width} = Dimensions.get('window');
const avatar = require('../../assets/img/avatar.png');

const Locations = props => {
  const {navigation, dispatch, userInfo} = props;
  const [requestType, setRequestType] = useState(undefined);

  useEffect(() => {
    dispatch(getLocations(userInfo.access_token));
  },[]);
  return (
    // <View style={{backgroundColor: 'blue', flex: 1, justifyContent:'center'}}>
    //   <Text>Login</Text>
    //   <Button onPress={() => signIn('user')} title="Login" />
    // </View>
    <Content justify="flex-start">
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Content width="90%" flex={0.2} justify="space-evenly">
        <Item picker>
          <Label>State</Label>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            placeholder="Select your SIM"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue={requestType}
            onValueChange={value => setRequestType(value)}>
            <Picker.Item label="Abuja" value="key0" />
            <Picker.Item label="Logos" value="key1" />
            <Picker.Item label="Port Harcourt" value="key2" />
            <Picker.Item label="Enugu" value="key3" />
            <Picker.Item label="Calabar" value="key4" />
          </Picker>
        </Item>
      </Content>
      <Content flex={0.8} width="100%" justify="flex-start">
        <List style={{width: '100%'}}>
          <ListItem>
            <Text>Plot 21, Regal Street, Wuye Abuja</Text>
          </ListItem>
          <ListItem>
            <Text>Plot 18, Royal Street, Garki, Abuja</Text>
          </ListItem>
          <ListItem>
            <Text>Plot 1, Lane Street, Wuse, Abuja</Text>
          </ListItem>
          <ListItem>
            <Text>Plot 19, Wole Soyinka Street, Gwarimpa, Abuja</Text>
          </ListItem>
          <ListItem>
            <Text>Plot 18, Royal Street, Jabi, Abuja</Text>
          </ListItem>
          <ListItem>
            <Text>Plot 12, Conakry Street, Lugbe, Abuja</Text>
          </ListItem>
        </List>
      </Content>
    </Content>
  );
};
const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(Locations);
