import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compress from 'compression';
import config from './config';
import { userRouter } from './routes';

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
app.use(json());
app.use(compress());

app.use('/api/v1', userRouter);
