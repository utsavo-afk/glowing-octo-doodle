import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { store } from './store';

ReactDOM.render(
	<React.StrictMode>
		<ReduxStoreProvider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ReduxStoreProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
