module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log(result);

    const message = `
🛒 Нове замовлення!
Ім'я: ${result.name}
Телефон: ${result.phone}
Місто: ${result.city}
Номер: ${result.orderNumber}
    `;

    await fetch(`https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TG_CHAT_ID,
        text: message,
      }),
    });
  },
};