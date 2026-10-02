// // import type { Core } from '@strapi/strapi';

// // const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

// // export default config;
    

// import type { Core } from '@strapi/strapi';

// const config = ({ env }: Core.Config.Shared.ConfigParams): any => ({
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
      
//       settings: {
//         default: {},
//       },
//     },
//   },
// });

// export default config;


import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): any => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

 email: {
  config: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: env.int('SMTP_PORT', 465),
      secure: true,
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: env('SMTP_FROM'),
      defaultReplyTo: env('SMTP_REPLY_TO'),
    },
  },
},
});

export default config;