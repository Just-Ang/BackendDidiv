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
      provider: '@3xweb/strapi-provider-email-resend',

      providerOptions: {
        apiKey: env('RESEND_API_KEY'),
        from: env('RESEND_FROM_EMAIL'),
      },

      settings: {
        defaultFrom: env('RESEND_FROM_EMAIL'),
        defaultReplyTo: env('RESEND_FROM_EMAIL'),
      },
    },
  },
});

export default config;