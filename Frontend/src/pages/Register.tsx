import { useState } from 'react';
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
	SelectLabel,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/utils/Icons';
import axios from 'axios';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		date_of_birth: '',
		gender: '',
		city: '',
		state: '',
		role: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			toast({
				variant: 'default',
				description: 'Passwords do not match.',
			});
			return;
		}
		setIsLoading(true);
		await axios
			.post(`${'http://localhost:8080'}/user/signup`, formData)
			.then((res) => {
				toast({
					variant: 'default',
					description: res.data,
				});
				if (res.status === 201) {
					// todo redirect to login page
				}
			})
			.catch((err) => {
				toast({
					variant: 'default',
					description: err.response.data,
				});
			});
		setTimeout(() => {
			setIsLoading(false);
			toast({
				variant: 'default',
				description: 'Registration successful.',
			});
		}, 3000);
	};

	return (
		<Card className='w-full max-w-xl mx-auto'>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>Register</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
					<div>
						<Label htmlFor='name'>Name</Label>
						<Input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							placeholder='Enter your full name'
							required
						/>
					</div>
					<div>
						<Label htmlFor='email'>Email Address</Label>
						<Input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder='Enter your email'
							required
						/>
					</div>
					<div>
						<Label htmlFor='password'>Password</Label>
						<Input
							type='password'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							placeholder='Create a password'
							required
						/>
					</div>
					<div>
						<Label htmlFor='confirmPassword'>Confirm Password</Label>
						<Input
							type='password'
							id='confirmPassword'
							name='confirmPassword'
							value={formData.confirmPassword}
							onChange={handleChange}
							placeholder='Confirm your password'
							required
						/>
					</div>
					<div>
						<Label htmlFor='date_of_birth'>Date of Birth</Label>
						<Input
							type='date'
							id='date_of_birth'
							name='date_of_birth'
							value={formData.date_of_birth}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<Label>Gender</Label>
						<Select
							defaultValue={formData.gender}
							onValueChange={(value) =>
								setFormData((prev) => ({ ...prev, gender: value }))
							}
							required
						>
							<SelectTrigger>
								<SelectValue placeholder='Select your gender' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Gender</SelectLabel>
									<SelectItem value='male'>Male</SelectItem>
									<SelectItem value='female'>Female</SelectItem>
									<SelectItem value='other'>Other</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label htmlFor='city'>City</Label>
						<Input
							type='text'
							id='city'
							name='city'
							value={formData.city}
							onChange={handleChange}
							placeholder='Your city'
							required
						/>
					</div>
					<div>
						<Label htmlFor='state'>State</Label>
						<Input
							type='text'
							id='state'
							name='state'
							value={formData.state}
							onChange={handleChange}
							placeholder='Your state'
							required
						/>
					</div>
					<div className='col-span-2'>
						<Label>I'm registering as a</Label>
						<Select
							defaultValue={formData.role}
							onValueChange={(value) =>
								setFormData((prev) => ({ ...prev, role: value }))
							}
							required
						>
							<SelectTrigger>
								<SelectValue placeholder='Select your role' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Role</SelectLabel>
									<SelectItem value='doctor'>Doctor</SelectItem>
									<SelectItem value='patient'>Patient</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className='col-span-2'>
						<Button type='submit' className='w-full' disabled={isLoading}>
							{isLoading ? (
								<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
							) : (
								'Register your query'
							)}
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default Register;
