export default {
  routes: [
    {
      method: 'POST',
      path: '/liqpay/create',
      handler: 'liqpay.create',
      config: {
        auth: false, 
      },
    },
  ],
};