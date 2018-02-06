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
      Text
    </div>
  </Wrapper>
);

export default SideBySide;
