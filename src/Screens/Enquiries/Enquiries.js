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
import {
  BalanceIcon,
  RsaIcon,
  LastContributionIcon,
  OfficerIcon,
  LostCoinIcon,
} from '../../Components/Vectors';

const {height, width} = Dimensions.get('window');

const Enquiries = props => {
  const {navigation, dispatch, userInfo, userData} = props;
  const {contributions} = userData;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  useEffect(() => {
    dispatch(getContri(userInfo.access_token));
  }, []);

  return (
    <ScrollView>
      <Content justify="space-evenly" vmargin={15} flex={6}>
        <Content flex={1} width="100%" justify="flex-start">
          <List style={{width: '100%'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AccountBalance')}>
              <ListItem>
                <Content horizontal justify="space-between">
                  <Content horizontal justify="flex-start" align="center">
                    <BalanceIcon size={width / 6} />
                    <Content hmargin={10} align="flex-start">
                      <SText color="#333333" weight="600">
                        Check Account Balance
                      </SText>
                    </Content>
                  </Content>
                  <NextIcon color={colors.primary} size="20px" />
                </Content>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RsaStatement')}>
              <ListItem>
                <Content horizontal justify="space-between">
                  <Content horizontal justify="flex-start" align="center">
                    <RsaIcon size={width / 6} />
                    <Content hmargin={10} align="flex-start">
                      <SText color="#333333" weight="600">
                        Rsa Statement
                      </SText>
                    </Content>
                  </Content>
                  <NextIcon color={colors.primary} size="20px" />
                </Content>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('LastContribution')}>
              <ListItem>
                <Content horizontal justify="space-between">
                  <Content horizontal justify="flex-start" align="center">
                    <LastContributionIcon size={width / 6} />
                    <Content hmargin={10} align="flex-start">
                      <SText color="#333333" weight="600">
                        Last Contribution
                      </SText>
                    </Content>
                  </Content>
                  <NextIcon color={colors.primary} size="20px" />
                </Content>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AccountOfficer')}>
              <ListItem>
                <Content horizontal justify="space-between">
                  <Content horizontal justify="flex-start" align="center">
                    <OfficerIcon size={width / 6} />
                    <Content hmargin={10} align="flex-start">
                      <SText color="#333333" weight="600">
                        Account Officer
                      </SText>
                    </Content>
                  </Content>
                  <NextIcon color={colors.primary} size="20px" />
                </Content>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MissingContribution')}>
              <ListItem>
                <Content horizontal justify="space-between">
                  <Content horizontal justify="flex-start" align="center">
                    <LostCoinIcon size={width / 6} />
                    <Content hmargin={10} align="flex-start">
                      <SText color="#333333" weight="600">
                        Check Missong Contribution
                      </SText>
                    </Content>
                  </Content>
                  <NextIcon color={colors.primary} size="20px" />
                </Content>
              </ListItem>
            </TouchableOpacity>
          </List>
        </Content>
      </Content>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(Enquiries);
