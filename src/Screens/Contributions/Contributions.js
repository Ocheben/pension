import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, ScrollView} from 'react-native';
import {Spinner, DatePicker, Icon} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
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
  CorporationIcon,
  EmployeeIcon,
  ClockIcon,
  LocationIcon,
  FilterIcon,
  ContributionIcon,
} from '../../Components/icons';
import {formatDate, formatFullDate, isoFormatDate} from '../../_helpers';
import NoDataIcon from '../../Components/Vectors/NoDataIcon';
import MonthPicker from '../../Components/MonthPicker';

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

const Contribution = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {contributions, loading} = userData;
  const [startdate, setStartdate] = useState(new Date());
  const [showStart, setShowstart] = useState(false);
  const [enddate, setEnddate] = useState(new Date());
  const [showEnd, setShowend] = useState(false);
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  useEffect(() => {
    dispatch(getContri(userInfo.access_token));
  }, []);

  return (
    <ScrollView>
      {loading === 'contributions' ? (
        <Content height={height * 0.8} flex={0} justify="center">
          <Spinner color={colors.primary} />
        </Content>
      ) : (
        <Content justify="space-evenly" align="center" vmargin={15} flex={6}>
          <Content horizontal width="90%" justify="space-between">
            <>
              <Content align="flex-start">
                <SText color="#777777" size="12px">
                  Start Date
                </SText>
                <MonthPicker setDate={setStartdate} selectedDate={startdate} />
                {/* <StyledButton
                  align="flex-start"
                  bg="#ffffff"
                  height="auto"
                  onPress={() => setShowstart(true)}>
                  <SText color={colors.dark} size="16px">
                    {formatFullDate(startdate)}
                  </SText>
                </StyledButton> */}
              </Content>
              {/* {showStart && (
                <DateTimePicker
                  value={startdate}
                  mode="date"
                  display="default"
                  onChange={(event, date) => {
                    setShowstart(false);
                    setStartdate(date || startdate);
                  }}
                />
              )} */}
            </>
            <>
              <Content align="flex-start">
                <SText color="#777777" size="12px">
                  End Date
                </SText>
                <MonthPicker setDate={setEnddate} selectedDate={enddate} />
                {/* <StyledButton
                  align="flex-start"
                  bg="#ffffff"
                  height="auto"
                  onPress={() => setShowend(true)}>
                  <SText color={colors.dark} size="16px">
                    {formatFullDate(enddate)}
                  </SText>
                </StyledButton> */}
              </Content>
              {/* {showEnd && (
                <DateTimePicker
                  value={enddate}
                  mode="date"
                  display="default"
                  onChange={(event, date) => {
                    setShowend(false);
                    setEnddate(date || enddate);
                  }}
                />
              )} */}
            </>
            <StyledButton
              curved
              bg={colors.primary}
              height="30px"
              width="40px"
              onPress={() =>
                dispatch(
                  getContri(
                    userInfo.access_token,
                    isoFormatDate(startdate),
                    isoFormatDate(enddate),
                  ),
                )
              }>
              <FilterIcon color="#ffffff" size="20px" />
            </StyledButton>
          </Content>
          {Array.isArray(contributions) && contributions.length > 0 ? (
            contributions.map(item => (
              // ? itemArray.map(item => (
              <ContentButton
                key={item.sequence}
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
                    {formatDate(item.period)}
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
                            value={parseInt(item.ver || 0, 10)}
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
                    parseInt(item.vv || 0, 10) +
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
                No contributions found
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

export default connect(mapStateToProps)(Contribution);
