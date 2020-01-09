import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, ScrollView} from 'react-native';
import {List, ListItem, Icon, Spinner} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onSignOut} from '../../_services';
import {getContri, getAccBal} from '../../_store/actions/userActions';
import {
  SText,
  Content,
  ContentButton,
  StyledButton,
  colors,
} from '../../Components/styledComponents';
import {BalanceIcon} from '../../Components/Vectors';

const {height, width} = Dimensions.get('window');

const AccountBalance = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {contributions, loading, accountBalance} = userData;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  useEffect(() => {
    dispatch(getAccBal(userInfo.access_token));
  }, [dispatch, userInfo.access_token]);

  return (
    <Content justify="center" vmargin={15}>
      <Content width="100%" justify="center">
        <BalanceIcon size={height / 3} />
      </Content>
      <Content justify="flex-start">
        <SText color="#444444" size={width * 0.06} align="center">
          Your account balance is:
        </SText>
        {loading !== 'accountBalance' ? (
          <SText color="#444444" size="30px" weight="700" align="center">
            {'\u20A6'}
            {accountBalance.split('.')[0]}
            {/* 12,000 */}
          </SText>
        ) : (
          <Spinner color={colors.primary} />
        )}
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(AccountBalance);
