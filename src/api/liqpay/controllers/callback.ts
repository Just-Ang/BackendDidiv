
import CryptoJS from 'crypto-js';

const privateKey = process.env.LIQPAY_PRIVATE_KEY!;

export default {
  async handle(ctx) {
    const { data, signature } = ctx.request.body;

    const expectedSignature = CryptoJS.SHA1(privateKey + data + privateKey)
      .toString(CryptoJS.enc.Base64);

    if (signature !== expectedSignature) {
      return ctx.badRequest('Invalid signature');
    }

    const decoded = JSON.parse(
      Buffer.from(data, 'base64').toString('utf-8')
    );

    if (decoded.status === 'success') {
      // ✅ тут оновлюєш замовлення як оплачене
    }

    return ctx.send('ok');
  },
};