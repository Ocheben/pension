/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Svg, {G, Path, LinearGradient, Stop, Polygon, Ellipse, Rect, Polyline, Line, Circle, Defs} from 'react-native-svg';

const LostCoinIcon = ({size}) => (
  <View>
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={size || 30}
        height={size || 30}
        viewBox="0 0 260.82 271.98">
        <G id="OBJECTS">
          <Path d="M118.2,222.93A129.79,129.79,0,0,0,263.83,351.78a127.58,127.58,0,0,0,26.08-5.95,129.84,129.84,0,1,0-104.7-236.54,126.59,126.59,0,0,0-19.1,12.93,129.86,129.86,0,0,0-41,58.81,127.58,127.58,0,0,0-6,26.08A129.11,129.11,0,0,0,118.2,222.93Z" transform="translate(-118.2 -93.1)" fill="#fb9a47" />
          <Path d="M119.37,235.26A129.88,129.88,0,0,0,265,364.12a126.69,126.69,0,0,0,26.07-6,130.12,130.12,0,0,0,71.75-60.09,130,130,0,0,0,15-80.38A129.8,129.8,0,0,0,249.2,105.43a127.09,127.09,0,0,0-14.81.85,130,130,0,0,0-108.1,87.08,126.94,126.94,0,0,0-6,26.08A131.25,131.25,0,0,0,119.37,235.26Z" transform="translate(-118.2 -93.1)" fill="#ffd45b" />
          <Path d="M167.28,134.55,349.91,317.18a130,130,0,0,0,12.92-19.11L186.38,121.62A128.37,128.37,0,0,0,167.28,134.55Z" transform="translate(-118.2 -93.1)" fill="#ffe29e" />
          <Path d="M120.33,219.44,265,364.12a126.69,126.69,0,0,0,26.07-6L126.29,193.36A126.94,126.94,0,0,0,120.33,219.44Z" transform="translate(-118.2 -93.1)" fill="#ffe29e" />
          <Path d="M234.39,106.28,378.17,250.06a129.83,129.83,0,0,0-.34-32.37L266.76,106.62a128.94,128.94,0,0,0-17.56-1.19A127.09,127.09,0,0,0,234.39,106.28Z" transform="translate(-118.2 -93.1)" fill="#ffe29e" />
          <Circle cx="249.19" cy="235.26" r="111.03" transform="translate(-211.56 152.01) rotate(-45)" fill="#efb241" />
          <Path d="M248.4,157.89c-26,0-47.08,19.37-47.08,43.19h23.52c0-10.84,10.57-19.67,23.56-19.67S272,190.24,272,201.08v3.41c0,11.53-5.07,16.91-12.77,25-10,10.61-22.53,23.83-22.53,52.18h23.52c0-19,7.46-26.89,16.11-36s19.19-20.3,19.19-41.19v-3.41C295.47,177.26,274.36,157.89,248.4,157.89Z" transform="translate(-118.2 -93.1)" fill="#ffe29e" />
          <Rect x="118.05" y="201.76" width="24.62" height="19.85" fill="#ffe29e" />
        </G>
      </Svg>
  </View>
);

export default LostCoinIcon;
