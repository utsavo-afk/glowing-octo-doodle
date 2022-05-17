import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Landing, Login, NotFound, Signup } from './pages';

export const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/home" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
