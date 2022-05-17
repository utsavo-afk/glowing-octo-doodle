import React from 'react';

// add stuff here
export type PageLayoutProps = {
	children: React.ReactNode;
	title: string;
	description: string;
	className?: string;
	footerStyle?: string;
};

export type FooterProps = {
	style: string;
};
