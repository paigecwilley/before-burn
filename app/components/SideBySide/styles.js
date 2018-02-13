import glamorous from 'glamorous';

import * as c from '../../identity/constants';
import { spacing } from '../../identity/spacing';

export const Wrapper = glamorous.section(
  spacing({ margin: 'bottom-xl' }),
  {
  display: 'flex',
  flexDirection: 'row',

},
  ({ right }) => ( right && {
      flexDirection: 'row-reverse',
   })
);


export const ImagesContainer = glamorous.div({
  width: '100%',
  maxWidth: '630px',

  '& div:first-of-type': {
    float: 'left',
    clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
  },

  '& div:last-of-type': {
    float: 'none',
    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    transform: 'translate3d(20px, 20px, 0)',
  }
})

export const ImageTriangle = glamorous.div({
  backgroundImage: 'url(https://source.unsplash.com/WeYamle9fDM/800x800)',
  width: '40%',
  height: '360px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  shapeMargin: '2em',
})
