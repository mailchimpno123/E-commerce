import mongoose from 'mongoose'

// const schema = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: [true, 'Please Enter Name'],
// 	},
// 	description: {
// 		type: String,
// 		required: [true, 'Please Enter Description'],
// 	},
// 	price: {
// 		type: Number,
// 		required: [true, 'Please Enter Price'],
// 	},
// 	stock: {
// 		type: Number,
// 		required: [true, 'Please Enter Stock'],
// 	},
// 	images: [
// 		{
// 			public_id: String,
// 			url: String,
// 		},
// 	],
// 	category: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'Category',
// 	},
// 	createdAt: {
// 		type: Date,
// 		default: Date.now,
// 	},
// })

// export const Product = mongoose.model('Product', schema)

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		stock: {
			type: Number,
			required: true,
			min: 0,
		},
		images: [
			{
				public_id: String,
				url: String,
			},
		],
	},
	{ timestamps: true }
)

export const Product = mongoose.model('Product', schema)
