import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Authorize from 'routes/Authorize/Authorize';
import RequireAuth from 'components/RequireAuth/RequireAuth';
import Home from 'routes/Home/Home';

const App: React.FC = () => {
	return (
		<Routes data-testid="App">
			<Route path="/" element={<Outlet />}>
				{/* Public Routes */}
				<Route path="/authorize" element={<Authorize />} />

				{/* Protected Routes */}
				<Route element={<RequireAuth />}>
					<Route path="/" element={<Home />} />
				</Route>

				{/* Catch All */}
				<Route path="*" element={<Navigate to="/authorize" />} />
			</Route>
		</Routes>
	);
};

export default App;
