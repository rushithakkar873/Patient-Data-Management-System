import DynamicTable from '@/components/QueryTable';
import { MedicalRecord } from '@/types';
import axios from 'axios';
import React, { useEffect } from 'react';

const DoctorQueryTableView = () => {
	const [data, setData] = React.useState([
		{
			patient_name: '',
		},
	]);

	useEffect(() => {
		// http://localhost:8080/patient_query/
		axios
			.get('http://localhost:8080/patient_query/all')
			.then((response) => {
				const data = response.data;
				setData(
					data.map((record: MedicalRecord) => {
						return {
							id: record._id,
							patient_name: record.patient.name,
							gender: record.patient.gender,
							age: record.patient.age,
							current_symptoms: record.current_symptoms.description,
							current_medication: record.medical_history.current_medication,
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
			<DynamicTable data={data} link_path='/doctor/case-view' />
		</div>
	);
};

export default DoctorQueryTableView;
