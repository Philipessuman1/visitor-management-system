import {Pool} from 'pg';
import 'dotenv/config';

const devConfig = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DB_PORT as unknown as number
};

const proConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
      }
};

export const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
