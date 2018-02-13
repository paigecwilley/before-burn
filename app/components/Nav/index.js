import React from 'react';

import {
  Nav,
  UL,
  LI,
} from './styles';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Experiments', href: 'burnout-experiments' },
  { title: 'Journal', href: 'journal' },
];

const Navigation = () => (
  <Nav>
    <UL>
    { LINKS.map(l => (
      <LI>{ l.title }</LI>
    ))}
    </UL>
  </Nav>
);


export default Navigation;
