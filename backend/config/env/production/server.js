module.exports = () => ({
	host: '0.0.0.0',
	port: process.env.PORT || 1337,
	production: true,
	url: 'https://api.drexelww.com',
	cron: {
		enabled: false
	},
	admin: {
		url: '/dashboard',
		autoOpen: false
	}
});