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
import {NextIcon} from '../../Components/icons';
import {RsaIcon} from '../../Components/Vectors';

const {height, width} = Dimensions.get('window');

const RsaStatement = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {contributions} = userData;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  // useEffect(() => {
  //   dispatch(getCo<RsaIcon size={height / 3} />ntri(userInfo.access_token));
  // }, []);

  return (
    <Content justify="center" vmargin={15}>
      <Content width="100%" justify="center">
        <RsaIcon size={height / 3} />
      </Content>
      <Content justify="flex-start" width="60%">
        <SText color="#444444" size="20px" align="center">
          Your RSA Statement has been sent to
        </SText>
        <SText color="#444444" size={width * 0.06} weight="700" align="center">
          j**k@mpensions.com
        </SText>
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(RsaStatement);
