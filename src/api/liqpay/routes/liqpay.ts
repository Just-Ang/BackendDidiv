export default {
  routes: [
    {
      method: 'POST',
      path: '/liqpay/create', // Для створення платежу (викликає фронтенд)
      handler: 'liqpay.create',
      config: {
        auth: false, 
      },
    },
    {
      method: 'POST',
      path: '/liqpay/handle', // Для отримання статусу (викликає LiqPay)
      handler: 'callback.handle', 
      config: {
        auth: false,
      },
    },
  ],
};