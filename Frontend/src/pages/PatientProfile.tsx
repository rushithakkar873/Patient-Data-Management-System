import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGlobalState } from '@/context/useGlobalState';

const PatientProfile: React.FC = () => {
	const { state } = useGlobalState();
	const patient = state.patientProfile;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Patient Profile</CardTitle>
			</CardHeader>
			<CardContent className=''>
				<div>
					<h3 className='font-semibold'>Name</h3>
					<p>{patient.name}</p>
				</div>
				<div>
					<h3 className='font-semibold'>Date of Birth</h3>
					<p>{patient?.date_of_birth?.toLocaleDateString()}</p>
				</div>
				<div>
					<h3 className='font-semibold'>Age</h3>
					<p>{patient.age}</p>
				</div>
				<div>
					<h3 className='font-semibold'>Gender</h3>
					<p>{patient.gender}</p>
				</div>
				<div>
					<h3 className='font-semibold'>City</h3>
					<p>{patient.city}</p>
				</div>
				<div>
					<h3 className='font-semibold'>State</h3>
					<p>{patient.state}</p>
				</div>
				<div>
					<h3 className='font-semibold'>Email</h3>
					<p>{patient.email}</p>
				</div>
				<div>
					<h3 className='font-semibold'>Role</h3>
					<p>{patient.role}</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default PatientProfile;
