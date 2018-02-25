import glamorous from 'glamorous';

import { spacing } from '../../identity/spacing';

export const TripleGridContainer = glamorous.section(
  spacing({ padding: 'bottom-xl'}),
  {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridColumnGap: '10px',
  // gridAutoRows: '100px',
  // gridTemplateAreas:
  // '"a a a b b b ----
  //   a a a b b b c c c
  //   ----- b b b c c c "',
});

export const TripleGridItem = glamorous.img({
  width: '100%',
  display: 'block',
});
