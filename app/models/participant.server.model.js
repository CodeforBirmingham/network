'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
	Schema = mongoose.Schema;

/**
 * Participant Schema
 */
var ParticipantSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		default: '',
		required: 'Please fill in the first name'
	},
	lastName: {
		type: String,
		trim: true,
		default: '',
		required: 'Please fill in the last name'
	},
	displayName: {
		type: String,
		trim: true
	},
	phone: {
		type: String,
		trim: true,
		default: '',
		required: 'Please fill in the phone'
	},
	email: {
		type: String,
		trim: true,
		default: '',
		validate: [/^\s*$|.+\@.+\..+/, 'Please provide a valid email address']
	},
	identity: {
		type: String,
		trim: true,
		default: '',
		required: 'Please choose an option for "Who are you ?"'
	},
	affiliation: {
		type: String,
		trim: true,
		default: '',
		required: 'Please fill in the affiliation'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Participant', ParticipantSchema);