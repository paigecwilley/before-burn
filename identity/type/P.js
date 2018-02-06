import glamorous from 'glamorous';

import * as c from '../constants';

export default glamorous.h1(
  {
    fontSize: c.P_MOBILE_FONT_SIZE,

    [c.DESKTOP]: {
      fontSize: c.P_DESKTOP_FONT_SIZE,
    },

    [c.DESKTOP_HD]: {
      fontSize: c.P_DESKTOP_HD_FONT_SIZE
    }
  }
)
