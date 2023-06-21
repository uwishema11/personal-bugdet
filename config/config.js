import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DEV_DATABASE_URL);
console.log(process.env.TEST_DATABASE_URL);
console.log(process.env.DATABASE_URL);

export default {
  development: {
    database: process.env.DEV_DATABASE_NAME,
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    host: process.env.DEV_DATABASE_HOST,
    port: process.env.DEV_DATABASE_PORT,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    database: process.env.TEST_DATABASE_NAME,
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    host: process.env.TEST_DATABASE_HOST,
    port: process.env.TEST_DATABASE_PORT,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};


