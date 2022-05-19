import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import config from './config';
import { userRouter, authRouter } from './routes';

export const app = express();
app.use(
	cors({
		origin: config.CORS_ORIGIN,
		credentials: true,
	})
);
app.use(morgan('dev'));
app.use(helmet());
app.use(
	urlencoded({
		extended: true,
	})
);
app.use(cookieParser());
app.use(json());
app.use(compress());

app.use('/api/v1', [authRouter, userRouter]);
