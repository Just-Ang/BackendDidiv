
import CryptoJS from 'crypto-js';

const privateKey = process.env.LIQPAY_PRIVATE_KEY!;

export default {
  async handle(ctx) {
    console.log("--- ВХІДНИЙ ЗАПИТ ВІД LIQPAY ---");
    const { data, signature } = ctx.request.body;
    console.log("Отримані дані (base64):", data);

    const expectedSignature = CryptoJS.SHA1(privateKey + data + privateKey)
      .toString(CryptoJS.enc.Base64);

    if (signature !== expectedSignature) {
      console.log("❌ ПОМИЛКА: Підписи не збігаються!");
      return ctx.badRequest('Invalid signature');
    }

    const decoded = JSON.parse(
      Buffer.from(data, 'base64').toString('utf-8')
    );
    console.log("Статус платежу від LiqPay:", decoded.status);

   if (decoded.status === 'success' || decoded.status === 'sandbox') {
const orderNumber = String(decoded.order_id);
console.log("Шукаємо замовлення номер:", decoded.order_id);


  const orders = await strapi.entityService.findMany('api::order.order', {
    filters: {
      order_number: orderNumber,
    },
  });

  const order = orders[0];
  console.log(order)

  if (order) {
    await strapi.entityService.update('api::order.order', order.id, {
      data: {
        status_order: 'paid',
      },
    });
  }
}

    return ctx.send('ok');
  },
};