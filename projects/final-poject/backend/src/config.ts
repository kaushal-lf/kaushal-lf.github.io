import dotenv from 'dotenv';

dotenv.config();

const config = {
  serverPort: process.env.SERVER_PORT || 8000,
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'access_token_secret',
    refreshTokenSecret:
      process.env.REFRESH_TOKEN_SECRET || 'refresh_token_secret',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    name: process.env.DB_NAME || 'realestate',
  },
};

export default config;
