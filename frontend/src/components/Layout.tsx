import { PageLayoutProps } from '@src/typings';
import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from './Footer';
import Navbar from './Navbar';

function Layout({
	title = 'Title',
	description = 'Description',
	className,
	children,
	footerStyle = '',
}: PageLayoutProps) {
	return (
		<>
			<Navbar />
			<div className="mb-5 bg-light jumbotron">
				<div className="container-fluid p-3 bg-dark bg-gradient">
					<p className="display-1 fw-bold text-white">{title}</p>
					<p className="text-muted">{description}</p>
				</div>
			</div>
			<Container fluid>
				<div className={className}>{children}</div>
			</Container>
			<Footer style={footerStyle} />
		</>
	);
}

export default Layout;
