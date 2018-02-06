import glamorous from 'glamorous';

import * as c from '../constants';

export default glamorous.h1(
  {
    fontSize: c.H2_MOBILE_FONT_SIZE,

    [c.DESKTOP]: {
      fontSize: c.H2_DESKTOP_FONT_SIZE,
    },

    [c.DESKTOP_HD]: {
      fontSize: c.H2_DESKTOP_HD_FONT_SIZE
    }
  }
)
