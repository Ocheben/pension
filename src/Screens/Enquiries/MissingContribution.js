import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, ScrollView} from 'react-native';
import {List, ListItem, Icon, Spinner} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
import {onSignOut} from '../../_services';
import {getMissing} from '../../_store/actions/userActions';
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
import {LostCoinIcon} from '../../Components/Vectors';
import {formatDate} from '../../_helpers';
import NoDataIcon from '../../Components/Vectors/NoDataIcon';

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
  const {missing, loading} = userData;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  useEffect(() => {
    dispatch(getMissing(userInfo.access_token));
  }, []);

  return (
    <ScrollView>
      {loading === 'missingContributions' ? (
        <Content height={height * 0.7} justify="center">
          <Spinner color={colors.primary} />
        </Content>
      ) : (
        <Content justify="space-evenly" vmargin={15} flex={6}>
          {/* <Content flex={0.4} width="100%" justify="flex-start">
          <LostCoinIcon size={height / 5} />
        </Content> */}
          {Array.isArray(missing) && missing.length > 0 ? (
            missing.map(item => (
              // ? itemArray.map(item => (
              <ContentButton
                key={item.period}
                // onPress={() =>
                //   navigation.navigate('ContributionItem', {
                //     contributionInfo: item,
                //   })
                // }
                bg="#ffffff"
                ribbon
                vmargin={10}
                vpadding={10}
                shadow
                height={item.vv || item.vee ? height * 0.28 : height * 0.22}
                borderR={10}
                width="93%"
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
                    {item.period}
                  </SText>
                </Content>
                <Content horizontal justify="flex-start">
                  <CorporationIcon
                    size="25px"
                    color={colors.primary}
                    style={{marginRight: 10}}
                  />
                  <SText size="20px" color={colors.dark}>
                    {item.organization}
                  </SText>
                </Content>

                <Content horizontal justify="space-between">
                  <Content horizontal justify="flex-start">
                    <CorporationIcon
                      size="25px"
                      color={colors.primary}
                      style={{marginRight: 10}}
                    />
                    <NumberFormat
                      value={parseInt(item.er || 0, 10)}
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
                  <Content horizontal justify="flex-start">
                    <EmployeeIcon
                      size="25px"
                      color={colors.primary}
                      style={{marginRight: 10}}
                    />
                    <NumberFormat
                      value={parseInt(item.ee || 0, 10)}
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

                {(item.vv || item.vee) && (
                  <Content horizontal justify="space-between">
                    <Content horizontal justify="flex-start">
                      {item.vv && (
                        <>
                          <ContributionIcon
                            size="25px"
                            color={colors.primary}
                            style={{marginRight: 10}}
                          />
                          <NumberFormat
                            value={parseInt(item.vv || 0, 10)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'\u20A6'}
                            renderText={value => (
                              <SText size="20px" color={colors.dark}>
                                {value}
                              </SText>
                            )}
                          />
                        </>
                      )}
                    </Content>
                    <Content horizontal justify="flex-start">
                      {item.vee && (
                        <>
                          <EmployeeIcon
                            size="25px"
                            color={colors.primary}
                            style={{marginRight: 10}}
                          />
                          <NumberFormat
                            value={parseInt(item.vee || 0, 10)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'\u20A6'}
                            renderText={value => (
                              <SText size="20px" color={colors.dark}>
                                {value}
                              </SText>
                            )}
                          />
                        </>
                      )}
                    </Content>
                  </Content>
                )}
                <NumberFormat
                  value={
                    parseInt(item.ee || 0, 10) +
                    parseInt(item.er || 0, 10) +
                    parseInt(item.vee || 0, 10) +
                    parseInt(item.ver || 0, 10)
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
              </ContentButton>
            ))
          ) : (
            <Content height={height * 0.7} justify="center">
              <NoDataIcon size={height * 0.25} />
              <SText color={colors.dark} size="20px">
                No missing contributions found
              </SText>
            </Content>
          )}
        </Content>
      )}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(MissingContribution);
