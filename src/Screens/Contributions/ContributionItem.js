import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Content, SText, colors} from '../../Components/styledComponents';

const ContributionItem = props => {
  const {navigation, userData} = props;
  const {
    rates: {employeeRate, employerRate},
  } = userData;
  const contributionInfo = navigation.getParam('contributionInfo');
  const {contributor, period, amount} = contributionInfo;
  return (
    <Content flex={0.5} justify="flex-start" align="center">
      <Content width="90%" align="flex-start">
        <SText size="25px" color={colors.dark} weight="700">
          {contributor}
        </SText>
      </Content>
      <Content width="90%" justify="flex-start" horizontal>
        <SText size="20px" color={colors.dark}>
          Employee:{' '}
        </SText>
        <SText size="20px" color={colors.dark} weight="700">
          {'\u20A6'}
          {amount * employeeRate}
        </SText>
      </Content>
      <Content width="90%" justify="flex-start" horizontal>
        <SText size="20px" color={colors.dark}>
          Employer:{' '}
        </SText>
        <SText size="20px" color={colors.dark} weight="700">
          {'\u20A6'}
          {amount * employerRate}
        </SText>
      </Content>
      <Content width="90%" justify="flex-start" horizontal>
        <SText size="20px" color={colors.dark}>
          Period:{' '}
        </SText>
        <SText size="20px" color={colors.dark} weight="700">
          {new Date(period).toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </SText>
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(ContributionItem);
