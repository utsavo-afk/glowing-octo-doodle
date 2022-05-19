import { config } from 'dotenv-safe';
config();

export default {
	DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017',
	ATLAS_DATABASE_URL: process.env.ATLAS_DATABASE_URL || 'atlas_replica_set_url',
	PORT: process.env.PORT || 3001,
	ENV: process.env.NODE_ENV || 'development',
	CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://127.0.0.1:3000',
	ACCESS_TOKEN_PRIVATE_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY || 'ACCESS_TOKEN_PRIVATE_KEY',
	REFRESH_TOKEN_PRIVATE_KEY: process.env.REFRESH_TOKEN_PRIVATE_KEY || 'REFRESH TOKEN PRIVATE KEY',
};
