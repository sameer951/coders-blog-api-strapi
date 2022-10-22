const strapi = require('@strapi/strapi');
require('dotenv').config();

const ENVConfig={
    host: process.env.HOST || '0.0.0.0', 
    port: process.env.PORT || '1337',
    app: {
      keys: process.env.APP_KEYS,
    },
}
strapi(ENVConfig).start();
