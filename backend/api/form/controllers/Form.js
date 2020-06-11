const { sanitizeEntity } = require('strapi-utils');
const Cryptr = require('cryptr');
'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	// POST /getFormToken
	getFormToken: async ctx => {
		try {
			const { isMultiSignUp, tripId } = ctx.request.body;
			const signUpType = isMultiSignUp ? 'multi' : 'single';
			const cryptr = new Cryptr(process.env.FORM_GENERATE_HASH_TOKEN);
			const hashCode = cryptr.encrypt(JSON.stringify({
				timeCreated: Date.now(),
				tripId,
				signUpType
			}));
      
			await ctx.send({
				status: 200,
				formToken: hashCode
			});
		} catch (err) {
			console.error(err);
			await ctx.send({
				status: 404,
				err: 'Contact IT Officer'
			});
		}
	},
	// POST /checkFormToken
	checkFormToken: async ctx => {
		try {
			const { hashCode } = ctx.request.body;
			const cryptr = new Cryptr(process.env.FORM_GENERATE_HASH_TOKEN);
			const formQuery = await strapi.query('form').findOne({hashCode});
			const { signUpType } = JSON.parse(cryptr.decrypt(hashCode));

			const isValidForm = (signUpType === 'single' && formQuery === null) || signUpType === 'multi';
			await ctx.send({
				status: 200,
				isValid: isValidForm
			});
		} catch(err) {
			console.error(err);
			await ctx.send({
				status: 404,
				err: 'Contact IT Officer'
			});
		}
	},
	// POST /forms
	create: async ctx => {
		try {
			const { hashCode } = ctx.request.body;
			const cryptr = new Cryptr(process.env.FORM_GENERATE_HASH_TOKEN);
			const { signUpType } = JSON.parse(cryptr.decrypt(hashCode));
      
			// eslint-disable-next-line no-undef
			if (signUpType === 'single' && await strapi.query('form').findOne({hashCode})) {
				return await ctx.send({
					status: 401,
					err: 'Unauthorized request, did not submit form'
				});
			}

			const entity = await strapi.services.form.create(ctx.request.body);
			return sanitizeEntity(entity, { model: strapi.models.form });
		} catch (err) {
			console.error(err);
			await ctx.send({
				status: 404,
				err: err
			});
		}
	},
};
