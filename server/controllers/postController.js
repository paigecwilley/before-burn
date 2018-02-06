const { initContentful } = require('../lib/contentful');

exports.getPosts = async ( req, res ) => {
  const client = initContentful(process.env);
  const data = await client.getEntries({
    'content_type': '2wKn6yEnZewu2SCCkus4as',//this is the post api
    include: 0,
  });

  return res.json(data);
};
