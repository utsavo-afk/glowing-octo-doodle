import { FooterProps } from '@src/typings';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiCoffee } from 'react-icons/fi';
import { VscLinkExternal } from 'react-icons/vsc';

function Footer({ style }: FooterProps) {
	return (
		<div className={style}>
			<hr />
			<footer className="text-center">
				<p className="text-muted font-monospace" style={{ fontSize: '12px' }}>
					Made with <AiOutlineHeart /> &#38; <FiCoffee />{' '}
					<a href="mailto:utsavojha0@gmail.com?subject = Feedback&body = Message">
						Say Hi
						<sup>
							<VscLinkExternal />
						</sup>
					</a>
					. More on{' '}
					<a href="https://github.com/utsavo-afk" target="_blank" rel="noreferrer">
						Github
						<sup>
							<VscLinkExternal />
						</sup>
					</a>
					. 2021 &#169; Utsav Ojha
				</p>
			</footer>
		</div>
	);
}

export default Footer;
