// import axios from 'axios';
const axios = require('axios');
'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	// POST /sendEmail
	sendEmail: async ctx => {
		try {
			const { email, firstName, lastName, subject, message } = ctx.request.body;
			const res = await axios({
				method: 'post',
				url: 'https://api.sendgrid.com/v3/mail/send',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
				},
				data: {
					personalizations: [{
						to: [{
							email: 'help@drexelww.com',
							name: 'Drexel Weekend Warriors'
						}],
						subject: `${subject} - From Drexelww.com`
					}],
					content: [{
						type: 'text/plain',
						value: message
					}],
					from: {
						email: 'help@drexelww.com',
						name: `${firstName} ${lastName}`
					},
					reply_to: {
						email: email,
						name: `${firstName} ${lastName}`
					}
				}
			});
			await ctx.send({
				status: res.status,
			});
		} catch(err) {
			console.error(err);
			ctx.send({
				status: 404,
				err: err
			});
		}
	}
};
