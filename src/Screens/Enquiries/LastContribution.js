import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, ScrollView} from 'react-native';
import {List, ListItem, Icon, Toast} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
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
  ContributionIcon,
} from '../../Components/icons';
import {LastContributionIcon} from '../../Components/Vectors';
import {APIS, requestJwt, toastDefault} from '../../_services';
import {formatDate} from '../../_helpers';

const {height, width} = Dimensions.get('window');

const LastContribution = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {
    dashboard: {lastContribution},
  } = userData;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

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
            {formatDate(lastContribution.period)}
          </SText>
        </Content>
        <Content horizontal flex={0.2} justify="center">
          <CorporationIcon
            size="25px"
            color={colors.primary}
            style={{marginRight: 10}}
          />
          <SText size="20px" color={colors.dark}>
            {lastContribution.contributor || ''}
          </SText>
        </Content>

        <Content horizontal flex={0.2} justify="center">
          <Content horizontal justify="center">
            <CorporationIcon
              size="25px"
              color={colors.primary}
              style={{marginRight: 10}}
            />
            <NumberFormat
              value={parseInt(lastContribution.er || 0, 10)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'\u20A6'}
              renderText={value => (
                <SText size="20px" color={colors.dark}>
                  {value}
                </SText>
              )}
            />
          </Content>
          <Content horizontal justify="center">
            <EmployeeIcon
              size="25px"
              color={colors.primary}
              style={{marginRight: 10}}
            />
            <NumberFormat
              value={parseInt(lastContribution.ee || 0, 10)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'\u20A6'}
              renderText={value => (
                <SText size="20px" color={colors.dark}>
                  {value}
                </SText>
              )}
            />
          </Content>
        </Content>
        <Content horizontal flex={0.2} justify="center">
          <ContributionIcon
            size="25px"
            color={colors.primary}
            style={{marginRight: 10}}
          />
          <NumberFormat
            value={parseInt(lastContribution.vv || 0, 10)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'\u20A6'}
            renderText={value => (
              <SText size="20px" color={colors.dark}>
                {value}
              </SText>
            )}
          />
        </Content>

        <NumberFormat
          value={
            parseInt(lastContribution.ee || 0, 10) +
            parseInt(lastContribution.er || 0, 10) +
            parseInt(lastContribution.vv || 0, 10)
          }
          displayType={'text'}
          thousandSeparator={true}
          prefix={'\u20A6'}
          renderText={value => (
            <SText size="25px" weight="700" color={colors.dark}>
              {value}
            </SText>
          )}
        />
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(LastContribution);
