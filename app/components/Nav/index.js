import React from 'react';

import {
  Header,
  Nav,
  UL,
  LI,
  A,
} from './styles';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Experiments', href: 'burnout-experiments' },
  { title: 'Journal', href: 'journal' },
];

const Navigation = () => (
  <Header>
    <Nav>
      <UL>
      { LINKS.map(l => (
        <A><LI>{ l.title }</LI></A>
      ))}
      </UL>
    </Nav>
  </Header>
);


export default Navigation;
