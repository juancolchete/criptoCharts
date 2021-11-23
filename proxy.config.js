const proxy = [
    {
      context: '/cmc',
      target: 'https://pro-api.coinmarketcap.com',
      pathRewrite: {'^/cmc' : ''}
    }
  ];
  module.exports = proxy;