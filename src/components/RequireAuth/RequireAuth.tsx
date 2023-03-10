import { useAppSelector } from 'hooks/hooks';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth: React.FC = () => {
	const auth = useAppSelector((state) => state.auth);
	return auth.authorized ? <Outlet /> : <Navigate to="authorize" />;
};

export default RequireAuth;
