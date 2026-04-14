
import { createPayment } from '../services/liqpay';

export default {
  async create(ctx) {
    const { amount, order_number } = ctx.request.body;

    // const orderId = `order_${Date.now()}`;

    const payment = createPayment(order_number, amount);

    // можеш зберегти order в БД тут

    ctx.send(payment);
  },
};