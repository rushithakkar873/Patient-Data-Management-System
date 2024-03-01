import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lifestyle } from '@/types';

type LifestyleProps = {
	lifestyle: Lifestyle;
};

const LifestyleComponent = ({ lifestyle }: LifestyleProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Lifestyle</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					<span className='font-semibold'>Smoking: </span>
					{lifestyle.smoking}
				</p>
				<p>
					<span className='font-semibold'>Alcohol: </span>
					{lifestyle.alcohol}
				</p>
				<p>
					<span className='font-semibold'>Sleep Time: </span>
					{lifestyle.sleep_time}
				</p>
			</CardContent>
		</Card>
	);
};

export default LifestyleComponent;
