import pino from 'pino';

export default pino({
	// runs in another thread to log to console
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
		},
	},
});
