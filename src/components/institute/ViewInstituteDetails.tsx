'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
	ChevronLeft,
	User,
	Settings,
	FileText,
	Lock,
	Activity,
	Share2,
} from 'lucide-react';
import instituteImg from '../../assets/institute/institute.png';
import logoImg from '../../assets/institute/logo.png';
import locationImg from '../../assets/institute/location.png';
import phoneImg from '../../assets/institute/Call.png';
import messageImg from '../../assets/institute/Mail.png';
import courseImg from '../../assets/institute/courseImage.png';
import { COLORS, FONTS } from '@/constants/ui constants';
import { useNavigate } from 'react-router-dom';

type ActiveSection = 'about' | 'profile' | 'courses';
type ProfileSection =
	| 'personal-info'
	| 'profile'
	| 'social-media'
	| 'documents'
	| 'change-password'
	| 'activity-logs';

export default function UniversityDashboard() {
	const [activeSection, setActiveSection] = useState<ActiveSection>('about');
	const [activeProfileSection, setActiveProfileSection] =
		useState<ProfileSection>('personal-info');
	const navigate = useNavigate();

	const Header = () => (
		<div className='bg-[#2D6974] text-white rounded-xl'>
			<div className='flex items-center px-4 py-3'>
				<ChevronLeft
					className='w-6 h-6 mr-3 cursor-pointer'
					onClick={() => navigate(-1)}
				/>
				<div className='flex items-center'>
					<div className='w-12 h-12 rounded-full flex items-center justify-center mr-3'>
						<img
							src={logoImg}
							className='w-full h-full bg-[#2D6974] rounded-full object-cover'
						/>
					</div>
					<span style={{ ...FONTS.profile_head, color: COLORS.white }}>
						Bharathidasan University
					</span>
				</div>
			</div>
			<div className='w-full h-64 relative'>
				<img
					src={instituteImg}
					alt='Bharathidasan University Campus'
					className='object-cover rounded-b-xl w-full h-full'
				/>
			</div>
		</div>
	);

	const NavigationButtons = () => (
		<div className='flex gap-2 p-4 bg-gray-50'>
			<Button
				variant={activeSection === 'about' ? 'default' : 'outline'}
				onClick={() => setActiveSection('about')}
				className={
					activeSection === 'about'
						? 'bg-[#68B39F] text-white hover:bg-[#68B39F] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
						: 'border-[#68B39F] text-[#68B39F] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
				}
			>
				About
			</Button>
			<Button
				variant={activeSection === 'profile' ? 'default' : 'outline'}
				onClick={() => setActiveSection('profile')}
				className={
					activeSection === 'profile'
						? 'bg-[#68B39F] text-white hover:bg-[#68B39F] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
						: 'border-[#68B39F] text-[#68B39F] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
				}
			>
				Profile
			</Button>
			<Button
				variant={activeSection === 'courses' ? 'default' : 'outline'}
				onClick={() => setActiveSection('courses')}
				className={
					activeSection === 'courses'
						? 'bg-[#68B39F] text-white hover:bg-[#68B39F] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
						: 'border-[#68B39F] text-[#68B39F] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
				}
			>
				Courses
			</Button>
		</div>
	);

	const AboutSection = () => (
		<div className='p-6'>
			<div className='flex gap-4 '>
				<Card className='flex-1/2 h-58'>
					<div className='flex items-center gap-3 mx-3'>
						<div className='w-2/3 flex flex-col items-center justify-center'>
							<div className='w-32 h-32 rounded-full overflow-hidden'>
								<img
									src={logoImg}
									alt='Bharathidasan University'
									className='w-full h-full object-cover rounded-full mb-2'
								/>
							</div>
							<div className='text-center mt-3'>
								<p style={{ ...FONTS.pass_head_2 }}>Bharathidasan University</p>
								<p
									style={{
										...FONTS.button_text,
										color: COLORS.gray_01,
										fontWeight: 500,
									}}
								>
									aureg@bdu.ac.in
								</p>
							</div>
						</div>
						<div className='space-y-2'>
							<h3 style={{ ...FONTS.pass_head_2 }}>Contact Details:</h3>
							<div className='space-y-2'>
								<div className='flex items-center gap-3'>
									<img src={locationImg} className='w-5 h-5' />
									<span
										style={{
											...FONTS.button_text,
											color: COLORS.gray_01,
											fontWeight: 500,
										}}
									>
										Palkalaiperur, Tiruchirappalli-620024, Tamil Nadu
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<img src={messageImg} className='w-4 h-4' />
									<span
										style={{
											...FONTS.button_text,
											color: COLORS.gray_01,
											fontWeight: 500,
										}}
									>
										aureg@bdu.ac.in
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<img src={phoneImg} className='w-4 h-4' />
									<span
										style={{
											...FONTS.button_text,
											color: COLORS.gray_01,
											fontWeight: 500,
										}}
									>
										9632407092
									</span>
								</div>
							</div>
						</div>
					</div>
				</Card>
				<Card className='flex-1/3'>
					<div className='mx-4'>
						<h2 style={{ ...FONTS.pass_head_2 }}>About Us</h2>
						<p
							className='break-words mt-2'
							style={{
								...FONTS.button_text,
								color: COLORS.gray_01,
								fontWeight: 500,
							}}
						>
							Bharathidasan University established in February 1982, and was
							named after the great revolutionary Tamil Poet, Bharathidasan
							(1891-1964). The motto of the University "We will create a brave
							new world" has been framed from Bharathidasan's poetic words
							"புதியுலகம் புதுமையுடன் படைப்போம்". The University endeavours to
							be true to such a vision by creating in the region a brave new
							world of academic innovation for social change.
						</p>
					</div>
				</Card>
			</div>
		</div>
	);

	const ProfileSidebar = () => (
		<div className='w-64 bg-white border-r'>
			<div className='p-4'>
				<h3 className='font-semibold text-gray-800 mb-4'>Settings</h3>
				<div className='space-y-1'>
					<Button
						variant={
							activeProfileSection === 'personal-info' ? 'default' : 'ghost'
						}
						className={`w-full justify-start ${
							activeProfileSection === 'personal-info'
								? 'bg-[#2D6974] hover:bg-[#2D6974] text-white'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveProfileSection('personal-info')}
					>
						<User className='w-4 h-4 mr-2' />
						Personal Info
					</Button>
					<Button
						variant={activeProfileSection === 'profile' ? 'default' : 'ghost'}
						className={`w-full justify-start ${
							activeProfileSection === 'profile'
								? 'bg-[#2D6974] hover:bg-[#2D6974] text-white'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveProfileSection('profile')}
					>
						<Settings className='w-4 h-4 mr-2' />
						Profile
					</Button>
					<Button
						variant={
							activeProfileSection === 'social-media' ? 'default' : 'ghost'
						}
						className={`w-full justify-start ${
							activeProfileSection === 'social-media'
								? 'bg-[#2D6974] hover:bg-[#2D6974] text-white'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveProfileSection('social-media')}
					>
						<Share2 className='w-4 h-4 mr-2' />
						Social Media
					</Button>
					<Button
						variant={activeProfileSection === 'documents' ? 'default' : 'ghost'}
						className={`w-full justify-start ${
							activeProfileSection === 'documents'
								? 'bg-[#2D6974] hover:bg-[#2D6974] text-white'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveProfileSection('documents')}
					>
						<FileText className='w-4 h-4 mr-2' />
						Documents
					</Button>
					<Button
						variant={
							activeProfileSection === 'change-password' ? 'default' : 'ghost'
						}
						className={`w-full justify-start ${
							activeProfileSection === 'change-password'
								? 'bg-[#2D6974] hover:bg-[#2D6974] text-white'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveProfileSection('change-password')}
					>
						<Lock className='w-4 h-4 mr-2' />
						Change Password
					</Button>
					<Button
						variant={
							activeProfileSection === 'activity-logs' ? 'default' : 'ghost'
						}
						className={`w-full justify-start ${
							activeProfileSection === 'activity-logs'
								? 'bg-[#2D6974] hover:bg-[#2D6974] text-white'
								: 'text-gray-600'
						}`}
						onClick={() => setActiveProfileSection('activity-logs')}
					>
						<Activity className='w-4 h-4 mr-2' />
						Institute Activity Logs
					</Button>
				</div>
			</div>
		</div>
	);

	const PersonalInfoForm = () => (
		<div className='p-6'>
			<h2 className='text-xl font-semibold mb-6'>
				Enter your Address Information Here
			</h2>
			<div className='grid grid-cols-2 gap-6'>
				<div className='space-y-2'>
					<Label htmlFor='institute-id'>Institute ID</Label>
					<Input id='institute-id' placeholder='Enter Institute ID' />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='institute-code'>Institute Code</Label>
					<Input id='institute-code' placeholder='Enter Institute Code' />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='institute-name'>Institute Name</Label>
					<Input id='institute-name' placeholder='Enter Institute Name' />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='official-email'>Official Email</Label>
					<Input
						id='official-email'
						type='email'
						placeholder='Enter Official Email'
					/>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='status'>Status</Label>
					<Input id='status' placeholder='Enter Status' />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='contact'>Contact</Label>
					<Input id='contact' placeholder='Enter Contact' />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='alternative-number'>Alternative Number</Label>
					<Input
						id='alternative-number'
						placeholder='Enter Alternative Number'
					/>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='registered-date'>Registered Date</Label>
					<Input id='registered-date' type='date' />
				</div>
				<div className='col-span-2 space-y-2'>
					<Label htmlFor='address'>Address</Label>
					<Textarea
						id='address'
						placeholder='Enter Address'
						className='min-h-[100px]'
					/>
				</div>
			</div>
			<div className='flex gap-4 mt-6'>
				<Button variant='outline'>Edit</Button>
				<Button className='bg-[#2D6974] hover:bg-[#2D6974]'>Suspend</Button>
			</div>
		</div>
	);

	const ProfileContent = () => {
		switch (activeProfileSection) {
			case 'personal-info':
				return <PersonalInfoForm />;
			case 'profile':
				return (
					<div className='p-6'>
						<h2 className='text-xl font-semibold mb-4'>Profile Settings</h2>
						<p className='text-gray-600'>
							Manage your profile information and preferences.
						</p>
					</div>
				);
			case 'social-media':
				return (
					<div className='p-6'>
						<h2 className='text-xl font-semibold mb-4'>Social Media</h2>
						<p className='text-gray-600'>Connect your social media accounts.</p>
					</div>
				);
			case 'documents':
				return (
					<div className='p-6'>
						<h2 className='text-xl font-semibold mb-4'>Documents</h2>
						<p className='text-gray-600'>Upload and manage your documents.</p>
					</div>
				);
			case 'change-password':
				return (
					<div className='p-6'>
						<h2 className='text-xl font-semibold mb-4'>Change Password</h2>
						<div className='space-y-4 max-w-md'>
							<div className='space-y-2'>
								<Label htmlFor='current-password'>Current Password</Label>
								<Input id='current-password' type='password' />
							</div>
							<div className='space-y-2'>
								<Label htmlFor='new-password'>New Password</Label>
								<Input id='new-password' type='password' />
							</div>
							<div className='space-y-2'>
								<Label htmlFor='confirm-password'>Confirm Password</Label>
								<Input id='confirm-password' type='password' />
							</div>
							<Button className='bg-[#2D6974] hover:bg-[#2D6974]'>
								Update Password
							</Button>
						</div>
					</div>
				);
			case 'activity-logs':
				return (
					<div className='p-6'>
						<h2 className='text-xl font-semibold mb-4'>
							Institute Activity Logs
						</h2>
						<p className='text-gray-600'>
							View your recent activity and system logs.
						</p>
					</div>
				);
			default:
				return <PersonalInfoForm />;
		}
	};

	const ProfileSection = () => (
		<div className='flex min-h-[600px]'>
			<ProfileSidebar />
			<div className='flex-1 bg-gray-50'>
				<ProfileContent />
			</div>
		</div>
	);

	const CoursesSection = () => (
		<div className='p-6'>
			<div className='max-w-sm'>
				<Card>
					<CardHeader className='pb-2'>
						<div className='flex items-center gap-2 mb-2'>
							<img src={courseImg} alt='course-image' />
						</div>
						<div
							className='bg-[#68B39F] text-white rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-3 w-24 text-center'
							style={{ ...FONTS.text4 }}
						>
							Featured
						</div>
					</CardHeader>
					<CardContent>
						<CardTitle
							className='mb-2'
							style={{ ...FONTS.percentage_text, color: COLORS.black }}
						>
							MERN STACK
						</CardTitle>
						<CardDescription
							className=' mb-4'
							style={{ ...FONTS.text1, color: COLORS.gray_01 }}
						>
							A MERN stack developer is responsible for front-end and back-end
							development, database management, server configuration, and API
							integration.
						</CardDescription>
						<div className='flex justify-between items-center text-sm'>
							<span style={{ ...FONTS.text3, color: COLORS.button }}>
								Modules
							</span>
							<span style={{ ...FONTS.text3, color: COLORS.button }}>
								Duration: 30 days
							</span>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);

	const renderContent = () => {
		switch (activeSection) {
			case 'about':
				return <AboutSection />;
			case 'profile':
				return <ProfileSection />;
			case 'courses':
				return <CoursesSection />;
			default:
				return <AboutSection />;
		}
	};

	return (
		<div className='min-h-screen bg-white'>
			<Header />
			<NavigationButtons />
			{renderContent()}
		</div>
	);
}
