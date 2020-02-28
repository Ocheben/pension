import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, ScrollView, Linking, Platform} from 'react-native';
import {List, ListItem, Icon, Spinner} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onSignOut} from '../../_services';
import {getOfficer} from '../../_store/actions/userActions';
import {
  SText,
  Content,
  LogoImg,
  ContentButton,
  StyledButton,
  colors,
} from '../../Components/styledComponents';
import {NextIcon, LocationIcon, PersonIcon, AtIcon, PhoneIcon, SMSIcon} from '../../Components/icons';
import {OfficerIcon} from '../../Components/Vectors';

const {height, width} = Dimensions.get('window');
const avatar = require('../../assets/img/avatar.png');

const AccountOfficer = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {loading, officer} = userData;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  useEffect(() => {
    dispatch(getOfficer(userInfo.access_token));
  }, [dispatch, userInfo.access_token]);

  const makeCall = () => {
    let phoneNumber = '';
    const androidPrefix = 'tel:${';
    const iosPrefix = 'telprompt:${';

    if (Platform.OS === 'android') {
      phoneNumber = androidPrefix + officer.phone + '}';
    } else {
      phoneNumber = iosPrefix + officer.phone + '}';
    }

    Linking.openURL(phoneNumber);
  };

  const sendSms = () => {
    let phoneNumber = `sms:${officer.phone}`;
    Linking.openURL(phoneNumber);
  };
  return (
    <Content justify="flex-start" vmargin={15}>
      <Content width="100%" justify="flex-start">
        <OfficerIcon size={height / 3} />
      </Content>
      {loading === 'accountOfficer' ? (
        <Content justify="center">
          <Spinner color={colors.primary} />
        </Content>
      ) : (
        <>
          <Content justify="flex-start" flex={1} width="80%" height="auto">
            <SText size="30px" weight="700" color="#444444">
              {`${officer.firstname || ''} ${officer.surname || ''}`}
            </SText>
            <Content horizontal justify="flex-start" align="center">
              <PhoneIcon
                size="25px"
                color={colors.primary}
                style={{marginRight: 10}}
              />
              <SText size="20px" color={colors.dark}>
                {officer.phone || ''}
              </SText>
            </Content>
            <Content horizontal justify="flex-start" align="center">
              <AtIcon
                size="25px"
                color={colors.primary}
                style={{marginRight: 10}}
              />
              <SText size="20px" color={colors.dark}>
                {officer.email || ''}
              </SText>
            </Content>
            <Content horizontal justify="flex-start">
              <LocationIcon
                size="25px"
                color={colors.primary}
                style={{marginRight: 10}}
              />
              <SText size="20px" color={colors.dark}>
                {officer.address || ''}
              </SText>
            </Content>
          </Content>
          <Content horizontal justify="space-around" align="center">
            <StyledButton curved bg={colors.primary} width="30%" onPress={() => makeCall()}>
              <Content horizontal>
                <PhoneIcon
                  size="25px"
                  color="#ffffff"
                  style={{marginRight: 10}}
                />
                <SText size="20px" color="#ffffff">
                  Call
                </SText>
              </Content>
            </StyledButton>
            <StyledButton curved bg={colors.primary} width="30%" onPress={() => sendSms()}>
              <Content horizontal>
                <SMSIcon
                  size="25px"
                  color="#ffffff"
                  style={{marginRight: 10}}
                />
                <SText size="20px" color="#ffffff">
                  SMS
                </SText>
              </Content>
            </StyledButton>
          </Content>
        </>
      )}
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(AccountOfficer);
