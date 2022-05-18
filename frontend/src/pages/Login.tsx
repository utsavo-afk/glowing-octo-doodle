import { Layout, TextField } from '@src/components';
import { loginSchema } from '@src/validation';
import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	return (
		<Layout
			title="Login"
			description="Sign in to your account"
			footerStyle="fixed-bottom"
			contentFluid={false}
		>
			<Formik
				initialValues={{ username: '', password: '' }}
				validationSchema={loginSchema}
				onSubmit={async (values, actions) => {
					actions.resetForm();
					alert(JSON.stringify(values));
				}}
			>
				{(formik) => (
					<Form className="border p-3" onSubmit={formik.handleSubmit}>
						<TextField
							controlId="username"
							name="username"
							label="Username"
							placeholder="Enter username"
						/>

						<TextField
							controlId="password"
							name="password"
							type="password"
							label="Password"
							placeholder="Enter password"
						/>

						<div className="d-flex align-items-baseline justify-content-start">
							<Button variant="success" className="bg-gradient" type="submit">
								Login
							</Button>
							<p className="d-inline text-muted fst-italic text-decoration-underline mx-2">
								or
							</p>
							<Button onClick={() => navigate('/signup')} variant="secondary">
								Create Account <BsArrowRightShort />
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};

export default Login;
