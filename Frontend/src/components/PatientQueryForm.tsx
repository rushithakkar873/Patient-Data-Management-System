import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectItem,
} from '@/components/ui/select';
import { Icons } from '@/utils/Icons';
import axios from 'axios';

const PatientQueryForm = () => {
	const [medicalHistory, setMedicalHistory] = useState({
		allergies: '',
		past_medical_history: '',
		family_medical_history: '',
		current_medication: '',
	});
	const [vaccinationHistory, setVaccinationHistory] = useState([
		{
			name: 'Polio',
			status: '',
		},
	]);
	const [lifeStyle, setLifeStyle] = useState({
		smoking: '',
		alcohol: '',
		sleep_time: '',
	});
	const [currentSymptoms, setCurrentSymptoms] = useState({
		description: '',
		duration_days: '',
		affected_area: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		return;
		// set some dummy data
		setMedicalHistory({
			allergies: 'Peanuts',
			past_medical_history: 'None',
			family_medical_history: 'None',
			current_medication: 'None',
		});
		setVaccinationHistory([
			{
				name: 'Polio',
				status: 'yes',
			},
			{
				name: 'Tetanus',
				status: 'no',
			},
		]);
		setLifeStyle({
			smoking: 'no',
			alcohol: 'no',
			sleep_time: '6-8 hours',
		});
		setCurrentSymptoms({
			description: 'Headache',
			duration_days: '2',
			affected_area: 'Forehead',
		});
	}, []);

	useEffect(() => {
		// http://localhost:8080/medical_history/mine
		axios
			.get('http://localhost:8080/medical_history/mine')
			.then((res) => {
				setMedicalHistory({
					allergies: res.data.allergies,
					past_medical_history: res.data.past_medical_history,
					family_medical_history: res.data.family_medical_history,
					current_medication: res.data.current_medication,
				});
				setVaccinationHistory(res.data.vaccination_history);
			})
			.catch((err) => {
				console.error(err);
			});
		// http://localhost:8080/life_style/mine
		axios
			.get('http://localhost:8080/life_style/mine')
			.then((res) => {
				setLifeStyle({
					smoking: res.data.smoking,
					alcohol: res.data.alcohol,
					sleep_time: res.data.sleep_time,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		axios
			.post('http://localhost:8080/patient_query/create', {
				medical_history: {
					...medicalHistory,
					vaccination_history: vaccinationHistory,
				},
				life_style: lifeStyle,
				current_symptoms: currentSymptoms,
			})
			.then((res) => {
				console.log(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setIsLoading(false);
			});
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		type:
			| 'medicalHistory'
			| 'vaccinationHistory'
			| 'lifeStyle'
			| 'currentSymptoms'
	) => {
		const { name, value } = e.target;
		if (type === 'medicalHistory') {
			setMedicalHistory((prevState) => ({
				...prevState,
				[name]: value,
			}));
		} else if (type === 'vaccinationHistory') {
			setVaccinationHistory((prevState) => ({
				...prevState,
				[name]: value,
			}));
		} else if (type === 'lifeStyle') {
			setLifeStyle((prevState) => ({
				...prevState,
				[name]: value,
			}));
		} else if (type === 'currentSymptoms') {
			setCurrentSymptoms((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};
	return (
		<div className=''>
			<form onSubmit={handleSubmit} className=''>
				<div className='grid grid-cols-2 gap-6'>
					<Card className=''>
						<CardHeader>
							<CardTitle className='text-2xl text-center'>
								Medical History
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-col space-y-4'>
							<div>
								<Label htmlFor='allergies'>Allergies</Label>
								<Input
									type='text'
									id='allergies'
									name='allergies'
									value={medicalHistory.allergies}
									onChange={(e) => handleChange(e, 'medicalHistory')}
									placeholder='Enter your allergies'
									required
								/>
							</div>
							<div>
								<Label htmlFor='past_medical_history'>Past Medical History</Label>
								<Input
									type='text'
									id='past_medical_history'
									name='past_medical_history'
									value={medicalHistory.past_medical_history}
									onChange={(e) => handleChange(e, 'medicalHistory')}
									placeholder='Enter your past medical history'
									required
								/>
							</div>
							<div>
								<Label htmlFor='family_medical_history'>
									Family Medical History
								</Label>
								<Input
									type='text'
									id='family_medical_history'
									name='family_medical_history'
									value={medicalHistory.family_medical_history}
									onChange={(e) => handleChange(e, 'medicalHistory')}
									placeholder='Enter your family medical history'
									required
								/>
							</div>
							<div>
								<Label htmlFor='current_medication'>Current Medication</Label>
								<Input
									type='text'
									id='current_medication'
									name='current_medication'
									value={medicalHistory.current_medication}
									onChange={(e) => handleChange(e, 'medicalHistory')}
									placeholder='Enter your current medication'
									required
								/>
							</div>
							<Label htmlFor='vaccinationHistory'>Vaccination History</Label>
							{vaccinationHistory.map((vaccination, index) => (
								<div className='grid grid-cols-2'>
									<label htmlFor=''>{vaccination.name}</label>
									<Select
										required
										value={vaccination.status}
										onValueChange={(selected) => {
											setVaccinationHistory((prevState) => ({
												...prevState,
												[index]: {
													name: vaccination.name,
													status: selected,
												},
											}));
										}}
									>
										<SelectTrigger>
											<SelectValue placeholder='Select your choice' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectItem value='yes'>Yes</SelectItem>
												<SelectItem value='no'>No</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							))}
						</CardContent>
					</Card>
					<Card className=''>
						<CardHeader>
							<CardTitle className='text-2xl text-center'>Life Style</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-col space-y-4'>
							<div>
								<label htmlFor=''>Smoking</label>
								<Select
									name='smoking'
									value={lifeStyle.smoking}
									onValueChange={(selected) => {
										setLifeStyle((prevState) => ({
											...prevState,
											smoking: selected,
										}));
									}}
								>
									<SelectTrigger>
										<SelectValue placeholder='Select your choice' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value='yes'>Yes</SelectItem>
											<SelectItem value='no'>No</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div>
								<label htmlFor=''>Alcohol</label>
								<Select
									name='alcohol'
									value={lifeStyle.alcohol}
									onValueChange={(selected) => {
										setLifeStyle((prevState) => ({
											...prevState,
											alcohol: selected,
										}));
									}}
								>
									<SelectTrigger>
										<SelectValue placeholder='Select your choice' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value='yes'>Yes</SelectItem>
											<SelectItem value='no'>No</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div>
								<label htmlFor=''>Sleep</label>
								<Select
									name='sleep_time'
									value={lifeStyle.sleep_time}
									onValueChange={(selected) => {
										setLifeStyle((prevState) => ({
											...prevState,
											sleep_time: selected,
										}));
									}}
								>
									<SelectTrigger>
										<SelectValue placeholder='Select your choice' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value='less than 6 hour'>
												Less than 6 Hours
											</SelectItem>
											<SelectItem value='6-8 hours'>6 - 8 Hours</SelectItem>
											<SelectItem value='more than 8 hours'>
												More than 8 Hours
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</CardContent>
					</Card>
				</div>
				{/* <Card className='w-full  mx-auto'>
					<CardHeader>
						<CardTitle className='text-2xl text-center'>
							Current Symptoms
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div>
							<Label htmlFor='description'>Describe it</Label>
							<Input
								type='text'
								id='description'
								name='description'
								value={currentSymptoms.description}
								onChange={(e) => handleChange(e, 'currentSymptoms')}
								placeholder='Enter your current symptoms description'
								required
							/>
						</div>
						<div>
							<Label htmlFor='duration_days'>Duration in Days</Label>
							<Input
								type='number'
								id='duration_days'
								name='duration_days'
								value={currentSymptoms.duration_days}
								onChange={(e) => handleChange(e, 'currentSymptoms')}
								placeholder='Enter your current symptoms duration in days'
								required
							/>
						</div>
						<div>
							<Label htmlFor='affected_area'>Affected Area</Label>
							<Input
								type='text'
								id='affected_area'
								name='affected_area'
								value={currentSymptoms.affected_area}
								onChange={(e) => handleChange(e, 'currentSymptoms')}
								placeholder='Enter your current symptoms affected area'
								required
							/>
						</div>
					</CardContent>
				</Card> */}
				<Button type='submit' className='mt-6 w-full' disabled={isLoading}>
					{isLoading ? (
						<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
					) : (
						'Update Information'
					)}
				</Button>
			</form>
		</div>
	);
};

export default PatientQueryForm;
