import glamorous from 'glamorous';

import * as c from '../../identity/constants';

export const Wrapper = glamorous.section({
  display: 'flex',
  flexDirection: 'row',

},
  ({ right }) => ( right && {
      flexDirection: 'row-reverse',
   })
);


export const ImagesContainer = glamorous.div({

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
  backgroundImage: 'url(https://source.unsplash.com/daily)',
  width: '250px',
  height: '250px',
  backgroundSize: 'cover',
  backgroundPosition: '-100px 0',
  backgroundRepeat: 'no-repeat',
  shapeMargin: '2em',
})
