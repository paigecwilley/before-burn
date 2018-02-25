import React from 'react';

import {
  ImagesContainer,
  ImageTriangle,
  Wrapper,
} from './styles';

const SideBySide = ({ right }) => (
  <Wrapper right={ right }>
    <ImagesContainer>
      <ImageTriangle></ImageTriangle>
      <ImageTriangle></ImageTriangle>
    </ImagesContainer>
      <div style={{ padding: '108px' }}>
    Se wisa wer timbrode his hus ofer stan.
      Þa com þær micel flod, and þær bleowon windas, and ahruron on þæt hus, and hit ne feoll: soþlice, hit wæs ofer stan getimbrod.

      Þa timbrode se dysiga wer his hus ofer sandceosol. Þa rinde hit, and þær com flod, and bleowon windas, and ahruron on þæt hus, and þæt hus feoll; and his hryre wæs micel.
    </div>
  </Wrapper>
);

export default SideBySide;
