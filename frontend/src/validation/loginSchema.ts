import * as Yup from 'yup';

export const loginSchema = Yup.object({
	username: Yup.string()
		.required('Username required')
		.min(6, 'Username too short')
		.max(28, 'Username too long'),
	password: Yup.string()
		.required('Password required')
		.min(6, 'Password too short')
		.max(28, 'Password too long'),
});
