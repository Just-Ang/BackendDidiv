

import CryptoJS from 'crypto-js';

const publicKey = process.env.LIQPAY_PUBLIC_KEY!;
const privateKey = process.env.LIQPAY_PRIVATE_KEY!;

export const createPayment = (order_number: string, amount: number) => {
  const json = {
    public_key: publicKey,
    version: '3',
    action: 'pay',
    amount: amount.toString(),
    currency: 'UAH',
    description: 'Оплата замовлення',
    order_id: order_number,
    result_url: 'https://just-ang.github.io/Didiv/order-confirmation',
   server_url: 'https://backenddidiv-production.up.railway.app/api/liqpay/callback'
  };

  const data = Buffer.from(JSON.stringify(json)).toString('base64');

  const signature = CryptoJS.SHA1(privateKey + data + privateKey)
    .toString(CryptoJS.enc.Base64);


    console.log({
  order_number,
  amount,
  data,
  signature
});
  return { data, signature };
};