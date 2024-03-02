import DynamicTable from '@/components/QueryTable';
import { MedicalRecord } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CasesHistory = () => {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		// http://localhost:8080/patient_query/
		axios
			.get('http://localhost:8080/patient_query/all')
			.then((response) => {
				console.log(response.data);
				const data = response.data;
				setData(
					data.map((record: MedicalRecord) => {
						return {
							id: record._id,
							symptoms: record.current_symptoms.description,
							duration_days: record.current_symptoms.duration_days,
							affected_area: record.current_symptoms.affected_area,
							doctor: record.doctor_id?.name,
							created_at: record.createdAt,
						};
					})
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div>
			<h1>Cases History</h1>
			<div>
				<DynamicTable
					data={data}
					link_path='/view/case'
					caption='Your recent cases'
				/>
			</div>
		</div>
	);
};

export default CasesHistory;
