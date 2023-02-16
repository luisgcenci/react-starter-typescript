import Home from 'modules/module-name/Routes/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';


const ModuleName = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate replace to='/home'/>}/>
			<Route path='/home' element={<Home/>}/>
		</Routes>
	);
};

export default ModuleName;