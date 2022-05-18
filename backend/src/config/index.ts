import { config } from 'dotenv-safe';
config();

export default {
	DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017',
	PORT: process.env.PORT || 3001,
	ENV: process.env.NODE_ENV || 'development',
	CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://127.0.0.1:3000',
};
