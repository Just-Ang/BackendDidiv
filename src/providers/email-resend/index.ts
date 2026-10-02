import { Resend } from 'resend';

export default ({ strapi }: { strapi: any }) => {
  const apiKey = strapi.config.get('plugin.email.providerOptions.apiKey');
  const from = strapi.config.get('plugin.email.providerOptions.from');

  const resend = new Resend(apiKey);

  return {
    async send(options: any) {
      const { to, from: customFrom, replyTo, subject, text, html } = options;

      const result = await resend.emails.send({
        from: customFrom || from,
        to,
        replyTo,
        subject,
        text,
        html,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      return result;
    },
  };
};