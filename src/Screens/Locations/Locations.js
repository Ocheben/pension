import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Dimensions, StatusBar, Linking} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {
  Content,
  SText,
  StyledButton,
  LogoImg,
  colors,
} from '../../Components/styledComponents';
import {
  Item,
  Icon,
  Label,
  List,
  ListItem,
  Text,
  Picker,
  Spinner,
} from 'native-base';
import {PersonIcon, LockIcon, LocationIcon} from '../../Components/icons';
import {getLocations} from '../../_store/actions/userActions';
import {states} from './data';
import NoDataIcon from '../../Components/Vectors/NoDataIcon';

const {height, width} = Dimensions.get('window');
const avatar = require('../../assets/img/avatar.png');

const Locations = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const [requestType, setRequestType] = useState(undefined);
  const {locations, loading} = userData;

  useEffect(() => {
    dispatch(getLocations('', userInfo.access_token));
  }, []);
  const handleChange = value => {
    setRequestType(value);
    dispatch(getLocations(value, userInfo.access_token));
  };

  const getDirections = address => {
    const query = address.replace(/,/g, '%2C').replace(/\s/g, '+');
    const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=';
    console.log(query);
    Linking.openURL(`${mapsUrl}${query}`);
  };

  return (
    // <View style={{backgroundColor: 'blue', flex: 1, justifyContent:'center'}}>
    //   <Text>Login</Text>
    //   <Button onPress={() => signIn('user')} title="Login" />
    // </View>
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Content
        flex={0}
        height={50}
        justify="space-evenly"
        align="center"
        style={{alignSelf: 'flex-start'}}>
        <Content width="90%">
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
              onValueChange={value => handleChange(value)}>
              <Picker.Item label="All" value="" />
              {states.map(item => (
                <Picker.Item key={item} label={item} value={item} />
              ))}
            </Picker>
          </Item>
        </Content>
      </Content>
      {loading === 'locations' ? (
        <View style={{height: height * 0.8}}>
          <Spinner color={colors.primary} />
        </View>
      ) : (
        <View style={{height: height * 0.8}}>
          <ScrollView>
            {Array.isArray(locations) && locations.length > 0 ? (
              <List style={{width: '100%'}}>
                {locations.map(item => (
                  <ListItem key={item.id}>
                    <Content horizontal align="center" justify="space-between">
                      <Content align="flex-start">
                        <SText color={colors.dark} size="20px" weight="700">
                          {item.name}
                        </SText>
                        <SText color={colors.dark} size="18px">
                          {item.address}
                        </SText>
                      </Content>
                      <TouchableOpacity
                        onPress={() => getDirections(item.address)}>
                        <LocationIcon color={colors.primary} size="25px" />
                      </TouchableOpacity>
                    </Content>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Content height={height * 0.7} justify="center">
                <NoDataIcon size={height * 0.25} />
                <SText color={colors.dark} size="20px">
                  No location found
                </SText>
              </Content>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(Locations);
