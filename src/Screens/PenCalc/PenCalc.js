import React from 'react';
import {View, StatusBar, Dimensions} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Item, Input, Label} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Content,
  SText,
  StyledButton,
  colors,
} from '../../Components/styledComponents';
import {MenuIcon} from '../../Components/icons';

const PenCalc = props => {
  const {navigation} = props;
  const {height, width} = Dimensions.get('window');
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{flexGrow: 1}}>
      <Content>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Content flex={0.7} justify="center" align="center">
          <Content width="90%" flex={0.2} align="center">
            <Item floatingLabel last>
              <Label>Initial Amount</Label>
              <Input />
            </Item>
          </Content>
          <Content width="90%" flex={0.2} justify="flex-start" horizontal>
            <Item floatingLabel last>
              <Label>Last Amount</Label>
              <Input />
            </Item>
          </Content>
          <Content width="90%" flex={0.2} justify="flex-start" horizontal>
            <Item floatingLabel last>
              <Label>Rate</Label>
              <Input />
            </Item>
          </Content>
          <Content width="90%" flex={0.2} justify="center" horizontal>
            <StyledButton
              bg={colors.primary}
              width="80%"
              // onPress={() => signIn('user')}
            >
              <SText size="20px" color="#ffffff">
                Calculate
              </SText>
            </StyledButton>
          </Content>
        </Content>
      </Content>
    </KeyboardAwareScrollView>
  );
};

export default PenCalc;
