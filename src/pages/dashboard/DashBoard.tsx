import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	LineChart,
	Line,
	Tooltip,
	Cell,
} from 'recharts';
import { Filter, Zap, Users, UserCheck, Ticket } from 'lucide-react';

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [hoveredBar, setHoveredBar] = useState<number | null>(null);

	// Simulate loading
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	// Sample data for the revenue trends chart with amounts
	const revenueData = [
		{ month: 'Jan', value: 25, amount: 12000 },
		{ month: 'Feb', value: 30, amount: 15000 },
		{ month: 'Mar', value: 40, amount: 22000 },
		{ month: 'Apr', value: 35, amount: 18000 },
		{ month: 'May', value: 85, amount: 45000 },
		{ month: 'Jun', value: 50, amount: 28000 },
		{ month: 'Jul', value: 45, amount: 25000 },
		{ month: 'Aug', value: 38, amount: 20000 },
		{ month: 'Sep', value: 42, amount: 23000 },
		{ month: 'Oct', value: 48, amount: 26000 },
		{ month: 'Nov', value: 52, amount: 30000 },
		{ month: 'Dec', value: 46, amount: 24000 },
	];

	// Sample data for subscription details chart
	const subscriptionData = [
		{ month: 'Jan', value: 25, subscriptions: 120 },
		{ month: 'Feb', value: 35, subscriptions: 180 },
		{ month: 'Mar', value: 45, subscriptions: 230 },
		{ month: 'Apr', value: 38, subscriptions: 195 },
		{ month: 'May', value: 42, subscriptions: 215 },
		{ month: 'Jun', value: 35, subscriptions: 175 },
		{ month: 'Jul', value: 28, subscriptions: 145 },
		{ month: 'Aug', value: 32, subscriptions: 165 },
		{ month: 'Sep', value: 38, subscriptions: 190 },
		{ month: 'Oct', value: 45, subscriptions: 225 },
		{ month: 'Nov', value: 35, subscriptions: 180 },
		{ month: 'Dec', value: 40, subscriptions: 200 },
	];

	const kpiData = [
		{
			title: 'Total Institute',
			value: '45%',
			percentage: 45,
			icon: Zap,
			bgColor: 'bg-teal-600',
			textColor: 'text-white',
			borderColor: 'border-white/30',
			progressColor: 'border-white',
		},
		{
			title: 'Institute Subscription',
			value: '15%',
			percentage: 15,
			icon: Users,
			bgColor: 'bg-white',
			textColor: 'text-gray-900',
			borderColor: 'border-pink-200',
			progressColor: 'border-pink-500',
			iconColor: 'text-pink-500',
		},
		{
			title: 'Active Subscription',
			value: '9%',
			percentage: 9,
			icon: UserCheck,
			bgColor: 'bg-white',
			textColor: 'text-gray-900',
			borderColor: 'border-purple-200',
			progressColor: 'border-purple-500',
			iconColor: 'text-purple-500',
		},
		{
			title: 'New Support Tickets',
			value: '25%',
			percentage: 25,
			icon: Ticket,
			bgColor: 'bg-white',
			textColor: 'text-gray-900',
			borderColor: 'border-yellow-200',
			progressColor: 'border-yellow-500',
			iconColor: 'text-yellow-500',
		},
	];

	const CircularProgress = ({
		percentage,
		borderColor,
		progressColor,
		isLoading,
	}: {
		percentage: number;
		borderColor: string;
		progressColor: string;
		isLoading: boolean;
	}) => {
		const circumference = 2 * Math.PI * 20;
		const strokeDasharray = circumference;
		const strokeDashoffset = isLoading
			? circumference
			: circumference - (percentage / 100) * circumference;

		return (
			<div className='relative w-16 h-16'>
				<svg className='w-16 h-16 transform -rotate-90' viewBox='0 0 48 48'>
					{/* Background circle */}
					<circle
						cx='24'
						cy='24'
						r='20'
						stroke='currentColor'
						strokeWidth='4'
						fill='none'
						className={`${borderColor.replace('border-', 'text-')}`}
					/>
					{/* Progress circle */}
					<circle
						cx='24'
						cy='24'
						r='20'
						stroke='currentColor'
						strokeWidth='4'
						fill='none'
						strokeDasharray={strokeDasharray}
						strokeDashoffset={strokeDashoffset}
						className={`${progressColor.replace(
							'border-',
							'text-'
						)} transition-all duration-1000 ease-out`}
						strokeLinecap='round'
					/>
				</svg>
				{/* Center text */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<span
						className={`text-xs font-semibold ${
							isLoading ? 'animate-pulse' : ''
						}`}
					>
						{isLoading ? '...' : `${percentage}%`}
					</span>
				</div>
			</div>
		);
	};

	const CustomTooltip = ({ active, payload, label }: any) => {
		if (active && payload && payload.length) {
			return (
				<div className='bg-white p-3 border rounded-lg shadow-lg border-gray-200'>
					<p className='font-semibold text-gray-900'>{`${label}`}</p>
					<p className='text-sm text-teal-600'>{`Subscriptions: ${payload[0].payload.subscriptions}`}</p>
				</div>
			);
		}
		return null;
	};

	// Custom bar component with cross-hatch pattern
	const CustomBar = (props: any) => {
		const { fill, ...rest } = props;
		const isMayBar = props.payload?.month === 'May';
		const isHovered = hoveredBar === props.payload?.index;

		return (
			<g>
				<defs>
					{/* Light cross-hatch pattern for non-May bars */}
					<pattern
						id={`crosshatch-${props.payload?.index}`}
						patternUnits='userSpaceOnUse'
						width='4'
						height='4'
					>
						<rect width='4' height='4' fill='#d1fae5' />
						<path
							d='M 0,4 l 4,-4 M -1,1 l 2,-2 M 3,5 l 2,-2'
							stroke='#10b981'
							strokeWidth='0.8'
							opacity='0.6'
						/>
					</pattern>
					{/* Hover effect pattern */}
					<pattern
						id={`crosshatch-hover-${props.payload?.index}`}
						patternUnits='userSpaceOnUse'
						width='4'
						height='4'
					>
						<rect width='4' height='4' fill='#bbf7d0' />
						<path
							d='M 0,4 l 4,-4 M -1,1 l 2,-2 M 3,5 l 2,-2'
							stroke='#059669'
							strokeWidth='1'
							opacity='0.8'
						/>
					</pattern>
				</defs>
				<rect
					{...rest}
					fill={
						isMayBar
							? '#047857' // Dark green for May
							: isHovered
							? `url(#crosshatch-hover-${props.payload?.index})` // Darker cross-hatch on hover
							: `url(#crosshatch-${props.payload?.index})` // Light cross-hatch for others
					}
					rx='4'
					ry='4'
				/>
			</g>
		);
	};

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<div className='max-w-7xl mx-auto space-y-6'>
				{/* Header with Filter Button */}
				<div className='flex justify-start'>
					<Button
						variant='outline'
						className='bg-teal-600 text-white border-teal-600 hover:bg-teal-700'
					>
						<Filter className='w-4 h-4 mr-2' />
						Show Filter
					</Button>
				</div>

				{/* KPI Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{kpiData.map((kpi, index) => {
						const Icon = kpi.icon;
						return (
							<Card
								key={index}
								className={`${kpi.bgColor} ${kpi.textColor} shadow-lg`}
							>
								<CardContent className='p-6'>
									<div className='flex items-center justify-between'>
										<div className='flex-1'>
											<Icon
												className={`w-6 h-6 mb-3 ${
													kpi.iconColor || 'text-white'
												}`}
											/>
											<p
												className={`text-sm mb-2 ${
													kpi.bgColor === 'bg-white'
														? 'text-gray-600'
														: 'text-white/90'
												}`}
											>
												{kpi.title}
											</p>
											<p
												className={`text-3xl font-bold ${
													isLoading ? 'animate-pulse' : ''
												}`}
											>
												{isLoading ? '...' : kpi.value}
											</p>
										</div>
										<div className='ml-4'>
											<CircularProgress
												percentage={kpi.percentage}
												borderColor={kpi.borderColor}
												progressColor={kpi.progressColor}
												isLoading={isLoading}
											/>
										</div>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>

				{/* Charts Section */}
				<div className='space-y-6'>
					{/* Revenue Trends Chart */}
					<Card className='shadow-lg'>
						<CardHeader className='pb-4'>
							<CardTitle className='text-lg font-semibold text-gray-900'>
								Graphs & Trends
							</CardTitle>
							<p className='text-sm text-teal-600 font-medium'>
								Revenue Trends (Monthly)
							</p>
						</CardHeader>
						<CardContent>
							<div className='flex'>
								{/* Left side revenue amounts */}
								<div className='w-16 flex flex-col justify-between text-xs text-gray-500 pr-2'>
									<span>50K</span>
									<span>40K</span>
									<span>30K</span>
									<span>20K</span>
									<span>10K</span>
									<span>0</span>
								</div>
								{/* Chart */}
								<div className='flex-1 h-64'>
									{isLoading ? (
										<div className='h-full flex items-center justify-center'>
											<div className='animate-pulse text-gray-400'>
												Loading chart...
											</div>
										</div>
									) : (
										<ResponsiveContainer width='100%' height='100%'>
											<BarChart
												data={revenueData.map((item, index) => ({
													...item,
													index,
												}))}
												onMouseMove={(e) => {
													if (e && typeof e.activeTooltipIndex === 'number') {
														setHoveredBar(e.activeTooltipIndex);
													}
												}}
												onMouseLeave={() => setHoveredBar(null)}
											>
												<XAxis
													dataKey='month'
													axisLine={false}
													tickLine={false}
													tick={{ fill: '#6b7280', fontSize: 12 }}
												/>
												<YAxis hide />
												<Bar
													dataKey='value'
													maxBarSize={40}
													shape={<CustomBar />}
												/>
											</BarChart>
										</ResponsiveContainer>
									)}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Subscription Details Chart */}
					<Card className='shadow-lg'>
						<CardHeader className='pb-4'>
							<CardTitle className='text-lg font-semibold text-gray-900'>
								Subscription Details
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='h-48'>
								{isLoading ? (
									<div className='h-full flex items-center justify-center'>
										<div className='animate-pulse text-gray-400'>
											Loading chart...
										</div>
									</div>
								) : (
									<ResponsiveContainer width='100%' height='100%'>
										<LineChart
											data={subscriptionData}
											margin={{ top: 5, right: 5, left: 5, bottom: 25 }}
										>
											<XAxis
												dataKey='month'
												axisLine={false}
												tickLine={false}
												tick={{ fill: '#6b7280', fontSize: 12 }}
												interval={0}
											/>
											<YAxis hide />
											<Tooltip content={<CustomTooltip />} />
											<Line
												type='monotone'
												dataKey='value'
												stroke='#6b7280'
												strokeWidth={2}
												dot={false}
												activeDot={{
													r: 5,
													fill: '#10b981',
													stroke: '#fff',
													strokeWidth: 2,
												}}
											/>
										</LineChart>
									</ResponsiveContainer>
								)}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
