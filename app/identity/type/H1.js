import glamorous from 'glamorous';

import * as c from '../constants';

export default glamorous.h1(
  {
    fontSize: c.H1_MOBILE_FONT_SIZE,
    fontFamily: c.FONT_FAMILY_HEADINGS,

    [c.DESKTOP]: {
      fontSize: c.H1_DESKTOP_FONT_SIZE,
    },

    [c.DESKTOP_HD]: {
      fontSize: c.H1_DESKTOP_HD_FONT_SIZE
    }
  }
)
