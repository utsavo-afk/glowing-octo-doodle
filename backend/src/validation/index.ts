import * as Yup from 'yup';

export const signupSchema = Yup.object({
	body: Yup.object({
		username: Yup.string().required('Username required').min(6, 'Username too short').max(28, 'Username too long'),
		email: Yup.string().required('Email required').email('Valid email required'),
		password: Yup.string().required('Passowrd required').min(6, 'Password too short').max(28, 'Password too long'),
		password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
	}).required('Request body empty'),
});

export const loginSchema = Yup.object({
	body: Yup.object({
		username: Yup.string().required('Username required').min(6, 'Username too short').max(28, 'Username too long'),
		password: Yup.string().required('Password required').min(6, 'Password too short').max(28, 'Password too long'),
	}).required('Request body empty'),
});
