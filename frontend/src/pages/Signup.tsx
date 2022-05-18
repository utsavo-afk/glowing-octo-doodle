import { Layout, TextField } from '@src/components';
import { signupSchema } from '@src/validation/loginSchema';
import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();

	return (
		<Layout
			title="Register"
			description="Create your ioChat account"
			footerStyle="fixed-bottom"
			contentFluid={false}
		>
			<Formik
				initialValues={{ username: '', email: '', password: '', password2: '' }}
				validationSchema={signupSchema}
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
							autocomplete="off"
						/>

						<TextField
							controlId="email"
							name="email"
							label="Email"
							placeholder="Enter Email"
							type="email"
							autocomplete="off"
						/>

						<TextField
							controlId="password"
							name="password"
							type="password"
							label="Password"
							placeholder="Enter password"
						/>

						<TextField
							controlId="password2"
							name="password2"
							type="password"
							label="Confirm Password"
							placeholder="Re-Enter password"
						/>

						<div className="d-flex align-items-baseline justify-content-start">
							<Button variant="success" className="bg-gradient" type="submit">
								Register
							</Button>
							<p className="d-inline text-muted fst-italic text-decoration-underline mx-2">
								or
							</p>
							<Button onClick={() => navigate('/login')} variant="secondary">
								<BsArrowLeftShort /> Back
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};

export default Signup;
