'use client';

import type React from 'react';
import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Mock FONTS constant since it's not provided
const FONTS = {
	percentage_text: { fontSize: '14px', fontWeight: '500' },
	tableheader: { fontSize: '16px', fontWeight: '600' },
};

interface FormData {
	// Personal Info
	instituteName: string;
	registeredCode: string;
	description: string;
	addressLine1: string;
	addressLine2: string;
	phoneNumber: string;
	altPhoneNumber: string;
	contact: string;
	state: string;
	city: string;
	pinCode: string;
	officialEmail: string;
	officialWebsite: string;
	subscription: string;
	// Gallery Info
	instituteLogo: File | null;
	logoDescription: string;
	instituteImage: File | null;
	imageDescription: string;
	instituteLogoSecond: File | null;
	// Social Links
	twitter: string;
	facebook: string;
	instagram: string;
	linkedin: string;
	pinterest: string;
	// Documents
	gstNumber: string;
	panNumber: string;
	licenseNumber: string;
	// Account Details
	branchName: string;
	phone: string;
	alternativePhone: string;
	addressLin1: string;
	addressLin2: string;
	country: string;
	stateBranch: string;
	cityBranch: string;
	pinCodeBranch: string;
	fullName: string;
	lastName: string;
	email: string;
	phoneNumberAccount: string;
	profileImage: File | null;
}

