import React from 'react';
import {View} from 'react-native'
import {Content, SText, colors} from '../../Components/styledComponents';

const ContributionItem = (props) => {
  return (
    <Content flex={0.5} justify="flex-start" align="center">
      <Content width="90%" align="flex-start">
        <SText size="25px" color={colors.dark} weight="700">
          Bank of Industry
        </SText>
      </Content>
      <Content width="90%" justify="flex-start" horizontal>
        <SText size="20px" color={colors.dark}>
          Employee:{' '}
        </SText>
        <SText size="20px" color={colors.dark} weight="700">
          N 7,500
        </SText>
      </Content>
      <Content width="90%" justify="flex-start" horizontal>
        <SText size="20px" color={colors.dark}>
          Employer:{' '}
        </SText>
        <SText size="20px" color={colors.dark} weight="700">
          N 13,500
        </SText>
      </Content>
      <Content width="90%" justify="flex-start" horizontal>
        <SText size="20px" color={colors.dark}>
          Period:{' '}
        </SText>
        <SText size="20px" color={colors.dark} weight="700">
          November 2019
        </SText>
      </Content>
    </Content>
  );
};

export default ContributionItem;
