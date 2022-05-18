import React from 'react';

// add stuff here
export type PageLayoutProps = {
	children: React.ReactNode;
	title: string;
	description: string;
	className?: string;
	footerStyle?: string;
	contentFluid?: boolean;
};

export type FooterProps = {
	style: string;
};
