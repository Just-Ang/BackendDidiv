
import { createPayment } from '../services/liqpay';

export default {
  async create(ctx) {
    const { amount } = ctx.request.body;

    const orderId = `order_${Date.now()}`;

    const payment = createPayment(orderId, amount);

    // можеш зберегти order в БД тут

    ctx.send(payment);
  },
};