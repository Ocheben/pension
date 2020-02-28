import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StatusBar, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Item, Input, Label, Toast, Spinner} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NumberFormat from 'react-number-format';
import {
  Content,
  SText,
  StyledButton,
  SNInput,
  colors,
} from '../../Components/styledComponents';
import {MenuIcon} from '../../Components/icons';
import {APIS, request, toastDefault, requestJwt} from '../../_services';

const PenCalc = props => {
  const {navigation, userInfo} = props;
  const {height, width} = Dimensions.get('window');
  const [formInputs, setFormInputs] = useState({});
  const [promotion, setPromotion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const submit = async () => {
    const {
      baseUrl,
      calcPension: {method, path},
    } = APIS;
    const url = `${baseUrl}${path}`;
    setLoading(true);
    const data = {
      ...formInputs,
      annual_growth_rate: parseInt(formInputs.annual_growth_rate, 10) / 100,
    };
    const response = await requestJwt(method, url, data, userInfo.access_token);
    console.log(response, data, url, method);
    if (response.total) {
      setResult(response);
    } else {
      Toast.show({
        ...toastDefault,
        text: 'Unable to calculate pension. Try again',
        type: 'danger',
      });
    }
    setLoading(false);
  };

  const setRate = text => {
    if (parseInt(text, 10) > 100) return;
    setFormInputs(prev => ({...prev, annual_growth_rate: text}));
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{flexGrow: 1}}>
      <View>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View style={{alignItems: 'center'}}>
          <SText color={colors.dark} size="16px" vmargin={20}>
            Get an estimate of your pension at retirement.
          </SText>
          <Content width="90%" vmargin={10} flex={0} align="center">
            <Item floatingLabel>
              <Label>Current Age</Label>
              <Input
                name="current_age"
                keyboardType="number-pad"
                value={formInputs.current_age || ''}
                onChangeText={text =>
                  setFormInputs(prev => ({...prev, current_age: text}))
                }
              />
            </Item>
          </Content>
          <Content width="90%" vmargin={10} flex={0} align="center">
            <Item floatingLabel>
              <Label>Retirement Age</Label>
              <Input
                name="retirement_age"
                keyboardType="number-pad"
                value={formInputs.retirement_age || ''}
                onChangeText={text =>
                  setFormInputs(prev => ({...prev, retirement_age: text}))
                }
              />
            </Item>
          </Content>
          <Content width="90%" vmargin={10} flex={0} align="center">
            <Item floatingLabel>
              <Label>Current Rsa Balance</Label>
              <Input
                name="current_balance"
                keyboardType="number-pad"
                value={formInputs.current_balance || ''}
                onChangeText={text =>
                  setFormInputs(prev => ({...prev, current_balance: text}))
                }
              />
            </Item>
          </Content>
          <Content
            width="90%"
            vmargin={10}
            flex={0}
            justify="flex-start"
            horizontal>
            <Item floatingLabel>
              <Label>Monthly Contribution</Label>
              <Input
                name="monthly_contribution"
                keyboardType="number-pad"
                value={formInputs.monthly_contribution || ''}
                onChangeText={text =>
                  setFormInputs(prev => ({...prev, monthly_contribution: text}))
                }
              />
            </Item>
          </Content>
          <Content
            width="90%"
            vmargin={10}
            flex={0}
            justify="flex-start"
            horizontal>
            <Item floatingLabel>
              <Label>Annual Growth Rate (%)</Label>
              <Input
                name="annual_growth_rate"
                keyboardType="number-pad"
                value={formInputs.annual_growth_rate || ''}
                onChangeText={text => setRate(text)}
              />
            </Item>
          </Content>
          <Content
            width="90%"
            vmargin={10}
            flex={0}
            justify="flex-start"
            horizontal>
            <Item floatingLabel>
              <Label>Estimated Period of Promotion (Years)</Label>
              <Input
                name="promotion"
                keyboardType="number-pad"
                value={promotion || ''}
                onChangeText={text => setPromotion(text)}
              />
            </Item>
          </Content>
          <Content width="90%" vmargin={30} flex={0} justify="center">
            <StyledButton
              curved
              bg={colors.primary}
              width="80%"
              onPress={() => submit()}>
              {loading ? (
                <Spinner color="#ffffff" />
              ) : (
                <SText size="20px" color="#ffffff">
                  Calculate
                </SText>
              )}
            </StyledButton>
            {Object.entries(result).length === 3 && (
              <>
                <Content horizontal justify="center" vmargin={5} width="90%">
                  <SText color="#777777" size="18px">
                    Estimated Savings:{' '}
                  </SText>
                  {result.estimated_savings ? (
                    <NumberFormat
                      value={parseInt(result.estimated_savings, 10)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'\u20A6'}
                      renderText={value => (
                        <SText color={colors.dark} size="22px">
                          {value}
                        </SText>
                      )}
                    />
                  ) : (
                    ''
                  )}
                </Content>
                <Content horizontal justify="center" vmargin={5} width="90%">
                  <SText color="#777777" size="18px">
                    Total:{' '}
                  </SText>
                  {result.total ? (
                    <NumberFormat
                      value={parseInt(result.total, 10)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'\u20A6'}
                      renderText={value => (
                        <SText color={colors.dark} size="22px">
                          {value}
                        </SText>
                      )}
                    />
                  ) : (
                    ''
                  )}
                </Content>
              </>
            )}
          </Content>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(PenCalc);
