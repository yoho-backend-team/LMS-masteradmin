export const API_END_POINTS = {
	institute: {
		getAll: '/api/lms/platform/getAll',
		create: '/api/lms/platform/',
		get: '/api/lms/platform/',
		courseWithUserDeatils: '/api/lms/platform/course/',
		update: '/api/lms/platform/update/',
	},
	branch: {
		all: '/api/institutes/',
	},
	notification: {
		create: '/api/notification/institute/notifications',
		get_all: 'api/notification/institute/all',
		resend: '/api/notification/institute/resend-notification/',
	},
	payments: {
		getAll: '/api/lms/platform/payments/subscription-management/all/',
		getWithId: '/api/lms/platform/payments/subscription-management/payment/',
		create:
			'api/subscription/institute/upgrade-subscription/:instituteId/susbcriptionupdate',
		approve: 'api/lms/platform/payments/subscription-management/approval',
	},
	auth: {
		verify_otp: '/api/auth/verify-otp/',
		resend_otp: '/api/auth/resend-otp/',
		validate_otp: '/api/auth/validate-otp/',
		sign_in: 'api/auth/login',
		forget_password: '/api/auth/forget-password/',
		update_password: '/api/auth/update-password/',
		get_profile: '/api/auth/me',
		get_activity: '/api/auth/activity',
		edit_profile: '/api/auth/edit-profile',
		reports: 'api/institutes/platform/report',
	},
	subscription: {
		all: '/api/subscription/plans',
		get_all: '/api/subscription/plans/all',
		create: '/api/subscription/plan/',
		getWithId: '/api/subscription/institute/upgrade-subscription/request/',
		approve:
			'/api/subscription/institute/upgrade-subscription/susbcriptionupdate',
	},
	help_center: {
		create: '/api/help-center/',
		getall: '/api/help-center/all',
		ticket: {
			get_all: '/api/institutes/admin/ticket/get-alll',
		},
	},
	faq_category: {
		all: '/api/lms/faq-category/',
		create: '/api/lms/faq-category/',
	},
	activity: {
		get: '/api/auth/activity',
	},
	faq: '/api/lms/faq/',
	fileUpload: '/api/upload/',
	fileUploads: '/api/upload/mutiple/',
};
