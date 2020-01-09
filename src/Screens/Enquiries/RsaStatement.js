import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, Dimensions, ScrollView} from 'react-native';
import {List, ListItem, Icon, Toast, Spinner} from 'native-base';
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
import {NextIcon} from '../../Components/icons';
import {RsaIcon} from '../../Components/Vectors';
import {APIS, requestJwt, toastDefault} from '../../_services';

const {height, width} = Dimensions.get('window');

const RsaStatement = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {
    dashboard: {
      user: {email},
    },
  } = userData;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  useEffect(() => {
    requestRsa();
  }, []);

  const requestRsa = async () => {
    setLoading(true);
    const {
      baseUrl,
      getEnquiry: {method, path},
    } = APIS;
    const url = `${baseUrl}${path('rsa_statement')}`;
    const response = await requestJwt(method, url, {}, userInfo.access_token);
    if (response) {
      setStatus(true);
    } else {
      setStatus(false);
      Toast.show({
        ...toastDefault,
        text: 'There might be a problem with your connection',
        type: 'danger',
      });
    }
    setLoading(false);
  };

  return (
    <Content justify="center" vmargin={15}>
      <Content width="100%" justify="center">
        <RsaIcon size={height / 3} />
      </Content>
      <Content justify="flex-start" width="70%">
        {loading ? (
          <>
            <SText color="#444444" size="20px" align="center">
              Requesting...
            </SText>
            <Spinner color={colors.primary} />
          </>
        ) : status ? (
          <>
            <SText color="#444444" size="20px" align="center">
              Your RSA Statement has been sent to
            </SText>
            <SText
              color="#444444"
              size={width * 0.06}
              weight="700"
              align="center">
              {email}
            </SText>
          </>
        ) : (
          <>
            <SText color="#444444" size="20px" align="center">
              Something went wrong
            </SText>
            <StyledButton
              curved
              bg={colors.primary}
              width="90%"
              onPress={() => requestRsa()}>
              {loading ? (
                <Spinner color="#ffffff" />
              ) : (
                <SText size="20px" color="#ffffff">
                  Try Again
                </SText>
              )}
            </StyledButton>
          </>
        )}
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(RsaStatement);
