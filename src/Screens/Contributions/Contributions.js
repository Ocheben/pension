import React from 'react';
import {View, Button, Text, Dimensions, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onSignOut} from '../../_services';
import {
  SText,
  Content,
  ContentButton,
  StyledButton,
  colors,
} from '../../Components/styledComponents';

const {height, width} = Dimensions.get('window');

const Contribution = props => {
  const {navigation} = props;
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  return (
    <ScrollView>
      <Content justify="space-evenly" vmargin={15} flex={6}>
        <ContentButton
          onPress={() => navigation.navigate('ContributionItem')}
          bg="#ffffff"
          ribbon
          vmargin={10}
          shadow
          height={height / 6}
          borderR={10}
          width="90%"
          align="flex-start"
          hpadding={width / 20}
          justify="space-around">
          <SText size="20px" color={colors.dark}>
            November 2019
          </SText>
          <SText size="20px" color={colors.dark}>
            Bank Of Industry
          </SText>
          <SText size="20px" weight="700" color={colors.dark}>
            NGN 75,000 / CR
          </SText>
        </ContentButton>
        <ContentButton
          onPress={() => navigation.navigate('ContributionItem')}
          bg="#ffffff"
          ribbon
          vmargin={10}
          shadow
          height={height / 6}
          borderR={10}
          width="90%"
          align="flex-start"
          hpadding={width / 20}
          justify="space-around">
          <SText size="20px" color={colors.dark}>
            October 2019
          </SText>
          <SText size="20px" color={colors.dark}>
            Bank Of Industry
          </SText>
          <SText size="20px" weight="700" color={colors.dark}>
            NGN 75,000 / CR
          </SText>
        </ContentButton>
        <ContentButton
          onPress={() => navigation.navigate('ContributionItem')}
          bg="#ffffff"
          ribbon
          vmargin={10}
          shadow
          height={height / 6}
          borderR={10}
          width="90%"
          align="flex-start"
          hpadding={width / 20}
          justify="space-around">
          <SText size="20px" color={colors.dark}>
            September 2019
          </SText>
          <SText size="20px" color={colors.dark}>
            Bank Of Industry
          </SText>
          <SText size="20px" weight="700" color={colors.dark}>
            NGN 75,000 / CR
          </SText>
        </ContentButton>
        <ContentButton
          onPress={() => navigation.navigate('ContributionItem')}
          bg="#ffffff"
          ribbon
          vmargin={10}
          shadow
          height={height / 6}
          borderR={10}
          width="90%"
          align="flex-start"
          hpadding={width / 20}
          justify="space-around">
          <SText size="20px" color={colors.dark}>
            August 2019
          </SText>
          <SText size="20px" color={colors.dark}>
            Bank Of Industry
          </SText>
          <SText size="20px" weight="700" color={colors.dark}>
            NGN 75,000 / CR
          </SText>
        </ContentButton>
        <ContentButton
          onPress={() => navigation.navigate('ContributionItem')}
          bg="#ffffff"
          ribbon
          vmargin={10}
          shadow
          height={height / 6}
          borderR={10}
          width="90%"
          align="flex-start"
          hpadding={width / 20}
          justify="space-around">
          <SText size="20px" color={colors.dark}>
            July 2019
          </SText>
          <SText size="20px" color={colors.dark}>
            Bank Of Industry
          </SText>
          <SText size="20px" weight="700" color={colors.dark}>
            NGN 75,000 / CR
          </SText>
        </ContentButton>
      </Content>
    </ScrollView>
  );
};

export default Contribution;
