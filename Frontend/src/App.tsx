import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Toaster } from './components/ui/toaster';
import AuthLayout from './layout/AuthLayout';
import PatientLayout from './layout/PatientLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MedicalInformation from './pages/MedicalInformation';
import PatientProfile from './pages/PatientProfile';
import axios from 'axios';
import { useEffect } from 'react';
import DoctorLayout from './layout/DoctorLayout';
import CaseView from './pages/CaseView';
import CasesHistory from './pages/CasesHistory';
import CasesList from './pages/CasesList';

const router = createBrowserRouter([
	{
		path: '/auth/signup',
		element: (
			<AuthLayout>
				<Register />
			</AuthLayout>
		),
	},
	{
		path: '/auth/login',
		element: (
			<AuthLayout>
				<Login />
			</AuthLayout>
		),
	},
	{
		path: '/patient/dashboard',
		element: (
			<PatientLayout>
				<Dashboard />
			</PatientLayout>
		),
	},
	{
		path: '/patient/medical-info',
		element: (
			<PatientLayout>
				<MedicalInformation />
			</PatientLayout>
		),
	},
	{
		path: '/patient/cases-history',
		element: (
			<PatientLayout>
				<CasesHistory />
			</PatientLayout>
		),
	},
	{
		path: '/patient/profile',
		element: (
			<PatientLayout>
				<PatientProfile
					patient={{
						name: 'Rushi Thakkar',
						date_of_birth: new Date('2003-07-08'),
						age: 20,
						gender: 'male',
						city: 'Gandhinagar',
						state: 'Guajrat',
						email: 'rushi@mail.com',
						role: 'Patient',
					}}
				/>
			</PatientLayout>
		),
	},
	{
		path: '/doctor/cases',
		element: (
			<DoctorLayout>
				<CasesList />
			</DoctorLayout>
		),
	},
	{
		path: '/doctor/case-view',
		element: (
			<DoctorLayout>
				<CaseView />
			</DoctorLayout>
		),
	},
]);

const App = () => {
	useEffect(() => {
		axios.defaults.headers.common[
			'Authorization'
		] = `Token ${localStorage.getItem('token')}`;
	}, []);
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
};

export default App;
