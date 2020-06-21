module.exports = ({ env }) => ({	
	email: {	
		provider: 'sendgrid',	
		providerOptions: {	
			apiKey: env('SENDGRID_API_KEY')	
		},	
		settings: {	
			defaultFrom: 'drexelweekendwarriors@gmail.com',	
			defaultReplyTo: 'drexelweekendwarriors@gmail.com'	
		},	
	},	
});