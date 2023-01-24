const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://univcert.com',
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};