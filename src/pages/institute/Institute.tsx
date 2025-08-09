import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Component, Droplet, MapPin, Users, Plus } from 'lucide-react';
import filterImg from '../../assets/dashboard/filter.png';
import { COLORS, FONTS } from '@/constants/ui constants';
import instituteImg from '../../assets/institute/instituteImage.png';
import locationImg from '../../assets/institute/location.png';
import buildingImg from '../../assets/institute/building.png';

interface Institute {
	id: number;
	name: string;
	location: string;
	type: string;
	logo: string;
}

const Institutes: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const [showFilter, setShowFilter] = useState(false);
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
	const [selectedYear, setSelectedYear] = useState<string | null>(null);
	const [institutes] = useState<Institute[]>([
		{
			id: 1,
			name: 'Bharathidasan University',
			location: 'Kanchipuram, Highway 500',
			type: 'Branches',
			logo: '🏛️',
		},
		{
			id: 2,
			name: 'Bharathidasan University',
			location: 'Madras, Highway 500',
			type: 'Branches',
			logo: '🏛️',
		},
		{
			id: 3,
			name: 'Bharathidasan University',
			location: 'Kanchipuram, Highway 500',
			type: 'Branches',
			logo: '🏛️',
		},
		{
			id: 4,
			name: 'Bharathidasan University',
			location: 'Madras, Highway 500',
			type: 'Branches',
			logo: '🏛️',
		},
	]);

	// Simulate loading
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	// Filter KPI data based on selection (simplified for demo)
	const getFilteredKpiData = () => {
		if (!selectedMonth) return kpiData;

		// This is a simplified example - in a real app you'd have actual filtered data
		return kpiData.map((kpi) => ({
			...kpi,
			percentage: Math.min(kpi.percentage + Math.floor(Math.random() * 10), 95),
			value: `${Math.min(
				kpi.percentage + Math.floor(Math.random() * 10),
				95
			)}%`,
		}));
	};

	const [kpiData, setKpiData] = useState([
		{
			title: 'Total Institute',
			value: '45%',
			percentage: 45,
			icon: Zap,
			bgColor: 'bg-teal-600',
			iconBg: 'bg-teal-100',
			iconColor: 'text-teal-600',
			progressColor: '#14b8a6',
		},
		{
			title: 'Active Institute',
			value: '9%',
			percentage: 9,
			icon: Component,
			bgColor: 'bg-white',
			iconBg: 'bg-purple-100',
			iconColor: 'text-purple-500',
			progressColor: '#8b5cf6',
		},
		{
			title: 'Blocked Institute',
			value: '25%',
			percentage: 25,
			icon: Droplet,
			bgColor: 'bg-white',
			iconBg: 'bg-yellow-100',
			iconColor: 'text-yellow-500',
			progressColor: '#f59e0b',
		},
	]);

	useEffect(() => {
		setKpiData(getFilteredKpiData());
	}, [selectedMonth, selectedYear]);

	const CircularProgress = ({
		percentage,
		progressColor,
		isLoading,
		isHovered,
	}: {
		percentage: number;
		progressColor: string;
		isLoading: boolean;
		isHovered: boolean;
	}) => {
		const radius = 40;
		const circumference = 2 * Math.PI * radius;
		const visibleCircumference = circumference * 0.75;
		const startAngle = -135;
		const strokeDashoffset = isLoading
			? visibleCircumference
			: visibleCircumference + (percentage / 100) * visibleCircumference;

		return (
			<div className='relative w-24 h-24'>
				<svg className='w-full h-full' viewBox='0 0 100 100'>
					{/* Background circle - only showing 270 degrees */}
					<path
						d={describeArc(50, 50, radius, startAngle, startAngle + 270)}
						stroke={isHovered ? 'rgba(255,255,255,0.3)' : '#e5e7eb'}
						strokeWidth='8'
						fill='none'
						strokeLinecap='round'
					/>
					{/* Progress circle - only showing 270 degrees */}
					<path
						d={describeArc(50, 50, radius, startAngle, startAngle + 270)}
						stroke={isHovered ? 'white' : progressColor}
						strokeWidth='8'
						fill='none'
						strokeDasharray={visibleCircumference}
						strokeDashoffset={strokeDashoffset}
						strokeLinecap='round'
						className='transition-all duration-1000 ease-out'
					/>
				</svg>
				{/* Center percentage text */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<span
						className={`text-lg font-bold ${
							isHovered ? 'text-white' : 'text-gray-800'
						} ${isLoading ? 'animate-pulse' : ''}`}
						style={{ ...FONTS.percentage_text }}
					>
						{`${percentage}%`}
					</span>
				</div>
			</div>
		);
	};

	// Helper function to describe an arc for the SVG path
	function describeArc(
		x: number,
		y: number,
		radius: number,
		startAngle: number,
		endAngle: number
	) {
		const start = polarToCartesian(x, y, radius, endAngle);
		const end = polarToCartesian(x, y, radius, startAngle);

		const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

		return [
			'M',
			start.x,
			start.y,
			'A',
			radius,
			radius,
			0,
			largeArcFlag,
			0,
			end.x,
			end.y,
		].join(' ');
	}

	// Helper function to convert polar coordinates to Cartesian
	function polarToCartesian(
		centerX: number,
		centerY: number,
		radius: number,
		angleInDegrees: number
	) {
		const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

		return {
			x: centerX + radius * Math.cos(angleInRadians),
			y: centerY + radius * Math.sin(angleInRadians),
		};
	}

	// Months and years for filter dropdowns
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const years = ['2022', '2023', '2024', '2025'];

	const resetFilters = () => {
		setSelectedMonth(null);
		setSelectedYear(null);
	};

	return (
		<div className='min-h-screen bg-gray-50 p-6'>
			<div className='max-w-7xl mx-auto space-y-6'>
				{/* Header */}
				<div className='flex justify-between items-center'>
					<Button
						variant='outline'
						className='bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-6'
						onClick={() => setShowFilter(!showFilter)}
					>
						<img src={filterImg} className='w-6 h-6 mr-2' />
						<span style={{ ...FONTS.button_text }}>
							{showFilter ? 'Hide Filter' : 'Show Filter'}
						</span>
					</Button>
					<Button className='bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-6'>
						<Plus className='w-6 h-6' />
						<span style={{ ...FONTS.button_text }}>Add Institute</span>
					</Button>
				</div>

				{/* Filter Card */}
				{showFilter && (
					<Card className='shadow-lg border-0 p-4'>
						<div className='flex items-center justify-between'>
							<h2 style={{ ...FONTS.sub_text, color: COLORS.secondary }}>
								Filters
							</h2>
							<Button
								variant='outline'
								className='bg-[#68B39F] text-white hover:bg-[#2D6974] rounded-md px-4 py-2 rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none'
								onClick={resetFilters}
							>
								Reset
							</Button>
						</div>
						<div className='flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0'>
							<div className='flex-1'>
								<label
									className='block mb-1'
									style={{ ...FONTS.button_text, color: COLORS.black }}
								>
									Month
								</label>
								<select
									className='w-full p-2 border border-[#999] rounded-md focus:ring-[#68B39F] focus:border-[#68B39F]'
									value={selectedMonth || ''}
									style={{ ...FONTS.option_text, color: COLORS.black }}
									onChange={(e) => setSelectedMonth(e.target.value || null)}
								>
									<option
										value=''
										style={{ ...FONTS.option_text, color: COLORS.black }}
									>
										All Months
									</option>
									{months.map((month) => (
										<option
											key={month}
											value={month}
											style={{ ...FONTS.option_text, color: COLORS.black }}
										>
											{month}
										</option>
									))}
								</select>
							</div>
							<div className='flex-1'>
								<label
									className='block mb-1'
									style={{ ...FONTS.button_text, color: COLORS.black }}
								>
									Year
								</label>
								<select
									className='w-full p-2 border border-[#999] rounded-md focus:ring-[#68B39F] focus:border-[#68B39F]'
									value={selectedYear || ''}
									style={{ ...FONTS.option_text, color: COLORS.black }}
									onChange={(e) => setSelectedYear(e.target.value || null)}
								>
									<option
										value=''
										style={{ ...FONTS.option_text, color: COLORS.black }}
									>
										All Years
									</option>
									{years.map((year) => (
										<option
											key={year}
											value={year}
											style={{ ...FONTS.option_text, color: COLORS.black }}
										>
											{year}
										</option>
									))}
								</select>
							</div>
						</div>
					</Card>
				)}

				{/* KPI Cards */}
				<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
					{kpiData.map((kpi, index) => {
						const isHovered = hoveredCard === index;
						const IconComponent = kpi.icon;

						return (
							<Card
								key={index}
								className={`
                  shadow-lg transition-all duration-300 cursor-pointer border-0
                  rounded-tl-3xl rounded-br-3xl rounded-bl-none rounded-tr-none
                  ${
										isHovered || index === 0
											? 'bg-[#2D6974] text-white hover:scale-105'
											: 'bg-white text-gray-900 hover:scale-100'
									}
                `}
								onMouseEnter={() => setHoveredCard(index)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								<CardContent className='p-6'>
									<div className='flex flex-col items-center text-center space-y-4'>
										{/* Icon with background circle */}
										<div
											className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        ${isHovered || index === 0 ? 'bg-white/20' : kpi.iconBg}
                      `}
										>
											<IconComponent
												className={`
                          w-6 h-6
                          ${
														isHovered || index === 0
															? 'text-white'
															: kpi.iconColor
													}
                        `}
											/>
										</div>

										{/* Title */}
										<h3
											className={`
                        text-sm font-medium leading-tight
                        ${
													isHovered || index === 0
														? 'text-white/90'
														: 'text-gray-600'
												}
                      `}
											style={{ ...FONTS.card_text }}
										>
											{kpi.title}
										</h3>

										{/* Circular progress */}
										<div className='flex flex-col items-center'>
											<CircularProgress
												percentage={kpi.percentage}
												progressColor={kpi.progressColor}
												isLoading={isLoading}
												isHovered={isHovered || index === 0}
											/>
										</div>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>

				{/* Institute List */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					{institutes.map((institute: any) => (
						<Card
							key={institute.id}
							className='bg-white shadow-sm hover:shadow-md transition-shadow'
						>
							<CardContent className='px-6'>
								<div className=''>
									<div className='flex items-center gap-4 mb-4'>
										<div className='w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-md'>
											<img
												src={instituteImg}
												alt={institute.name}
												className='rounded-lg w-full h-full object-cover'
											/>
										</div>
										<h3
											className=' !text-[#242731] mb-3'
											style={{ ...FONTS.tableheader }}
										>
											{institute.name}
										</h3>
									</div>

									<div className='flex-1'>
										<div className='flex items-center gap-6 text-sm text-gray-500 mb-4'>
											<div className='flex items-center gap-1'>
												<img
													src={locationImg}
													alt={institute.location}
													className='w-5 h-5 object-cover'
												/>
												<span
													style={{ ...FONTS.btn_txt, color: COLORS.gray_01 }}
												>
													{institute.location}
												</span>
											</div>

											<div className='flex items-center gap-1'>
												<img
													src={buildingImg}
													alt={institute.type}
													className='w-5 h-5 object-cover'
												/>
												<span
													style={{ ...FONTS.btn_txt, color: COLORS.gray_01 }}
												>
													{institute.type}
												</span>
											</div>
										</div>

										<div className='flex justify-between gap-3'>
											<Button
												variant='outline'
												className='!text-[#2D6974] border-[#2D6974] px-4'
												style={{ ...FONTS.pass_head_2 }}
											>
												Plan
											</Button>
											<Button
												className='bg-[#2D6974] hover:bg-[#2D6974] !text-white px-4'
												style={{ ...FONTS.pass_head_2 }}
											>
												View
											</Button>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default Institutes;
