import { useEffect } from 'react';
import './App.css';
import { Toaster } from './components/ui/toaster';
import PatientQueryForm from './pages/PatientQueryForm';
import axios from 'axios';

const App = () => {
	useEffect(() => {
		axios.defaults.headers.common[
			'Authorization'
		] = `Token ${localStorage.getItem('token')}`;
	}, []);
	return (
		<>
			<div className='max-h-screen h-screen p-4 flex flex-col justify-center items-center'>
				<PatientQueryForm />
			</div>
			<Toaster />
		</>
	);
};

export default App;
