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
  ContentButton,
  StyledButton,
  colors,
} from '../../Components/styledComponents';
import {
  NextIcon,
  LocationIcon,
  CorporationIcon,
  EmployeeIcon,
} from '../../Components/icons';
import {LastContributionIcon} from '../../Components/Vectors';

const {height, width} = Dimensions.get('window');

const LastContribution = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {contributions} = userData;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  // useEffect(() => {
  //   dispatch(getContri(userInfo.access_token));
  // }, []);

  const item = {
    id: 12,
    period: '2019-12-11',
    contributor: 'Artinict Soloutions',
    amount: 15000,
  };

  const employerRate = 0.6;
  const employeeRate = 0.4;

  return (
    <Content justify="center" vmargin={15}>
      <Content width="100%" justify="center">
        <LastContributionIcon size={height / 3} />
      </Content>
      <Content justify="flex-start" width="80%" align="center">
        <Content horizontal flex={0.2} justify="center">
          <LocationIcon
            size="25px"
            color={colors.primary}
            style={{marginRight: 10}}
          />
          <SText size="20px" color={colors.dark}>
            {new Date(item.period).toLocaleDateString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </SText>
        </Content>
        <Content horizontal flex={0.2} justify="center">
          <CorporationIcon
            size="25px"
            color={colors.primary}
            style={{marginRight: 10}}
          />
          <SText size="20px" color={colors.dark}>
            {item.contributor}
          </SText>
        </Content>

        <Content horizontal flex={0.2} justify="center">
          <Content horizontal justify="center">
            <CorporationIcon
              size="25px"
              color={colors.primary}
              style={{marginRight: 10}}
            />
            <SText size="20px" color={colors.dark}>
              {'\u20A6'}
              {item.amount * employerRate}
            </SText>
          </Content>
          <Content horizontal justify="center">
            <EmployeeIcon
              size="25px"
              color={colors.primary}
              style={{marginRight: 10}}
            />
            <SText size="20px" color={colors.dark}>
              {'\u20A6'}
              {item.amount * employeeRate}
            </SText>
          </Content>
        </Content>

        <SText size="25px" weight="700" color={colors.dark}>
          {'\u20A6'}
          {item.amount}
        </SText>
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(LastContribution);
