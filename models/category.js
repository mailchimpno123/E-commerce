import mongoose from 'mongoose'

// const schema = new mongoose.Schema({
// 	category: {
// 		type: String,
// 		// required: [true, 'Please Enter Category'],
// 	},
// })

// export const Category = mongoose.model('Category', schema)

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
})

export const Category = mongoose.model('Category', schema)
