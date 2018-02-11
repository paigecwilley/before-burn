import glamorous from 'glamorous';

import * as c from '../constants';

export default glamorous.h1(
  {
    fontSize: c.H4_MOBILE_FONT_SIZE,

    [c.DESKTOP]: {
      fontSize: c.H4_DESKTOP_FONT_SIZE,
    },

    [c.DESKTOP_HD]: {
      fontSize: c.H4_DESKTOP_HD_FONT_SIZE
    }
  }
)
