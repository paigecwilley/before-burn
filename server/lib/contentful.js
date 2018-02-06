const {createClient} = require('contentful');

exports.initContentful = ({ SPACE, TOKEN, HOST }) => (
  createClient({
    host: HOST,
    accessToken: TOKEN,
    space: SPACE,
  })
);
