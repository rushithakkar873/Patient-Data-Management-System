import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/utils/Icons';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		await axios
			.post(`${'http://localhost:8080'}/user/login`, formData)
			.then((res) => {
				toast({
					variant: 'default',
					description: 'Login successful.',
				});
				if (res.status === 201) {
					localStorage.setItem('token', res.data.token);
					// todo redirect to some page
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
			// You can implement success or error handling here
			// For example, showing a toast notification
			toast({
				variant: 'default',
				description: 'Login successful.',
			});
		}, 3000);
	};

	return (
		<>
			<Card className='w-3/5'>
				<CardHeader>
					<CardTitle className='text-2xl text-center'>Login</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
						<div>
							<Label htmlFor='email'>Email Address</Label>
							<Input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Enter your email address'
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
								placeholder='Enter your password'
								required
							/>
						</div>
						<div>
							<Button type='submit' className='w-full' disabled={isLoading}>
								{isLoading && (
									<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
								)}
								Login
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</>
	);
};

export default Login;
