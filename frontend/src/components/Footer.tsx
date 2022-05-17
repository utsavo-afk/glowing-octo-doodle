import { FooterProps } from '@src/typings';
import React from 'react';

function Footer({ style }: FooterProps) {
	return (
		<div className={style}>
			<hr />
			<footer className="text-center">
				<p className="text-muted" style={{ fontSize: '12px' }}>
					Made with ❤️{' '}
					<a href="mailto:utsavojha0@gmail.com?subject = Feedback&body = Message">
						Send Feedback
					</a>
					. Check out more projects on my{' '}
					<a href="https://github.com/utsavo-afk" target="_blank" rel="noreferrer">
						Github
					</a>
					. 2021 &#169; Utsav Ojha
				</p>
			</footer>
		</div>
	);
}

export default Footer;
