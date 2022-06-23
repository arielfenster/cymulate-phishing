const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
	{
		from: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		to: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ['SENT', 'CLICKED'],
			default: 'SENT',
		},
	},
	{ timestamps: true },
);

const emailModel = mongoose.model('Email', emailSchema);

module.exports = { emailModel };
