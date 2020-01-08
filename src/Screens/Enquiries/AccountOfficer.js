import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, ScrollView} from 'react-native';
import {List, ListItem, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onSignOut} from '../../_services';
import {getContri} from '../../_store/actions/userActions';
import {
  SText,
  Content,
  LogoImg,
  ContentButton,
  StyledButton,
  colors,
} from '../../Components/styledComponents';
import {NextIcon, LocationIcon, PersonIcon} from '../../Components/icons';
import {OfficerIcon} from '../../Components/Vectors';

const {height, width} = Dimensions.get('window');
const avatar = require('../../assets/img/avatar.png');

const AccountOfficer = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {contributions} = userData;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  // useEffect(() => {
  //   dispatch(getContri(userInfo.access_token));
  // }, []);

  return (
    <Content justify="center" vmargin={15}>
      <Content width="100%" justify="center">
        {/* <OfficerIcon size={height / 3} /> */}
        <LogoImg
          source={avatar}
          width={width * 0.3}
          height={height * 0.3}
          resizeMode="contain"
        />
        <SText size="30px" weight="700" color="#444444">
          Joe Jackson
        </SText>
      </Content>
      <Content justify="flex-start" flex={0.4} width="60%" height="auto">
        <Content horizontal justify="flex-start">
          <LocationIcon
            size="25px"
            color={colors.primary}
            style={{marginRight: 10}}
          />
          <SText size="20px" color={colors.dark}>
            Wuse Zone 5, Abuja
          </SText>
        </Content>
        <Content horizontal justify="center" align="center">
          <PersonIcon
            size="25px"
            color={colors.primary}
            style={{marginRight: 10}}
          />
          <SText size="20px" color={colors.dark}>
            0803 465 3425
          </SText>
        </Content>
      </Content>
      <Content horizontal justify="space-around" align="center">
        <StyledButton curved bg={colors.primary} width="30%">
          <SText size="20px" color="#ffffff">
            Call
          </SText>
        </StyledButton>
        <StyledButton curved bg={colors.primary} width="30%">
          <SText size="20px" color="#ffffff">
            SMS
          </SText>
        </StyledButton>
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(AccountOfficer);
