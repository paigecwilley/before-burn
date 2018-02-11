import glamorous from 'glamorous';

import { spacing } from '../../identity/spacing';

export const TripleGridContainer = glamorous.section(
  spacing({ margin: 'vertical-md'}),
  {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridColumnGap: '10px',
});

export const TripleGridItem = glamorous.img({
  width: '100%',
  display: 'block',
});
