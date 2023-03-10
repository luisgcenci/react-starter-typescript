import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';
import App from './App';

interface IAllTheProviders {
	children: React.ReactNode;
}

const AllTheProviders: React.FC<IAllTheProviders> = (
	props: IAllTheProviders
) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{props.children}
				</PersistGate>
			</Provider>
		</BrowserRouter>
	);
};

const setUpRender = () => {
	render(<App />, {
		wrapper: AllTheProviders,
	});
};

test('renders authorize route', () => {
	setUpRender();
	const element = screen.getByTestId('route-authorize');
	expect(element).toBeInTheDocument();
});
