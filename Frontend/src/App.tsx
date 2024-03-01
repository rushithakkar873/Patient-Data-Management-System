import './App.css';
import LifestyleComponent from './components/LifeStyle';
import MedicalHistory from './components/MedicalHistory';
import { Toaster } from './components/ui/toaster';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
	return (
		<>
			<div className='max-h-screen h-screen p-4 flex flex-col justify-center items-center'>
				<Login />
				<Register />
				<MedicalHistory
					medicalHistory={{
						_id: '65e199de3a892f888a92ef38',
						allergies: 'Cold',
						past_medical_history: 'Hypertension',
						family_medical_history: 'Diabetes',
						current_medication: 'Aspirin',
						vaccination_history: [
							{
								name: 'Flu Vaccine',
								status: 'yes',
							},
						],
					}}
				/>
				<LifestyleComponent
					lifestyle={{
						_id: '65e199df3a892f888a92ef3b',
						smoking: 'yes',
						alcohol: 'yes',
						sleep_time: '6-8 hours',
					}}
				/>
			</div>
			<Toaster />
		</>
	);
};

export default App;
