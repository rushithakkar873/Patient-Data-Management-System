import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MedicalHistory } from '@/types';

type MedicalHistoryProps = {
	medicalHistory: MedicalHistory;
};

const MedicalHistory = ({ medicalHistory }: MedicalHistoryProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Medical History</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					<span className='font-semibold'>Allergies: </span>
					{medicalHistory.allergies}
				</p>
				<p>
					<span className='font-semibold'>Past Medical History: </span>
					{medicalHistory.past_medical_history}
				</p>
				<p>
					<span className='font-semibold'>Family Medical History: </span>
					{medicalHistory.family_medical_history}
				</p>
				<p>
					<span className='font-semibold'>Current Medication: </span>
					{medicalHistory.current_medication}
				</p>
				<Card>
					<CardHeader>
						<CardTitle>Vaccination</CardTitle>
					</CardHeader>
					<CardContent>
						{medicalHistory.vaccination_history.map((vaccination, index) => (
							<div key={index}>
								<p>
									<span className='font-semibold'>{vaccination.name} : </span>
									{vaccination.status}
								</p>
							</div>
						))}
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	);
};

export default MedicalHistory;
