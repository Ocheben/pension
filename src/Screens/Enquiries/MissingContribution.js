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
import {NextIcon, LocationIcon, CorporationIcon, EmployeeIcon} from '../../Components/icons';
import {LostCoinIcon} from '../../Components/Vectors';

const {height, width} = Dimensions.get('window');

const itemArray = [
  {
    id: 12,
    period: '2019-12-11',
    contributor: 'Artinict Soloutions',
    amount: 15000,
  },
  {
    id: 14,
    period: '2019-11-11',
    contributor: 'Artinict Soloutions',
    amount: 15000,
  },
  {
    id: 13,
    period: '2019-10-11',
    contributor: 'Artinict Soloutions',
    amount: 15000,
  },
];

const employerRate = 0.6;
const employeeRate = 0.4;

const MissingContribution = props => {
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
    <ScrollView>
      <Content justify="space-evenly" vmargin={15} flex={6}>
        {/* <Content flex={0.4} width="100%" justify="flex-start">
          <LostCoinIcon size={height / 5} />
        </Content> */}
        {itemArray.map(item => (
          <ContentButton
            key={item.id}
            bg="#ffffff"
            ribbon
            vmargin={10}
            vpadding={10}
            shadow
            height={height * 0.22}
            borderR={10}
            width="90%"
            align="flex-start"
            hpadding={width / 20}
            justify="space-around">
            <Content horizontal justify="flex-start">
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
            <Content horizontal justify="flex-start">
              <CorporationIcon
                size="25px"
                color={colors.primary}
                style={{marginRight: 10}}
              />
              <SText size="20px" color={colors.dark}>
                {item.contributor}
              </SText>
            </Content>

            <Content horizontal justify="space-between">
              <Content horizontal justify="flex-start">
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
              <Content horizontal justify="flex-start">
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
          </ContentButton>
        ))}
      </Content>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(MissingContribution);