// Move components outside to prevent recreation on every render
const FileUploadBox = ({
	field,
	title,
	description,
	file,
	onFileChange,
}: {
	field: keyof FormData;
	title: string;
	description: string;
	file: File | null;
	onFileChange: (
		field: keyof FormData
	) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	const id = `file-${field}`;
	return (
		<div className='space-y-2'>
			<Label className='text-sm font-medium text-gray-700'>{title}</Label>
			<div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors'>
				<input
					type='file'
					onChange={onFileChange(field)}
					className='hidden'
					id={id}
					accept='image/*'
				/>
				<label htmlFor={id} className='cursor-pointer'>
					<Upload className='w-8 h-8 mx-auto mb-2 text-gray-400' />
					<p className='mb-1 text-gray-600'>Drag & Drop Or Click To Upload</p>
					<p className='text-xs text-gray-400'>{description}</p>
					{file && <p className='text-sm text-teal-600 mt-2'>{file.name}</p>}
				</label>
			</div>
		</div>
	);
};

const InputField = ({
	label,
	field,
	type = 'text',
	placeholder = '',
	className = '',
	value,
	onChange,
}: {
	label: string;
	field: keyof FormData;
	type?: string;
	placeholder?: string;
	className?: string;
	value: string;
	onChange: (field: keyof FormData, value: string) => void;
}) => {
	const id = `input-${field}`;
	return (
		<div className={className}>
			<Label htmlFor={id} className='text-sm font-medium text-gray-700'>
				{label}
			</Label>
			<Input
				id={id}
				type={type}
				value={value}
				onChange={(e) => onChange(field, e.target.value)}
				placeholder={placeholder}
				className='mt-1'
			/>
		</div>
	);
};

const TextareaField = ({
	label,
	field,
	rows = 3,
	className = '',
	value,
	onChange,
}: {
	label: string;
	field: keyof FormData;
	rows?: number;
	className?: string;
	value: string;
	onChange: (field: keyof FormData, value: string) => void;
}) => {
	const id = `textarea-${field}`;
	return (
		<div className={className}>
			<Label htmlFor={id} className='text-sm font-medium text-gray-700'>
				{label}
			</Label>
			<Textarea
				id={id}
				value={value}
				onChange={(e) => onChange(field, e.target.value)}
				className='mt-1'
				rows={rows}
			/>
		</div>
	);
};

const StepperForm: React.FC = () => {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		instituteName: '',
		registeredCode: '',
		description: '',
		addressLine1: '',
		addressLine2: '',
		phoneNumber: '',
		altPhoneNumber: '',
		contact: '',
		state: '',
		city: '',
		pinCode: '',
		officialEmail: '',
		officialWebsite: '',
		subscription: '',
		instituteLogo: null,
		logoDescription: '',
		instituteImage: null,
		imageDescription: '',
		instituteLogoSecond: null,
		twitter: '',
		facebook: '',
		instagram: '',
		linkedin: '',
		pinterest: '',
		gstNumber: '',
		panNumber: '',
		licenseNumber: '',
		branchName: '',
		phone: '',
		alternativePhone: '',
		addressLin1: '',
		addressLin2: '',
		country: '',
		stateBranch: '',
		cityBranch: '',
		pinCodeBranch: '',
		fullName: '',
		lastName: '',
		email: '',
		phoneNumberAccount: '',
		profileImage: null,
	});

	const steps = [
		{ id: 1, title: 'Personal Info', number: '1' },
		{ id: 2, title: 'Gallery Info', number: '2' },
		{ id: 3, title: 'Social Links', number: '3' },
		{ id: 4, title: 'Documents', number: '4' },
		{ id: 5, title: 'Account Details', number: '5' },
	];

	const handleInputChange = useCallback(
		(field: keyof FormData, value: string | File | null) => {
			setFormData((prev) => ({
				...prev,
				[field]: value,
			}));
		},
		[]
	);

	const handleFileUpload = useCallback(
		(field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0] || null;
			handleInputChange(field, file);
		},
		[handleInputChange]
	);

	const nextStep = () => {
		if (currentStep < 5) {
			setCurrentStep(currentStep + 1);
		} else {
			toast.success('Institute added successfully');
			navigate('/institute');
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const StepHeader = () => (
		<div className='flex items-center justify-center mb-8 space-x-4'>
			{steps.map((step) => (
				<div key={step.id} className='flex flex-col items-center gap-3'>
					<div
						className={`w-44 h-44 rounded-lg flex flex-col items-center justify-center gap-4 ${
							currentStep === step.id
								? '!bg-[#2D6974]'
								: currentStep > step.id
								? '!bg-[#2D6974]'
								: ''
						}`}
					>
						<div
							className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-medium ${
								currentStep === step.id
									? '!bg-white !text-[#2D6974]'
									: currentStep > step.id
									? '!bg-white !text-[#2D6974]'
									: '!bg-[#999999] !text-white'
							}`}
							style={{ ...FONTS.percentage_text }}
						>
							{currentStep > step.id ? (
								<Check className='w-6 h-6' />
							) : (
								step.number
							)}
						</div>
						<div className='ml-2 text-center'>
							<div
								className={`${
									currentStep === step.id
										? '!text-white'
										: currentStep > step.id
										? '!text-white'
										: '!text-[#999999]'
								}`}
								style={{ ...FONTS.tableheader }}
							>
								{step.title}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);

	const renderStepContent = () => {
		switch (currentStep) {
			case 1:
				return (
					<div className='space-y-6'>
						<div>
							<h2 className='text-2xl font-bold text-gray-800 mb-2'>
								Personal Info
							</h2>
							<p className='text-gray-600 mb-6'>
								Add Logo Image, Gallery Information
							</p>
						</div>
						<div>
							<h3 className='font-semibold text-gray-700 mb-4'>
								Enter your Institute Details Here
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<InputField
									label='Institute Name'
									field='instituteName'
									value={formData.instituteName}
									onChange={handleInputChange}
								/>
								<InputField
									label='Registered Code'
									field='registeredCode'
									value={formData.registeredCode}
									onChange={handleInputChange}
								/>
							</div>
							<TextareaField
								label='Description'
								field='description'
								className='mt-4'
								value={formData.description}
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<h3 className='font-semibold text-gray-700 mb-4'>
								Enter your Address Information Here
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<InputField
									label='Address Line 1'
									field='addressLine1'
									value={formData.addressLine1}
									onChange={handleInputChange}
								/>
								<InputField
									label='Address Line 2'
									field='addressLine2'
									value={formData.addressLine2}
									onChange={handleInputChange}
								/>
								<InputField
									label='Phone Number'
									field='phoneNumber'
									type='tel'
									value={formData.phoneNumber}
									onChange={handleInputChange}
								/>
								<InputField
									label='Alt Phone Number'
									field='altPhoneNumber'
									type='tel'
									value={formData.altPhoneNumber}
									onChange={handleInputChange}
								/>
								<InputField
									label='Contact'
									field='contact'
									value={formData.contact}
									onChange={handleInputChange}
								/>
								<InputField
									label='State'
									field='state'
									value={formData.state}
									onChange={handleInputChange}
								/>
								<InputField
									label='City'
									field='city'
									value={formData.city}
									onChange={handleInputChange}
								/>
								<InputField
									label='Pin code'
									field='pinCode'
									value={formData.pinCode}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div>
							<h3 className='font-semibold text-gray-700 mb-4'>
								Enter your Contact Details Here
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<InputField
									label='Official Email'
									field='officialEmail'
									type='email'
									value={formData.officialEmail}
									onChange={handleInputChange}
								/>
								<InputField
									label='Official Website'
									field='officialWebsite'
									value={formData.officialWebsite}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div>
							<h3 className='font-semibold text-gray-700 mb-4'>
								Enter your Subscription Information Here
							</h3>
							<InputField
								label='Subscription'
								field='subscription'
								value={formData.subscription}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				);
			case 2:
				return (
					<div className='space-y-6'>
						<div>
							<h2 className='text-2xl font-bold text-gray-800 mb-2'>
								Gallery Info
							</h2>
							<p className='text-gray-600 mb-6'>Add Gallery Info</p>
						</div>
						<div className='space-y-6'>
							<FileUploadBox
								field='instituteLogo'
								title='Institute Logo'
								description='Upload your brand or logo logo Size 300X300 px (Max 80 kb)'
								file={formData.instituteLogo}
								onFileChange={handleFileUpload}
							/>
							<TextareaField
								label='Description'
								field='logoDescription'
								value={formData.logoDescription}
								onChange={handleInputChange}
							/>
							<FileUploadBox
								field='instituteImage'
								title='Institute Image'
								description='Upload your institute image Size 300X300 px (Max 1 Mb)'
								file={formData.instituteImage}
								onFileChange={handleFileUpload}
							/>
							<TextareaField
								label='Description'
								field='imageDescription'
								value={formData.imageDescription}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				);
			case 3:
				return (
					<div className='space-y-6'>
						<div>
							<h2 className='text-2xl font-bold text-gray-800 mb-2'>
								Social Links
							</h2>
							<p className='text-gray-600 mb-6'>Add Social Links</p>
						</div>
						<div>
							<h3 className='font-semibold text-gray-700 mb-4'>
								Give your Social Links Here
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<InputField
									label='Twitter'
									field='twitter'
									placeholder='https://twitter.com/username'
									value={formData.twitter}
									onChange={handleInputChange}
								/>
								<InputField
									label='Facebook'
									field='facebook'
									placeholder='https://facebook.com/username'
									value={formData.facebook}
									onChange={handleInputChange}
								/>
								<InputField
									label='Instagram'
									field='instagram'
									placeholder='https://instagram.com/username'
									value={formData.instagram}
									onChange={handleInputChange}
								/>
								<InputField
									label='Linkedin'
									field='linkedin'
									placeholder='https://linkedin.com/in/username'
									value={formData.linkedin}
									onChange={handleInputChange}
								/>
							</div>
							<InputField
								label='Pinterest'
								field='pinterest'
								placeholder='https://pinterest.com/username'
								className='mt-4'
								value={formData.pinterest}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				);
			case 4:
				return (
					<div className='space-y-6'>
						<div>
							<h2 className='text-2xl font-bold text-gray-800 mb-2'>
								Documents
							</h2>
							<p className='text-gray-600 mb-6'>Add Institute Docs</p>
						</div>
						<div className='space-y-6'>
							<div>
								<h3 className='font-semibold text-gray-700 mb-4'>
									GST Information
								</h3>
								<InputField
									label='GST Number'
									field='gstNumber'
									value={formData.gstNumber}
									onChange={handleInputChange}
								/>
							</div>
							<div>
								<h3 className='font-semibold text-gray-700 mb-4'>
									PAN Information
								</h3>
								<InputField
									label='PAN Number'
									field='panNumber'
									value={formData.panNumber}
									onChange={handleInputChange}
								/>
							</div>
							<div>
								<h3 className='font-semibold text-gray-700 mb-4'>
									License Information
								</h3>
								<InputField
									label='License Number'
									field='licenseNumber'
									value={formData.licenseNumber}
									onChange={handleInputChange}
								/>
							</div>
						</div>
					</div>
				);
			case 5:
				return (
					<div className='space-y-6'>
						<div>
							<h2 className='text-2xl font-bold text-gray-800 mb-2'>
								Account Details
							</h2>
							<p className='text-gray-600 mb-6'>Enter your Account Details</p>
						</div>
						<div>
							<h3 className='font-semibold text-gray-700 mb-4'>
								Enter your Branch Details Here
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<InputField
									label='Branch Name'
									field='branchName'
									value={formData.branchName}
									onChange={handleInputChange}
								/>
								<InputField
									label='Phone'
									field='phone'
									type='tel'
									value={formData.phone}
									onChange={handleInputChange}
								/>
								<InputField
									label='Alternative Phone'
									field='alternativePhone'
									type='tel'
									value={formData.alternativePhone}
									onChange={handleInputChange}
								/>
								<InputField
									label='Address Line 1'
									field='addressLin1'
									value={formData.addressLin1}
									onChange={handleInputChange}
								/>
								<InputField
									label='Address Line 2'
									field='addressLin2'
									value={formData.addressLin2}
									onChange={handleInputChange}
								/>
								<InputField
									label='Country'
									field='country'
									value={formData.country}
									onChange={handleInputChange}
								/>
								<InputField
									label='State'
									field='stateBranch'
									value={formData.stateBranch}
									onChange={handleInputChange}
								/>
								<InputField
									label='City'
									field='cityBranch'
									value={formData.cityBranch}
									onChange={handleInputChange}
								/>
								<InputField
									label='Pin Code'
									field='pinCodeBranch'
									value={formData.pinCodeBranch}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div>
							<h3 className='font-semibold text-gray-700 mb-4'>
								Enter your Contact Details Here
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<InputField
									label='Full Name'
									field='fullName'
									value={formData.fullName}
									onChange={handleInputChange}
								/>
								<InputField
									label='Last Name'
									field='lastName'
									value={formData.lastName}
									onChange={handleInputChange}
								/>
								<InputField
									label='Email'
									field='email'
									type='email'
									value={formData.email}
									onChange={handleInputChange}
								/>
								<InputField
									label='Phone Number'
									field='phoneNumberAccount'
									type='tel'
									value={formData.phoneNumberAccount}
									onChange={handleInputChange}
								/>
							</div>
							<div className='mt-4'>
								<Label className='text-sm font-medium text-gray-700'>
									Profile Image
								</Label>
								<Input
									type='file'
									onChange={handleFileUpload('profileImage')}
									className='mt-1'
									accept='image/*'
								/>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 py-8'>
			<div className='max-w-4xl mx-auto px-4'>
				<StepHeader />
				<Card className='shadow-lg'>
					<CardContent className='p-8'>
						{renderStepContent()}
						<div className='flex justify-between mt-8'>
							<Button
								variant='outline'
								onClick={prevStep}
								disabled={currentStep === 1}
								className='border-[#2D6974] text-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
							>
								Back
							</Button>
							<Button
								onClick={nextStep}
								className='bg-[#2D6974] text-white hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-5 w-28'
							>
								{currentStep === 5 ? 'Complete' : 'Next'}
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default StepperForm;
