import glamorous from 'glamorous';

export const Header = glamorous.header({
  background: 'gray',
  width: '5%',
  height: '100%',
  background: 'white',
  position: 'fixed',
  top: 0,
  left: 0,


});

export const Nav = glamorous.nav({
  // width: '5%',
  // height: '100%',
  // background: 'white',
  // position: 'fixed',
  // top: 0,
  // left: 0,
  transform: 'rotate(90deg)',
});

export const A = glamorous.a({

});

export const UL = glamorous.ul({
  display: 'flex',
  flexDirection: 'row',
  // transform: 'rotate(90deg)',
  // position: 'absolute',
  // top: '50%',
  width: '100%',

});

export const LI = glamorous.li({
  display: 'inline-block',
  // width: '90px',
  paddingLeft: 20,
  transform: 'rotate(180deg)',
});
