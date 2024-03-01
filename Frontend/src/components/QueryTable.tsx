/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { formatDateTime, fromSnackCaseToNormal } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface QueryTableProps {
	data: any;
	caption?: string;
	link_path?: string;
}

const DynamicTable = ({ data, caption, link_path }: QueryTableProps) => {
	if (data.length === 0) {
		return <div>No data available</div>;
	}
	return (
		<div>
			<Table>
				<TableCaption>{caption}</TableCaption>
				<TableHeader>
					<TableHead>Sr.</TableHead>
					{Object.keys(data[0]).map((key, index) => (
						<TableHead key={index}>{fromSnackCaseToNormal(key)}</TableHead>
					))}
				</TableHeader>
				<TableBody>
					{data.map((record: any, index: number) => (
						<TableRow key={record._id}>
							<Link to={`${link_path}/${record._id}`}>
								<TableCell>{index + 1}</TableCell>
								{Object.keys(record).map((key, index) => (
									<TableCell key={index}>
										{key === 'created_at' || key === 'updated_at'
											? formatDateTime(record[key])
											: record[key]}
									</TableCell>
								))}
							</Link>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default DynamicTable;
