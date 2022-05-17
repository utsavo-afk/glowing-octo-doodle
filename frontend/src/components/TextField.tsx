import { Field, FieldAttributes, useField } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';

const TextField = ({
	controlId,
	label,
	placeholder,
	type,
	...props
}: FieldAttributes<any>) => {
	const [field, meta] = useField(props);
	return (
		<Form.Group controlId={controlId} className="mb-4">
			<Form.Label className="fs-5 text-black-50">{label}</Form.Label>
			<Form.Control
				isInvalid={meta.touched && meta.error}
				as={Field}
				{...field}
				{...props}
				type={type}
				placeholder={placeholder}
			/>
			<Form.Text className="text-danger">{meta.error}</Form.Text>
		</Form.Group>
	);
};

export default TextField;
